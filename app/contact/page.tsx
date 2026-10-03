//app/contact/page.tsx
import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import SocialLinks from '@/components/SocialLinks';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with PYNEX. Tell us about your project and we will reply within one business day.',
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-intro-wrap max-w-content mx-auto px-6 md:px-12">
        <div className="contact-intro">
          <p className="contact-overline">Contact</p>
          <h1>Get in touch</h1>
          <p>We&apos;re here to help you turn your ideas into impactful digital solutions.</p>
        </div>
      </div>

      <div className="contact-content-wrap max-w-content mx-auto px-6 md:px-12">
        <div className="contact-shell">
          <div className="contact-copy">
            <p className="contact-overline">Let&apos;s build something together</p>
            <h2 className="contact-title">Tell us what needs to work better.</h2>
            <p className="contact-subtitle">
              Whether you are looking to automate repetitive work, explore AI, or build a custom product, start with the business problem.
            </p>

            <div className="contact-details-list">
              <div className="contact-info-row">
                <span className="contact-info-icon"><Phone size={16} aria-hidden="true" /></span>
                <span><strong>Pakistan</strong><a href="tel:+923141754779">+92 314 1754779</a></span>
              </div>
              <div className="contact-info-row">
                <span className="contact-info-icon"><Phone size={16} aria-hidden="true" /></span>
                <span><strong>United Arab Emirates</strong><a href="tel:+971508124362">+971 50 812 4362</a></span>
              </div>
              <div className="contact-info-row">
                <span className="contact-info-icon"><MapPin size={16} aria-hidden="true" /></span>
                <span><strong>Location</strong><span>Islamabad, Pakistan</span><a href="https://maps.app.goo.gl/rfMw8sbvLK6Aumag9?g_st=ic" target="_blank" rel="noreferrer">View on Google Maps ↗</a><a href="https://maps.app.goo.gl/y1pZg8aT7BXb1vx17?g_st=ipc" target="_blank" rel="noreferrer">UAE office on Google Maps ↗</a></span>
              </div>
              <div className="contact-info-row">
                <span className="contact-info-icon"><Mail size={16} aria-hidden="true" /></span>
                <span><strong>Email us</strong><a href="mailto:pynexcompany@gmail.com">pynexcompany@gmail.com</a></span>
              </div>
            </div>
            <div className="contact-socials"><p className="contact-label">Social networks</p><SocialLinks /></div>
          </div>

          <div className="contact-form-panel">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
