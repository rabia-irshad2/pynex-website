//app/contact/page.tsx
import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import SocialLinks from '@/components/SocialLinks';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with PYNEX. Tell us about your project and we will reply within one business day.',
};

export default function ContactPage() {
  return (
    <section className="contact-page py-section-phone md:py-section-desktop">
      <div className="max-w-[1700px] mx-auto px-5 md:px-8">
        <div className="contact-shell">
          <div className="contact-copy">
            <h1 className="contact-title">
              LET&apos;S BUILD
              <span>SOMETHING TOGETHER</span>
            </h1>

            <p className="contact-subtitle">
              Tell us what you want to build and our team will help you turn your idea into a scalable digital solution.
            </p>

            <div className="contact-meta-grid">
              <div className="contact-meta-column">
                <div className="contact-item">
                  <p className="contact-label">CALL US</p>
                  <a href="tel:+923141754779" className="contact-link">+92 314 1754779</a>
                </div>

                <div className="contact-item compact">
                  <p className="contact-label">LOCATION</p>
                  <p className="contact-text">Islamabad, Pakistan</p>
                  <a
                    href="https://maps.app.goo.gl/rfMw8sbvLK6Aumag9?g_st=ic"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="contact-meta-column">
                <div className="contact-item">
                  <p className="contact-label">EMAIL US</p>
                  <a href="mailto:pynexcompany@gmail.com" className="contact-link">pynexcompany@gmail.com</a>
                </div>

                <div className="contact-item">
                  <p className="contact-label">SOCIAL NETWORKS</p>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
