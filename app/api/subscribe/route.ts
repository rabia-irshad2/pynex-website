//app/api/subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { isRateLimited } from '@/lib/rateLimit';

const ADMIN_EMAIL = process.env.CONTACT_TO_EMAIL || 'pynexcompany@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

export async function POST(req: NextRequest) {
  try {
    const clientKey =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

    if (isRateLimited(`subscribe:${clientKey}`, 5, 60 * 60 * 1000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Newsletter delivery is not configured yet.' },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { email, website } = await req.json();

    // Honeypot
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Save subscriber to the Resend audience
    if (process.env.RESEND_AUDIENCE_ID) {
      try {
        await resend.contacts.create({
          audienceId: process.env.RESEND_AUDIENCE_ID,
          email,
          unsubscribed: false,
        });
      } catch (contactErr) {
        // Contact may already exist — that's fine, don't fail the whole request
        console.warn('Contact already exists or could not be created:', contactErr);
      }
    }

    // Welcome email to the subscriber
    await resend.emails.send({
      from: `PYNEX <${FROM_EMAIL}>`,
      to: email,
      subject: 'Welcome to PYNEX',
      text:
        'Thanks for subscribing to PYNEX updates. ' +
        "We'll share new projects, AI insights, and product news — and you can unsubscribe at any time.",
    });

    // Notify the PYNEX inbox
    await resend.emails.send({
      from: `PYNEX Website <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: 'New newsletter subscriber',
      text: `New subscriber: ${email}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Subscribe route error:', err);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}