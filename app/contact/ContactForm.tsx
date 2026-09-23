'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="pynex-card p-8">
        <p className="text-lg font-semibold text-main-text mb-2">Thanks — message received.</p>
        <p className="text-secondary-text text-sm">We&apos;ll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="pynex-card p-8 space-y-4">
      {/* Honeypot field — hidden from real visitors, catches basic bots (Section 5.5) */}
      <input
        type="text"
        value={form.website}
        onChange={(e) => update('website', e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label className="block text-sm font-medium text-main-text mb-1">Name</label>
        <input
          required
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-secondary-text/20 focus:outline-none focus:border-primary-blue"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-main-text mb-1">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-secondary-text/20 focus:outline-none focus:border-primary-blue"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-main-text mb-1">Company (optional)</label>
        <input
          value={form.company}
          onChange={(e) => update('company', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-secondary-text/20 focus:outline-none focus:border-primary-blue"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-main-text mb-1">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-secondary-text/20 focus:outline-none focus:border-primary-blue"
        />
      </div>

      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center disabled:opacity-60">
        {status === 'loading' ? 'Sending...' : 'Send message'}
      </button>

      {status === 'error' && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>
      )}
    </form>
  );
}
