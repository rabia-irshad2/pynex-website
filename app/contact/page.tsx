//app/contact/page.tsx
import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import ContactForm from './ContactForm';
import SocialLinks from '@/components/SocialLinks';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with PYNEX. Tell us about your project and we will reply within one business day.',
};

export default function ContactPage() {
  return (
    <section className="py-section-phone md:py-section-desktop">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <SectionLabel>contact</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-main-text">
          Get in touch
        </h1>
        <p className="text-secondary-text max-w-2xl mb-16">
          We&apos;re here to help you turn your ideas into impactful digital solutions.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-main-text">
          Let&apos;s Build Something Together
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact details column */}
          <div className="space-y-6">
            <div>
              <p className="section-label mb-1">call us</p>
              <a
                href="tel:+923141754779"
                className="text-main-text hover:text-primary-blue transition"
              >
                +92 314 1754779
              </a>
              <span className="text-secondary-text text-sm"> (also on WhatsApp)</span>
            </div>

            <div>
              <p className="section-label mb-1">location</p>
              <p className="text-main-text">Islamabad, Pakistan</p>
            </div>

            <div>
              <p className="section-label mb-1">email us</p>
              <a
                href="mailto:pynexcompany@gmail.com"
                className="text-main-text hover:text-primary-blue transition"
              >
                pynexcompany@gmail.com
              </a>
            </div>

            <div>
              <p className="section-label mb-2">social networks</p>
              <SocialLinks />
            </div>
          </div>

          {/* Form column */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}