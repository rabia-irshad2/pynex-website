import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'pynexcompany@gmail.com';

export async function POST(req: NextRequest) {
  try {
    // Created inside the handler (not at module load) so a missing key during
    // build doesn't crash the build — only a real request needs a real key.
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, company, message, website } = await req.json();

    // Honeypot check — if this hidden field is filled, it's almost certainly a bot.
    if (website) {
      return NextResponse.json({ ok: true }); // pretend success, don't send email
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'PYNEX Website <onboarding@resend.dev>', // replace with a verified domain sender once DNS is set up
      to: TO_EMAIL,
      reply_to: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || '-'}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
