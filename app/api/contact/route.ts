//app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { isRateLimited } from '@/lib/rateLimit';

const ADMIN_EMAIL = process.env.CONTACT_TO_EMAIL || 'pynexcompany@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

export async function POST(req: NextRequest) {
  try {
    const clientKey =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

    if (isRateLimited(`contact:${clientKey}`, 5, 60 * 60 * 1000)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email delivery is not configured yet.' },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { name, email, company, service, message, website } = body;

    // Honeypot — real visitors never fill this hidden field
    if (website) {
      return NextResponse.json({ ok: true });
    }

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please provide your full name.' },
        { status: 400 }
      );
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please provide project details (at least 10 characters).' },
        { status: 400 }
      );
    }

    // Escape HTML to avoid injection into the email body
    const esc = (s: string) =>
      String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

    await resend.emails.send({
      from: `PYNEX Website <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
<<<<<<< HEAD
      reply_to: email, // ← FIXED: was `replyTo`
=======
      reply_to: email,
>>>>>>> 0c06a87 (Fix Google Fonts build error, add self-hosted font)
      subject: `New PYNEX inquiry from ${esc(name)}`,
      html: `
        <h2 style="font-family:sans-serif">New inquiry from the PYNEX website</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
          <tr><td style="padding:4px 12px 4px 0"><strong>Name:</strong></td><td>${esc(name)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0"><strong>Email:</strong></td><td>${esc(email)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0"><strong>Company:</strong></td><td>${company ? esc(company) : '—'}</td></tr>
          <tr><td style="padding:4px 12px 4px 0"><strong>Service of interest:</strong></td><td>${service ? esc(service) : '—'}</td></tr>
        </table>
        <p style="font-family:sans-serif;font-size:14px"><strong>Project details:</strong></p>
        <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${esc(message)}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again.' },
      { status: 500 }
    );
  }
}