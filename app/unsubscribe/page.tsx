'use client';

import { useState } from 'react';
import SectionLabel from '@/components/SectionLabel';

export default function UnsubscribePage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

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
      setMessage('Your email has been removed from the newsletter.');
      setEmail('');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to unsubscribe right now.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-section-phone md:py-section-desktop">
      <div className="max-w-content mx-auto px-6 md:px-12 max-w-xl">
        <SectionLabel>newsletter</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-bold text-main-text mb-5">Unsubscribe</h1>
        <p className="text-secondary-text mb-8">Enter your newsletter email address to remove it from future updates.</p>
        <form onSubmit={submit} className="pynex-card p-6 space-y-4">
          <label htmlFor="unsubscribe-email" className="block text-sm font-medium text-main-text">Email address</label>
          <input id="unsubscribe-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="w-full px-4 py-2 rounded-lg border border-secondary-text/20 focus:outline-none focus:border-primary-blue" />
          <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">{loading ? 'Removing...' : 'Unsubscribe'}</button>
          {message && <p className="text-secondary-text text-sm" role="status">{message}</p>}
        </form>
      </div>
    </section>
  );
}
