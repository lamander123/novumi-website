interface Env {
  RESEND_API_KEY: string
  CONTACT_EMAIL: string
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

  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  }

  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required' }),
        { status: 400, headers }
      )
    }

    // Build email content
    const emailHtml = buildEmailHtml(data)
    const emailText = buildEmailText(data)

    // Send email via Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Novumi Website <noreply@novumi.nl>',
        to: env.CONTACT_EMAIL || 'info@novumi.nl',
        reply_to: data.email,
        subject: `New Contact Form Submission from ${data.name}`,
        html: emailHtml,
        text: emailText,
      }),
    })

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text()
      console.error('Resend API error:', errorData)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers }
      )
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200, headers }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
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

function buildEmailHtml(data: ContactFormData): string {
  const fields = [
    { label: 'Name', value: data.name },
    { label: 'Email', value: data.email },
    { label: 'Phone', value: data.phone },
    { label: 'Company', value: data.company },
    { label: 'Job Title', value: data.jobTitle },
    { label: 'Company Size', value: data.companySize },
    { label: 'Screenings per Year', value: data.screeningsPerYear },
    { label: 'Interests', value: data.interests?.join(', ') },
    { label: 'Message', value: data.message },
  ].filter(f => f.value)

  const rows = fields
    .map(f => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 180px;">${f.label}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #111827;">${f.value}</td>
      </tr>
    `)
    .join('')

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <div style="background-color: #111827; padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 600;">New Contact Form Submission</h1>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            ${rows}
          </table>
        </div>
        <div style="padding: 16px 24px; background-color: #f9fafb; text-align: center;">
          <p style="margin: 0; font-size: 14px; color: #6b7280;">
            Reply directly to this email to respond to ${data.name}
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

function buildEmailText(data: ContactFormData): string {
  const lines = [
    `NEW CONTACT FORM SUBMISSION`,
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
    lines.push(data.message)
  }

  return lines.join('\n')
}
