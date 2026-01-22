import { connect } from 'cloudflare:sockets'

interface Env {
  PROTON_EMAIL: string
  PROTON_SMTP_TOKEN: string
}

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  jobTitle?: string
  companySize?: string
  screeningsPerYear?: string
  interests?: string[]
  message?: string
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  }

  try {
    const data: ContactFormData = await request.json()

    if (!data.name || !data.email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required' }),
        { status: 400, headers }
      )
    }

    if (!env.PROTON_EMAIL || !env.PROTON_SMTP_TOKEN) {
      console.error('Missing environment variables')
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers }
      )
    }

    const emailContent = buildEmail(data)
    await sendViaProtonSMTP(env.PROTON_EMAIL, env.PROTON_SMTP_TOKEN, emailContent)

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200, headers }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Contact form error:', errorMessage, error)
    return new Response(
      JSON.stringify({ error: 'Failed to send message', details: errorMessage }),
      { status: 500, headers }
    )
  }
}

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

async function sendViaProtonSMTP(email: string, token: string, emailContent: EmailContent): Promise<void> {
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()

  // Connect with STARTTLS option
  let socket = connect({
    hostname: 'smtp.protonmail.ch',
    port: 587,
  }, {
    secureTransport: 'starttls',
  })

  // Helper to read a full SMTP response (may come in multiple chunks)
  async function readLine(reader: ReadableStreamDefaultReader<Uint8Array>): Promise<string> {
    let response = ''
    while (true) {
      const { value, done } = await reader.read()
      if (done) break
      response += decoder.decode(value)
      if (response.includes('\r\n')) break
    }
    return response.trim()
  }

  // Phase 1: Before TLS
  let reader = socket.readable.getReader()
  let writer = socket.writable.getWriter()

  // Read greeting
  const greeting = await readLine(reader)
  console.log('Greeting:', greeting)

  // EHLO
  await writer.write(encoder.encode('EHLO novumi.nl\r\n'))
  const ehlo1 = await readLine(reader)
  console.log('EHLO response:', ehlo1)

  // STARTTLS command
  await writer.write(encoder.encode('STARTTLS\r\n'))
  const starttlsResponse = await readLine(reader)
  console.log('STARTTLS response:', starttlsResponse)

  if (!starttlsResponse.startsWith('220')) {
    throw new Error('STARTTLS not supported: ' + starttlsResponse)
  }

  // Release locks before TLS upgrade
  reader.releaseLock()
  writer.releaseLock()

  // Upgrade to TLS
  socket = await socket.startTls()

  // Phase 2: After TLS - get new reader/writer
  reader = socket.readable.getReader()
  writer = socket.writable.getWriter()

  // EHLO again
  await writer.write(encoder.encode('EHLO novumi.nl\r\n'))
  const ehlo2 = await readLine(reader)
  console.log('EHLO after TLS:', ehlo2)

  // AUTH LOGIN
  await writer.write(encoder.encode('AUTH LOGIN\r\n'))
  const authPrompt = await readLine(reader)
  console.log('AUTH prompt:', authPrompt)

  // Send username (base64)
  await writer.write(encoder.encode(btoa(email) + '\r\n'))
  const userPrompt = await readLine(reader)
  console.log('User prompt:', userPrompt)

  // Send password/token (base64)
  await writer.write(encoder.encode(btoa(token) + '\r\n'))
  const authResult = await readLine(reader)
  console.log('Auth result:', authResult)

  if (!authResult.startsWith('235')) {
    throw new Error('Authentication failed: ' + authResult)
  }

  // MAIL FROM
  await writer.write(encoder.encode(`MAIL FROM:<${email}>\r\n`))
  const mailFrom = await readLine(reader)
  console.log('MAIL FROM:', mailFrom)

  // RCPT TO
  await writer.write(encoder.encode(`RCPT TO:<${email}>\r\n`))
  const rcptTo = await readLine(reader)
  console.log('RCPT TO:', rcptTo)

  // DATA
  await writer.write(encoder.encode('DATA\r\n'))
  const dataResponse = await readLine(reader)
  console.log('DATA response:', dataResponse)

  // Send email content
  const message = [
    `From: Novumi Website <${email}>`,
    `To: ${email}`,
    `Reply-To: ${emailContent.replyTo}`,
    `Subject: ${emailContent.subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/plain; charset=utf-8`,
    ``,
    emailContent.body,
    `.`,
  ].join('\r\n')

  await writer.write(encoder.encode(message + '\r\n'))
  const sendResult = await readLine(reader)
  console.log('Send result:', sendResult)

  // QUIT
  await writer.write(encoder.encode('QUIT\r\n'))

  // Cleanup
  reader.releaseLock()
  writer.releaseLock()
  await socket.close()
}

interface EmailContent {
  subject: string
  body: string
  replyTo: string
}

function buildEmail(data: ContactFormData): EmailContent {
  const lines = [
    `NEW CONTACT FORM SUBMISSION`,
    `================================`,
    ``,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
  ]

  if (data.phone) lines.push(`Phone: ${data.phone}`)
  if (data.company) lines.push(`Company: ${data.company}`)
  if (data.jobTitle) lines.push(`Job Title: ${data.jobTitle}`)
  if (data.companySize) lines.push(`Company Size: ${data.companySize}`)
  if (data.screeningsPerYear) lines.push(`Screenings per Year: ${data.screeningsPerYear}`)
  if (data.interests?.length) lines.push(`Interests: ${data.interests.join(', ')}`)
  if (data.message) {
    lines.push(``)
    lines.push(`Message:`)
    lines.push(`--------`)
    lines.push(data.message)
  }

  lines.push(``)
  lines.push(`================================`)
  lines.push(`Reply directly to respond to ${data.name}`)

  return {
    subject: `New Contact Form Submission from ${data.name}`,
    body: lines.join('\n'),
    replyTo: data.email,
  }
}
