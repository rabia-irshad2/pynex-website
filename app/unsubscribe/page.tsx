//app/unsubscribe/page.tsx
'use client';

import { useState } from 'react';
import SectionLabel from '@/components/SectionLabel';

export default function UnsubscribePage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const response = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || 'Unable to unsubscribe.');
      setSuccess(true);
      setMessage('Your email has been removed from the newsletter.');
      setEmail('');
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : 'Unable to unsubscribe right now.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="theme-dark-section py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-12 max-w-xl">
        <SectionLabel>Newsletter</SectionLabel>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: 0.95,
            textTransform: 'uppercase',
            color: '#fff',
            marginBottom: '1rem',
          }}
        >
          Unsubscribe
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}
        >
          Enter your newsletter email address to remove it from future updates.
        </p>

        {success ? (
          <div className="contact-success-box">
            <p className="contact-success-title">You&apos;re unsubscribed.</p>
            <p className="contact-success-copy">{message}</p>
          </div>
        ) : (
          <form onSubmit={submit} className="contact-form-panel">
            <div className="contact-field">
              <label htmlFor="unsubscribe-email">
                Email address <span>*</span>
              </label>
              <input
                id="unsubscribe-email"
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="contact-form-actions">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="spinner" aria-hidden="true" />
                    Removing...
                  </>
                ) : (
                  'Unsubscribe'
                )}
              </button>
            </div>

            {message && (
              <p className="contact-error" role="status">
                {message}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}