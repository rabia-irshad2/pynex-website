import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin } from 'lucide-react';
import NewsletterForm from './NewsletterForm';
import SocialLinks from './SocialLinks';

const SERVICES = [
  { href: '/services/ai-solutions', label: 'AI solutions' },
  { href: '/services/business-automation', label: 'Business automation' },
  { href: '/services/custom-software', label: 'Custom software development' },
  { href: '/services/digital-products', label: 'Intelligent digital products' },
];

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const MAPS_URL = 'https://maps.app.goo.gl/rfMw8sbvLK6Aumag9?g_st=ic';

// Only provide both values after confirming at least five real public Google reviews.
export default function Footer({
  googleRating,
  googleReviewCount = 0,
}: {
  googleRating?: number;
  googleReviewCount?: number;
}) {
  const showGoogleRating = googleReviewCount >= 5 && typeof googleRating === 'number' && googleRating >= 0 && googleRating <= 5;

  return (
    <footer className="pynex-footer bg-black text-white">
      <div className="max-w-content mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-10">
        <div className="footer-main-grid">
          <div className="footer-brand-column">
            <span className="logo-lockup logo-lockup-footer">
              <Image src="/images/logo.png" alt="PYNEX" fill className="logo-image" />
            </span>
            <h2 className="footer-brand-heading">AI.<br />AUTOMATION.<br />SOFTWARE.</h2>
            <Link href="/contact" className="footer-meeting-link">
              Book a consultation <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <nav className="footer-link-column" aria-label="Quick links">
            <p className="footer-eyebrow">PYNEX</p>
            <ul>
              {QUICK_LINKS.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
            </ul>
          </nav>

          <nav className="footer-link-column" aria-label="Services">
            <p className="footer-eyebrow">Services</p>
            <ul>
              {SERVICES.map((service) => <li key={service.href}><Link href={service.href}>{service.label}</Link></li>)}
            </ul>
          </nav>

          <div className="footer-contact-column">
            <p className="footer-eyebrow">Contact us</p>
            <a href="mailto:pynexcompany@gmail.com">pynexcompany@gmail.com</a>
            <a href="tel:+923141754779">+92 314 1754779</a>
            <SocialLinks />
            {showGoogleRating && <a className="footer-rating" href="https://www.google.com/search?q=PYNEX+Islamabad+reviews" target="_blank" rel="noreferrer">Google average rating <strong>{googleRating.toFixed(1)} / 5</strong></a>}
          </div>

          <a className="footer-location-panel" href={MAPS_URL} target="_blank" rel="noopener noreferrer" aria-label="PYNEX location in Islamabad, Pakistan on Google Maps">
            <span className="footer-location-dots" aria-hidden="true" />
            <span className="footer-location-badge"><MapPin size={17} aria-hidden="true" /> Islamabad, Pakistan <ArrowUpRight size={15} aria-hidden="true" /></span>
          </a>
        </div>

        <div className="footer-newsletter-panel">
          {showGoogleRating && <div className="footer-rating-summary"><span className="footer-eyebrow">Google average rating</span><strong>{googleRating.toFixed(1)} <span>/ 5</span></strong></div>}
          <div className="footer-newsletter-copy">Subscribe to our newsletter and receive the latest updates from PYNEX.</div>
          <div className="footer-newsletter-form"><NewsletterForm /></div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PYNEX. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link href="/cookies">Cookies</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/unsubscribe">Unsubscribe</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
