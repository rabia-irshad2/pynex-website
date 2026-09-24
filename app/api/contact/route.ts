import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { isRateLimited } from '@/lib/rateLimit';

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'pynexcompany@gmail.com';

export async function POST(req: NextRequest) {
  try {
    const clientKey = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(`contact:${clientKey}`)) {
      return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email delivery is not configured yet.' }, { status: 503 });
    }

    // Created inside the handler (not at module load) so a missing key during
    // build doesn't crash the build — only a real request needs a real key.
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, company, service, message, website } = await req.json();

    // Honeypot check — if this hidden field is filled, it's almost certainly a bot.
    if (website) {
      return NextResponse.json({ ok: true }); // pretend success, don't send email
    }

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message || name.length > 120 || email.length > 320 || message.length > 5000) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: `PYNEX Website <${process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'}>`,
      to: TO_EMAIL,
      reply_to: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || '-'}\nService: ${service || '-'}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
