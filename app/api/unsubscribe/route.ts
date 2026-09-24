import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!process.env.RESEND_API_KEY || !audienceId) {
      return NextResponse.json({ error: 'Newsletter unsubscribe is not configured yet.' }, { status: 503 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.contacts.remove({ audienceId, email });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return NextResponse.json({ error: 'Unable to unsubscribe right now.' }, { status: 500 });
  }
}
