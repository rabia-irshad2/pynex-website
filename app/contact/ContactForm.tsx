//app/contact/ContactForm.tsx
'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    website: '',
  });
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
      <div className="contact-success-box">
        <p className="contact-success-title">Thank you for contacting PYNEX. We have received your inquiry and will reply within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        value={form.website}
        onChange={(e) => update('website', e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <h2 className="contact-form-title">Send us an email</h2>

      <div className="contact-field">
        <label htmlFor="contact-name">
          Full name <span>*</span>
        </label>
        <input
          id="contact-name"
          required
          placeholder="FULL NAME *"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-email">
          Email address <span>*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          required
          placeholder="EMAIL ADDRESS *"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          placeholder="COMPANY"
          value={form.company}
          onChange={(e) => update('company', e.target.value)}
        />
      </div>

      <div className="contact-field">
        <label htmlFor="service">Service of interest</label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => update('service', e.target.value)}
        >
          <option value="">SERVICE OF INTEREST</option>
          <option value="AI solutions">AI solutions</option>
          <option value="Business automation">Business automation</option>
          <option value="Custom software development">
            Custom software development
          </option>
          <option value="Intelligent digital products">
            Intelligent digital products
          </option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="contact-field contact-field-full">
        <label htmlFor="message">
          Project details <span>*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="PROJECT DETAILS *"
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
        />
      </div>

      <div className="contact-form-actions">
        <AnimatedButton
          type="submit"
          disabled={status === 'loading'}
          aria-busy={status === 'loading'}
          className="contact-submit"
        >
          {status === 'loading' ? 'Sending...' : <>Send message <ArrowRight size={16} aria-hidden="true" /></>}
        </AnimatedButton>
      </div>

      {status === 'error' && (
        <p className="contact-error" role="alert">
          Something went wrong. Please email pynexcompany@gmail.com or message us on WhatsApp.
        </p>
      )}
    </form>
  );
}
