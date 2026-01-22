import { connect } from 'cloudflare:sockets'

interface Env {
  PROTON_EMAIL: string      // Your Proton email (e.g., info@novumi.nl)
  PROTON_SMTP_TOKEN: string // SMTP token from Proton settings
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

    // Check environment variables
    if (!env.PROTON_EMAIL || !env.PROTON_SMTP_TOKEN) {
      console.error('Missing environment variables')
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers }
      )
    }

    // Build email
    const emailContent = buildEmail(data, env.PROTON_EMAIL)

    // Send via Proton SMTP
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
  const socket = connect({
    hostname: 'smtp.protonmail.ch',
    port: 587,
  })

  const writer = socket.writable.getWriter()
  const reader = socket.readable.getReader()
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()

  async function readResponse(): Promise<string> {
    const { value } = await reader.read()
    return decoder.decode(value)
  }

  async function sendCommand(cmd: string): Promise<string> {
    await writer.write(encoder.encode(cmd + '\r\n'))
    return readResponse()
  }

  try {
    // Read greeting
    await readResponse()

    // EHLO
    await sendCommand(`EHLO novumi.nl`)

    // STARTTLS
    await sendCommand('STARTTLS')

    // Upgrade to TLS
    await socket.startTls()

    // EHLO again after TLS
    await sendCommand(`EHLO novumi.nl`)

    // AUTH LOGIN
    await sendCommand('AUTH LOGIN')
    await sendCommand(btoa(email))
    const authResponse = await sendCommand(btoa(token))

    if (!authResponse.startsWith('235')) {
      throw new Error('SMTP authentication failed')
    }

    // MAIL FROM
    await sendCommand(`MAIL FROM:<${email}>`)

    // RCPT TO
    await sendCommand(`RCPT TO:<${email}>`)

    // DATA
    await sendCommand('DATA')

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

    await sendCommand(message)

    // QUIT
    await sendCommand('QUIT')
  } finally {
    writer.releaseLock()
    reader.releaseLock()
    await socket.close()
  }
}

interface EmailContent {
  subject: string
  body: string
  replyTo: string
}

function buildEmail(data: ContactFormData, toEmail: string): EmailContent {
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
