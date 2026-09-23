import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a consultation with PYNEX. Tell us about your project and we will get back to you.',
};

export default function ContactPage() {
  return (
    <section className="py-section-phone md:py-section-desktop">
      <div className="max-w-content mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        <div>
          <SectionLabel>get in touch</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-main-text">Book a consultation</h1>
          <p className="text-secondary-text mb-8">
            Tell us about your business and what you&apos;re trying to solve. We&apos;ll get back
            to you within one business day.
          </p>
          <div className="space-y-2 text-secondary-text">
            <p>Email: pynexcompany@gmail.com</p>
            <p>Phone: +92 314 1754779</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
