import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Star } from 'lucide-react';
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
const UAE_MAPS_URL = 'https://maps.app.goo.gl/y1pZg8aT7BXb1vx17?g_st=ipc';

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
              <Image src="/images/logo/logo.png" alt="PYNEX" fill sizes="108px" className="logo-image" />
            </span>
            <h2 className="footer-brand-heading">AI.<br />AUTOMATION.<br />SOFTWARE.</h2>
            <Link href="/contact" className="footer-meeting-link">
              Arrange a Meeting <ArrowUpRight size={18} aria-hidden="true" />
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

          <section className="footer-locations" aria-labelledby="footer-locations-title">
            <div className="footer-map-visual" aria-hidden="true">
              <svg viewBox="0 0 620 270" role="presentation">
                <defs><pattern id="map-dots" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1.25" fill="#9bb5d4" fillOpacity=".42" /></pattern></defs>
                <path d="m44 71 24-20 43-8 18 12 34-5 16 20-18 16-7 25 17 20-13 23-28 3-11 19-19-5-4-25-18-8-11-25-21-11-9-21-17-10V71Zm111 102 22-13 19 7 8 19-12 33-16 22-13-12-4-28-13-11 9-17Zm96-127 27-19 38 4 14 16 41-9 42 14 26-4 22 19 47 8 27 25-12 21-35 8-16 23-34 1-17 20-27-4-16-19-25 7-21-15-8-26-29-6-12-20-29-8-9-18-27-7-7-10 12-11Zm92 117 23-11 27 6 18 25-5 37-17 15-19-15-8-29-19-12v-16Z" fill="url(#map-dots)" stroke="#7891af" strokeOpacity=".36" strokeWidth="1.2" />
                <path d="M385 123c-9 0-16 7-16 16s16 28 16 28 16-19 16-28-7-16-16-16Z" fill="#1686ff"/><circle cx="385" cy="138" r="5" fill="white"/>
                <path d="M401 154c-9 0-16 7-16 16s16 28 16 28 16-19 16-28-7-16-16-16Z" fill="#00c6ff"/><circle cx="401" cy="169" r="5" fill="white"/>
                <path d="M385 145 401 159" stroke="#d7f8ff" strokeWidth="2" strokeDasharray="4 4"/>
              </svg>
              <span className="footer-map-label footer-map-label-pk">PAKISTAN</span>
              <span className="footer-map-label footer-map-label-ae">UAE</span>
            </div>
            <div className="footer-office-list">
              <p id="footer-locations-title" className="footer-eyebrow">OUR LOCATIONS</p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="footer-office-link">
                <MapPin size={17} aria-hidden="true" /><span><strong>Pakistan office</strong><small>Islamabad, Pakistan</small></span><ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a href={UAE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="footer-office-link">
                <MapPin size={17} aria-hidden="true" /><span><strong>UAE office</strong><small>United Arab Emirates</small></span><ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a className="footer-uae-phone" href="tel:+971508124362">+971 50 812 4362</a>
            </div>
          </section>
        </div>

        <section className="footer-reviews-panel" aria-label="Google Reviews">
          <div className="footer-reviews-icon"><Star size={20} aria-hidden="true" /></div>
          <div><p className="footer-eyebrow">GOOGLE REVIEWS</p><strong>See what clients are saying.</strong><p>Open Google to view the latest reviews and ratings.</p></div>
          <a href="https://www.google.com/search?q=PYNEX+company+reviews" target="_blank" rel="noopener noreferrer">View Google reviews <ArrowUpRight size={16} aria-hidden="true" /></a>
        </section>

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
