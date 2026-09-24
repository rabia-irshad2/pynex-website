'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '', website: '' });
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
        <p className="text-lg font-semibold text-main-text mb-2">Thank you for contacting PYNEX.</p>
        <p className="text-secondary-text text-sm">We have received your inquiry and will reply within one business day.</p>
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
        <label htmlFor="contact-name" className="block text-sm font-medium text-main-text mb-1">Full name</label>
        <input
          id="contact-name"
          required
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-secondary-text/20 focus:outline-none focus:border-primary-blue"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-main-text mb-1">Email address</label>
        <input
          id="contact-email"
          type="email"
          required
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-secondary-text/20 focus:outline-none focus:border-primary-blue"
        />
      </div>

      <div>
        <label htmlFor="contact-company" className="block text-sm font-medium text-main-text mb-1">Company (optional)</label>
        <input
          id="contact-company"
          value={form.company}
          onChange={(e) => update('company', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-secondary-text/20 focus:outline-none focus:border-primary-blue"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-main-text mb-1" htmlFor="service">Service of interest</label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => update('service', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-secondary-text/20 bg-white focus:outline-none focus:border-primary-blue"
        >
          <option value="">Select a service</option>
          <option value="AI solutions">AI solutions</option>
          <option value="Business automation">Business automation</option>
          <option value="Custom software development">Custom software development</option>
          <option value="Intelligent digital products">Intelligent digital products</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-main-text mb-1" htmlFor="message">Project details</label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-secondary-text/20 focus:outline-none focus:border-primary-blue"
        />
      </div>

      <button type="submit" disabled={status === 'loading'} aria-busy={status === 'loading'} className="btn-primary w-full justify-center disabled:opacity-60">
        {status === 'loading' ? <><span className="spinner" aria-hidden="true" />Sending...</> : 'Send message'}
      </button>

      {status === 'error' && (
        <p className="text-red-500 text-sm" role="alert">Email delivery is not available yet. Please email pynexcompany@gmail.com or WhatsApp +92 314 1754779 directly.</p>
      )}
    </form>
  );
}
