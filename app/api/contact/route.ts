import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
  }

  const resend = new Resend(apiKey)

  try {
    const { name, country, type, contact, email, message } = await request.json()

    if (!name || !country || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const contactInfo = contact === 'WhatsApp' ? `Phone: ${email}` : `Email: ${email}`

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'azharahmedp.07@gmail.com',
      subject: `Portfolio Contact — ${name} (${type})`,
      text: [
        `Name: ${name}`,
        `Country: ${country}`,
        `Type: ${type}`,
        contactInfo,
        '',
        `Message:`,
        message,
      ].join('\n'),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
