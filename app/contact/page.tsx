import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import ContactForm from './ContactForm';
import SocialLinks from '@/components/SocialLinks';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with PYNEX. Tell us about your project and we will reply within one business day.',
};

export default function ContactPage() {
  return (
    <section className="contact-page contact-redesign theme-dark-section">
      <div className="contact-container">
        <header className="contact-page-header"><Reveal><SectionLabel>Contact</SectionLabel><h1 className="contact-page-title">Get in touch</h1><p className="contact-page-intro">We&apos;re here to help you turn your ideas into impactful digital solutions.</p></Reveal></header>
        <div className="contact-layout">
          <Reveal>
            <div className="contact-info-block">
              <h2 className="contact-info-heading">Let&apos;s Build<br />Something Together</h2>
              <p className="contact-info-text">Tell us what needs to work better. Whether you&apos;re automating repetitive work, exploring AI, or building a custom product — start with the business problem.</p>
              <div className="contact-info-list">
                <div className="contact-info-item"><p>Call us</p><a href="tel:+923141754779">+92 314 1754779</a><a href="tel:+971508124362">+971 50 812 4362</a><a className="contact-whatsapp" href="https://wa.me/923141754779">WhatsApp <ArrowUpRight size={14} /></a></div>
                <div className="contact-info-item"><p>Location ( PK )</p><span>Islamabad, Pakistan</span><a className="contact-map-link" href="https://maps.app.goo.gl/rfMw8sbvLK6Aumag9?g_st=ic" target="_blank" rel="noreferrer">View on Google Maps <ArrowUpRight size={14} /></a></div>
                <div className="contact-info-item"><p>Location ( UAE )</p><span>United Arab Emirates</span><a className="contact-map-link" href="https://maps.app.goo.gl/y1pZg8aT7BXb1vx17?g_st=ipc" target="_blank" rel="noreferrer">View on Google Maps <ArrowUpRight size={14} /></a></div>
                <div className="contact-info-item"><p>Email us</p><a href="mailto:pynexcompany@gmail.com">pynexcompany@gmail.com</a></div>
                <div className="contact-info-item contact-social-item"><p>Social networks</p><SocialLinks /></div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}><div className="contact-form-panel"><ContactForm /></div></Reveal>
        </div>
      </div>
    </section>
  );
}
