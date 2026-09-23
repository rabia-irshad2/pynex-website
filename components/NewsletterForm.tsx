'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // hidden spam-trap field, real visitors never fill this
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

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
    return <p className="text-accent-cyan text-sm">Thanks — you're subscribed.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <p className="text-white/70 text-sm mb-1">
        Subscribe to our newsletter and receive the latest updates from PYNEX
      </p>
      {/* Honeypot field — hidden from real visitors via CSS, catches basic bots */}
      <input
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="flex gap-2">
        <input
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm placeholder-white/40 focus:outline-none focus:border-accent-cyan"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 rounded-full bg-pynex-gradient text-white text-sm font-semibold disabled:opacity-60"
        >
          {status === 'loading' ? '...' : 'Subscribe'}
        </button>
      </div>
      {status === 'error' && <p className="text-red-400 text-xs">Something went wrong. Try again.</p>}
    </form>
  );
}
