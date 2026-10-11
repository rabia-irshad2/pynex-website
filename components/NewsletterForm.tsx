//components/NewsletterForm.tsx
'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>(
    'idle'
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <p className="footer-newsletter-success">
        Thanks — you&apos;re subscribed.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="footer-newsletter-form-inner">
      {/* Honeypot */}
      <input
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <input
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="footer-newsletter-input"
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="footer-newsletter-submit"
      >
        {status === 'loading' ? 'Sending...' : 'Subscribe'}
      </button>

      {status === 'error' && (
        <p className="footer-newsletter-error" role="alert">
          Delivery unavailable — try again later.
        </p>
      )}
    </form>
  );
}