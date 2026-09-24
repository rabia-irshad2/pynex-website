import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { isRateLimited } from '@/lib/rateLimit';

const ADMIN_EMAIL = process.env.CONTACT_TO_EMAIL || 'pynexcompany@gmail.com';

export async function POST(req: NextRequest) {
  try {
    const clientKey = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(`subscribe:${clientKey}`, 5, 60 * 60 * 1000)) {
      return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email delivery is not configured yet.' }, { status: 503 });
    }

    // Created inside the handler (not at module load) so a missing key during
    // build doesn't crash the build — only a real request needs a real key.
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { email, website } = await req.json();

    if (website) {
      return NextResponse.json({ ok: true }); // honeypot triggered, silently succeed
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Notify PYNEX of the new subscriber
    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        audienceId: process.env.RESEND_AUDIENCE_ID,
        email,
        unsubscribed: false,
      });
    }

    await resend.emails.send({
      from: 'PYNEX Website <onboarding@resend.dev>',
      to: ADMIN_EMAIL,
      subject: 'New newsletter subscriber',
      text: `New subscriber: ${email}`,
    });

    // Send a welcome email to the subscriber
    await resend.emails.send({
      from: 'PYNEX <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to PYNEX',
      text: `Thanks for subscribing to PYNEX updates. We'll keep you posted on new projects, AI insights, and product news.`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
