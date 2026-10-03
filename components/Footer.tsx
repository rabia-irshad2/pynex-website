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
  <h2 className="footer-brand-heading">
    AI.<br />AUTOMATION.<br />SOFTWARE.
  </h2>

  {/* Animated visual below the heading */}
  <div className="footer-visual" aria-hidden="true">
    <div className="footer-visual-grid" />
    <div className="footer-visual-node footer-visual-node-1" />
    <div className="footer-visual-node footer-visual-node-2" />
    <div className="footer-visual-node footer-visual-node-3" />
    <div className="footer-visual-lines" />
  </div>

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

          <section className="footer-locations">
  <div className="footer-locations-header">
    <p className="footer-eyebrow">Our locations</p>
    <h3 className="footer-locations-title">
      Two offices. <span className="footer-locations-title-accent">One team.</span>
    </h3>
    <p className="footer-locations-subtitle">
      Serving clients across Asia, the Middle East, and beyond.
    </p>
  </div>

  <div className="footer-locations-body">
    <div className="footer-map-visual">
      <svg viewBox="0 0 800 400" role="img" aria-label="PYNEX office locations">
        <defs>
          <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.3" fill="#1e3a5f" />
          </pattern>
          <radialGradient id="marker-glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#4fa9ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4fa9ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4fa9ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#7de5ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4fa9ff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="800" height="400" fill="url(#dots)" opacity="0.35" />

        {/* Simplified continent shapes */}
        <path
          d="M80 160 Q160 120 260 130 L360 150 L380 200 L300 260 L200 270 L120 240 Z"
          fill="#0a1830"
          opacity="0.7"
          stroke="#1e3a5f"
          strokeWidth="1"
        />
        <path
          d="M400 200 Q500 180 600 200 L700 240 L680 300 L560 320 L440 300 Z"
          fill="#0a1830"
          opacity="0.7"
          stroke="#1e3a5f"
          strokeWidth="1"
        />

        {/* Connection arc */}
        <path
          d="M430 225 Q455 195 480 265"
          fill="none"
          stroke="url(#arc-gradient)"
          strokeWidth="2"
          strokeDasharray="6 6"
        >
          <animate attributeName="stroke-dashoffset" values="0;-24" dur="2s" repeatCount="indefinite" />
        </path>

        {/* Pakistan marker */}
        <g>
          <circle cx="430" cy="225" r="40" fill="url(#marker-glow)">
            <animate attributeName="r" values="25;50;25" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.2;0.9" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="430" cy="225" r="11" fill="#4fa9ff" />
          <circle cx="430" cy="225" r="4.5" fill="#fff" />
          <text
            x="430"
            y="192"
            textAnchor="middle"
            fill="#7de5ff"
            fontSize="12"
            fontFamily="var(--font-mono)"
            letterSpacing="3"
            fontWeight="600"
          >
            PAKISTAN
          </text>
        </g>

        {/* UAE marker */}
        <g>
          <circle cx="480" cy="265" r="32" fill="url(#marker-glow)">
            <animate attributeName="r" values="20;40;20" dur="3s" begin="0.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.2;0.9" dur="3s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="480" cy="265" r="9" fill="#0057ff" />
          <circle cx="480" cy="265" r="3.5" fill="#fff" />
          <text
            x="480"
            y="300"
            textAnchor="middle"
            fill="#7de5ff"
            fontSize="12"
            fontFamily="var(--font-mono)"
            letterSpacing="3"
            fontWeight="600"
          >
            UAE
          </text>
        </g>
      </svg>
    </div>

    <div className="footer-office-list">
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-office-link"
      >
        <span className="footer-office-flag">🇵🇰</span>
        <span>
          <strong>Pakistan Office</strong>
          <small>Islamabad, Pakistan</small>
        </span>
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>

      <a
        href={UAE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-office-link"
      >
        <span className="footer-office-flag">🇦🇪</span>
        <span>
          <strong>UAE Office</strong>
          <small>United Arab Emirates</small>
          <small className="footer-office-phone">+971 50 812 4362</small>
        </span>
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </div>
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
