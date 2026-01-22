import { connect } from 'cloudflare:sockets'

/**
 * Contact Form API Handler
 *
 * Security measures implemented:
 * - Input validation and sanitization (CRLF injection prevention)
 * - Field length limits (DoS prevention)
 * - Email format validation
 * - Restricted CORS (only allowed origins)
 * - No sensitive data in error responses
 * - Structured logging (no debug output)
 */

interface Env {
  PROTON_EMAIL: string
  PROTON_SMTP_TOKEN: string
}

// ============== CONFIGURATION ==============

const CONFIG = {
  // Allowed origins for CORS (restrict in production)
  ALLOWED_ORIGINS: [
    'https://novumi.nl',
    'https://www.novumi.nl',
    'http://localhost:3000', // Development
    'http://localhost:5173', // Vite dev
  ],
  // Maximum field lengths
  MAX_LENGTHS: {
    name: 100,
    email: 254,
    phone: 30,
    company: 200,
    jobTitle: 100,
    companySize: 50,
    screeningsPerYear: 50,
    interest: 100,
    message: 5000,
  },
  // SMTP settings
  SMTP: {
    hostname: 'smtp.protonmail.ch',
    port: 587,
    timeout: 30000, // 30 seconds
  },
} as const

// ============== VALIDATION ==============

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const CRLF_REGEX = /[\r\n]/g

function sanitizeCRLF(input: string): string {
  if (!input || typeof input !== 'string') return ''
  return input.replace(CRLF_REGEX, ' ')
}

function sanitizeField(input: unknown, maxLength: number): string {
  if (input === null || input === undefined) return ''
  const str = String(input)
  return sanitizeCRLF(str).slice(0, maxLength)
}

function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false
  if (email.length > CONFIG.MAX_LENGTHS.email) return false
  return EMAIL_REGEX.test(email)
}

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  jobTitle: string
  companySize: string
  screeningsPerYear: string
  interests: string[]
  message: string
}

interface ValidationResult {
  valid: boolean
  error?: string
  data?: ContactFormData
}

function validateInput(raw: unknown): ValidationResult {
  if (!raw || typeof raw !== 'object') {
    return { valid: false, error: 'Invalid request body' }
  }

  const input = raw as Record<string, unknown>

  // Sanitize all fields
  const name = sanitizeField(input.name, CONFIG.MAX_LENGTHS.name)
  const email = sanitizeField(input.email, CONFIG.MAX_LENGTHS.email)
  const phone = sanitizeField(input.phone, CONFIG.MAX_LENGTHS.phone)
  const company = sanitizeField(input.company, CONFIG.MAX_LENGTHS.company)
  const jobTitle = sanitizeField(input.jobTitle, CONFIG.MAX_LENGTHS.jobTitle)
  const companySize = sanitizeField(input.companySize, CONFIG.MAX_LENGTHS.companySize)
  const screeningsPerYear = sanitizeField(input.screeningsPerYear, CONFIG.MAX_LENGTHS.screeningsPerYear)
  const message = sanitizeField(input.message, CONFIG.MAX_LENGTHS.message)

  // Validate interests array
  let interests: string[] = []
  if (Array.isArray(input.interests)) {
    interests = input.interests
      .slice(0, 10)
      .filter((i): i is string => typeof i === 'string')
      .map(i => sanitizeField(i, CONFIG.MAX_LENGTHS.interest))
      .filter(i => i.length > 0)
  }

  // Required fields
  if (!name) {
    return { valid: false, error: 'Name is required' }
  }

  if (!email) {
    return { valid: false, error: 'Email is required' }
  }

  if (!isValidEmail(email)) {
    return { valid: false, error: 'Invalid email format' }
  }

  return {
    valid: true,
    data: { name, email, phone, company, jobTitle, companySize, screeningsPerYear, interests, message },
  }
}

// ============== CORS ==============

function getCorsHeaders(origin: string | null): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  }

  // Only allow specific origins
  if (origin && CONFIG.ALLOWED_ORIGINS.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin
  } else if (origin) {
    // For unknown origins, don't set CORS header (browser will block)
    // In development, you may want to be more permissive
  }

  return headers
}

// ============== HANDLERS ==============

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context
  const origin = request.headers.get('Origin')
  const headers = getCorsHeaders(origin)

  try {
    // Validate environment
    if (!env.PROTON_EMAIL || !env.PROTON_SMTP_TOKEN) {
      console.error('[CONTACT] Missing environment variables')
      return new Response(
        JSON.stringify({ error: 'Service temporarily unavailable' }),
        { status: 503, headers }
      )
    }

    // Parse and validate input
    let rawBody: unknown
    try {
      rawBody = await request.json()
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON' }),
        { status: 400, headers }
      )
    }

    const validation = validateInput(rawBody)
    if (!validation.valid || !validation.data) {
      return new Response(
        JSON.stringify({ error: validation.error || 'Invalid input' }),
        { status: 400, headers }
      )
    }

    // Build and send email
    const emailContent = buildEmail(validation.data)
    await sendViaProtonSMTP(env.PROTON_EMAIL, env.PROTON_SMTP_TOKEN, emailContent)

    // Log success (no PII)
    console.error('[CONTACT] Email sent successfully')

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully' }),
      { status: 200, headers }
    )
  } catch (error) {
    // Log error internally (use console.error for Cloudflare logs)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('[CONTACT] Error:', errorMessage)

    // Return generic error to client (no internal details)
    return new Response(
      JSON.stringify({ error: 'Failed to send message. Please try again later.' }),
      { status: 500, headers }
    )
  }
}

export const onRequestOptions: PagesFunction = async (context) => {
  const origin = context.request.headers.get('Origin')
  const headers = getCorsHeaders(origin)

  return new Response(null, { status: 204, headers })
}

// ============== EMAIL ==============

interface EmailContent {
  subject: string
  body: string
  replyTo: string
}

function buildEmail(data: ContactFormData): EmailContent {
  const lines = [
    'NEW CONTACT FORM SUBMISSION',
    '================================',
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
  ]

  if (data.phone) lines.push(`Phone: ${data.phone}`)
  if (data.company) lines.push(`Company: ${data.company}`)
  if (data.jobTitle) lines.push(`Job Title: ${data.jobTitle}`)
  if (data.companySize) lines.push(`Company Size: ${data.companySize}`)
  if (data.screeningsPerYear) lines.push(`Screenings per Year: ${data.screeningsPerYear}`)
  if (data.interests.length > 0) lines.push(`Interests: ${data.interests.join(', ')}`)
  if (data.message) {
    lines.push('')
    lines.push('Message:')
    lines.push('--------')
    lines.push(data.message)
  }

  lines.push('')
  lines.push('================================')
  lines.push(`Reply directly to respond to ${data.name}`)

  return {
    subject: `New Contact Form Submission from ${data.name}`,
    body: lines.join('\n'),
    replyTo: data.email,
  }
}

async function sendViaProtonSMTP(email: string, token: string, emailContent: EmailContent): Promise<void> {
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()

  let socket = connect({
    hostname: CONFIG.SMTP.hostname,
    port: CONFIG.SMTP.port,
  }, {
    secureTransport: 'starttls',
  })

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

  let reader = socket.readable.getReader()
  let writer = socket.writable.getWriter()

  try {
    // Greeting
    await readLine(reader)

    // EHLO
    await writer.write(encoder.encode('EHLO novumi.nl\r\n'))
    await readLine(reader)

    // STARTTLS
    await writer.write(encoder.encode('STARTTLS\r\n'))
    const starttlsResponse = await readLine(reader)

    if (!starttlsResponse.startsWith('220')) {
      throw new Error('STARTTLS failed')
    }

    // Upgrade to TLS
    reader.releaseLock()
    writer.releaseLock()
    socket = await socket.startTls()
    reader = socket.readable.getReader()
    writer = socket.writable.getWriter()

    // EHLO after TLS
    await writer.write(encoder.encode('EHLO novumi.nl\r\n'))
    await readLine(reader)

    // AUTH LOGIN
    await writer.write(encoder.encode('AUTH LOGIN\r\n'))
    await readLine(reader)

    await writer.write(encoder.encode(btoa(email) + '\r\n'))
    await readLine(reader)

    await writer.write(encoder.encode(btoa(token) + '\r\n'))
    const authResult = await readLine(reader)

    if (!authResult.startsWith('235')) {
      throw new Error('Authentication failed')
    }

    // MAIL FROM
    await writer.write(encoder.encode(`MAIL FROM:<${email}>\r\n`))
    await readLine(reader)

    // RCPT TO
    await writer.write(encoder.encode(`RCPT TO:<${email}>\r\n`))
    await readLine(reader)

    // DATA
    await writer.write(encoder.encode('DATA\r\n'))
    await readLine(reader)

    // Email content (sanitized Reply-To header)
    const safeReplyTo = sanitizeCRLF(emailContent.replyTo)
    const safeSubject = sanitizeCRLF(emailContent.subject)

    const message = [
      `From: Novumi Website <${email}>`,
      `To: ${email}`,
      `Reply-To: ${safeReplyTo}`,
      `Subject: ${safeSubject}`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=utf-8',
      '',
      emailContent.body,
      '.',
    ].join('\r\n')

    await writer.write(encoder.encode(message + '\r\n'))
    await readLine(reader)

    // QUIT
    await writer.write(encoder.encode('QUIT\r\n'))
  } finally {
    try {
      reader.releaseLock()
      writer.releaseLock()
    } catch {
      // Already released
    }
    await socket.close()
  }
}
