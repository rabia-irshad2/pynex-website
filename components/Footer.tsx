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
      <svg viewBox="0 0 900 500" role="img" aria-label="PYNEX office locations">
        <defs>
          <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="#1e3a5f" />
          </pattern>
          <radialGradient id="marker-glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#4fa9ff" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#4fa9ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="900" height="500" fill="url(#dots)" opacity="0.4" />

        {/* Continents */}
        <path
          d="M100 200 Q200 140 320 160 L420 190 L440 260 L350 340 L220 350 L130 300 Z"
          fill="#0a1830"
          opacity="0.85"
          stroke="#1e3a5f"
          strokeWidth="1"
        />
        <path
          d="M480 240 Q580 220 700 250 L800 300 L780 380 L640 400 L500 380 Z"
          fill="#0a1830"
          opacity="0.85"
          stroke="#1e3a5f"
          strokeWidth="1"
        />

        {/* Connection line */}
        <line
          x1="510"
          y1="290"
          x2="570"
          y2="340"
          stroke="#7de5ff"
          strokeWidth="2"
          strokeDasharray="8 8"
          opacity="0.7"
        >
          <animate attributeName="stroke-dashoffset" values="0;-32" dur="2s" repeatCount="indefinite" />
        </line>

        {/* Pakistan marker — BIGGER */}
        <g>
          <circle cx="510" cy="290" r="55" fill="url(#marker-glow)">
            <animate attributeName="r" values="35;70;35" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.95;0.2;0.95" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="510" cy="290" r="16" fill="#4fa9ff" />
          <circle cx="510" cy="290" r="6.5" fill="#fff" />
          <text
            x="510"
            y="248"
            textAnchor="middle"
            fill="#7de5ff"
            fontSize="16"
            fontFamily="var(--font-mono)"
            letterSpacing="4"
            fontWeight="700"
          >
            PAKISTAN
          </text>
        </g>

        {/* UAE marker — BIGGER */}
        <g>
          <circle cx="570" cy="340" r="45" fill="url(#marker-glow)">
            <animate attributeName="r" values="28;56;28" dur="3s" begin="0.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.95;0.2;0.95" dur="3s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="570" cy="340" r="13" fill="#0057ff" />
          <circle cx="570" cy="340" r="5" fill="#fff" />
          <text
            x="570"
            y="395"
            textAnchor="middle"
            fill="#7de5ff"
            fontSize="16"
            fontFamily="var(--font-mono)"
            letterSpacing="4"
            fontWeight="700"
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
        <ArrowUpRight size={16} aria-hidden="true" />
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
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </div>
  </div>
</section>

        </div>

        <section className="footer-reviews-panel" aria-label="Google Reviews">
  <div className="footer-reviews-left">
    <div className="footer-reviews-icon-wrap">
      <Star size={24} aria-hidden="true" />
      <div className="footer-reviews-icon-glow" />
    </div>
    <div>
      <p className="footer-eyebrow">Google reviews</p>
      <strong>See what clients are saying.</strong>
      <p>Open Google to view the latest reviews and ratings.</p>
    </div>
  </div>

  <a
    href="https://www.google.com/search?q=PYNEX+company+reviews"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Google reviews <ArrowUpRight size={16} aria-hidden="true" />
  </a>
</section>

        <div className="footer-newsletter-panel">
  <div className="footer-newsletter-visual" aria-hidden="true">
    <div className="footer-newsletter-visual-glow" />
    <svg viewBox="0 0 100 100" className="footer-newsletter-visual-svg">
      <circle cx="50" cy="50" r="30" fill="none" stroke="#4fa9ff" strokeOpacity="0.3" strokeWidth="1" />
      <circle cx="50" cy="50" r="20" fill="none" stroke="#4fa9ff" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="50" cy="50" r="10" fill="#4fa9ff" opacity="0.8" />
      <circle cx="50" cy="50" r="4" fill="#fff" />
    </svg>
  </div>

  <div className="footer-newsletter-copy">
    <p className="footer-eyebrow">Stay in the loop</p>
    <h4 className="footer-newsletter-title">Subscribe to our newsletter.</h4>
    <p className="footer-newsletter-text">
      Latest updates from PYNEX — projects, insights, and product news.
    </p>
  </div>

  <div className="footer-newsletter-form">
    <NewsletterForm />
  </div>
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
