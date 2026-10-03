//app/contact/page.tsx
import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import SocialLinks from '@/components/SocialLinks';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with PYNEX. Tell us about your project and we will reply within one business day.',
};

export default function ContactPage() {
  return (
    <section className="contact-page theme-dark-section">
      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* HEADER */}
        <div className="contact-page-header">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <h1 className="contact-page-title">Get in touch</h1>
            <p className="contact-page-intro">
              We&apos;re here to help you turn your ideas into impactful digital
              solutions.
            </p>
          </Reveal>
        </div>

        {/* LAYOUT */}
        <div className="contact-layout">
          {/* Info column */}
          <Reveal>
            <div className="contact-info-block">
              <div>
                <p className="mission-card-label">Let&apos;s build together</p>
                <h2 className="contact-info-heading">
                  Tell us what needs to work better.
                </h2>
              </div>

              <p className="contact-info-text">
                Whether you&apos;re automating repetitive work, exploring AI, or
                building a custom product — start with the business problem.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-row">
                  <span className="contact-info-icon">
                    <Phone size={16} />
                  </span>
                  <div>
                    <p className="contact-info-row-label">Pakistan</p>
                    <p className="contact-info-row-value">
                      <a href="tel:+923141754779">+92 314 1754779</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-row">
                  <span className="contact-info-icon">
                    <Phone size={16} />
                  </span>
                  <div>
                    <p className="contact-info-row-label">UAE</p>
                    <p className="contact-info-row-value">
                      <a href="tel:+971508124362">+971 50 812 4362</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-row">
                  <span className="contact-info-icon">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <p className="contact-info-row-label">Location</p>
                    <p className="contact-info-row-value">
                      Islamabad, Pakistan
                    </p>
                    <p
                      className="contact-info-row-value"
                      style={{ fontSize: '0.85rem' }}
                    >
                      <a
                        href="https://maps.app.goo.gl/rfMw8sbvLK6Aumag9?g_st=ic"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View on Google Maps ↗
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-row">
                  <span className="contact-info-icon">
                    <Mail size={16} />
                  </span>
                  <div>
                    <p className="contact-info-row-label">Email</p>
                    <p className="contact-info-row-value">
                      <a href="mailto:pynexcompany@gmail.com">
                        pynexcompany@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="mission-card-label">Social networks</p>
                <div className="mt-3">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.1}>
            <div className="contact-form-panel">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}