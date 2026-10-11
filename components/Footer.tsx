//components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Star,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import NewsletterForm from './NewsletterForm';

/* ═══════════════════════════════════════════════
   CONFIG
   ═══════════════════════════════════════════════ */

const SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/1KLfm9ApiW/', Icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/pynex.tech', Icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/pynex.pk/', Icon: Linkedin },
  // Add your X/Twitter URL when ready:
  { label: 'X', href: '#', Icon: Twitter },
  // Add your YouTube URL when ready:
  { label: 'YouTube', href: '#', Icon: Youtube },
];

const SERVICES = [
  { href: '/services/ai-solutions', label: 'AI solutions' },
  { href: '/services/business-automation', label: 'Business automation' },
  { href: '/services/custom-software', label: 'Custom software' },
  { href: '/services/digital-products', label: 'Digital products' },
];

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const PK_MAPS = 'https://maps.app.goo.gl/rfMw8sbvLK6Aumag9?g_st=ic';
const UAE_MAPS = 'https://maps.app.goo.gl/y1pZg8aT7BXb1vx17?g_st=ipc';
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923141754779';

/* ═══════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════ */

export default function Footer({
  googleRating,
  googleReviewCount = 0,
}: {
  googleRating?: number;
  googleReviewCount?: number;
}) {
  const showGoogleRating =
    googleReviewCount >= 5 &&
    typeof googleRating === 'number' &&
    googleRating >= 0 &&
    googleRating <= 5;

  return (
    <footer className="pynex-footer">
      <div className="container-pynex">
        {/* ═══ TOP: Socials + Free Support ═══ */}
        <div className="footer-top-strip">
          <div className="footer-socials">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href === '#' ? undefined : '_blank'}
                rel={href === '#' ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="footer-social-icon"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-support-link"
          >
            <MessageCircle size={14} aria-hidden="true" />
            <span>Free support</span>
          </a>
        </div>

        {/* ═══ HERO: Big headline + CTA ═══ */}
        <div className="footer-hero">
          <h2 className="footer-hero-title">
            Product. Design.
            <br />
            <span className="footer-hero-accent">Technology.</span>
          </h2>

          <Link href="/contact" className="footer-hero-cta">
            Arrange a Meeting
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

        {/* ═══ MIDDLE: Brand + Links ═══ */}
        <div className="footer-middle">
          {/* Brand column */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-brand-mark" aria-label="PYNEX home">
              <Image
                src="/images/logo/logo.png"
                alt="PYNEX"
                width={110}
                height={68}
                priority
              />
            </Link>

            <p className="footer-brand-text">
              AI. Automation. Software.
            </p>
          </div>

          {/* Quick links */}
          <nav className="footer-link-col" aria-label="Quick links">
            <p className="footer-col-title">Quick Links</p>
            <ul>
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="footer-link-col" aria-label="Services">
            <p className="footer-col-title">Services</p>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer-contact-col">
            <p className="footer-col-title">Contact Us</p>
            <a href="mailto:pynexcompany@gmail.com" className="footer-contact-line">
              pynexcompany@gmail.com
            </a>
            <a href="tel:+923141754779" className="footer-contact-line">
              +92 314 1754779
            </a>
            <a href="tel:+971508124362" className="footer-contact-line">
              +971 50 812 4362
            </a>
          </div>
        </div>

        {/* ═══ LOCATIONS: Map + offices ═══ */}
        <div className="footer-locations">
          <p className="footer-col-title">Our Locations</p>

          <div className="footer-locations-body">
            {/* Map visual */}
            <div className="footer-map-visual">
              <svg viewBox="0 0 900 500" role="img" aria-label="PYNEX office locations">
                <defs>
                  <pattern id="footer-dots" width="14" height="14" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.4" fill="#1e3a5f" />
                  </pattern>
                  <radialGradient id="footer-marker-glow" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#4fa9ff" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#4fa9ff" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <rect width="900" height="500" fill="url(#footer-dots)" opacity="0.4" />

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
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-32"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </line>

                {/* Pakistan marker */}
                <g>
                  <circle cx="510" cy="290" r="55" fill="url(#footer-marker-glow)">
                    <animate
                      attributeName="r"
                      values="35;70;35"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.95;0.2;0.95"
                      dur="3s"
                      repeatCount="indefinite"
                    />
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

                {/* UAE marker */}
                <g>
                  <circle cx="570" cy="340" r="45" fill="url(#footer-marker-glow)">
                    <animate
                      attributeName="r"
                      values="28;56;28"
                      dur="3s"
                      begin="0.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.95;0.2;0.95"
                      dur="3s"
                      begin="0.5s"
                      repeatCount="indefinite"
                    />
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

            {/* Office cards */}
            <div className="footer-office-list">
              <a
                href={PK_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-office-link"
              >
                <span className="footer-office-flag" aria-hidden="true">🇵🇰</span>
                <div className="footer-office-text">
                  <strong>Pakistan Office</strong>
                  <span>Islamabad, Pakistan</span>
                </div>
                <MapPin size={16} aria-hidden="true" className="footer-office-arrow" />
              </a>

              <a
                href={UAE_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-office-link"
              >
                <span className="footer-office-flag" aria-hidden="true">🇦🇪</span>
                <div className="footer-office-text">
                  <strong>UAE Office</strong>
                  <span>United Arab Emirates</span>
                  <span className="footer-office-phone">+971 50 812 4362</span>
                </div>
                <MapPin size={16} aria-hidden="true" className="footer-office-arrow" />
              </a>
            </div>
          </div>
        </div>

        {/* ═══ BOTTOM PANELS: Reviews + Newsletter ═══ */}
        <div className="footer-bottom-panels">
          {/* Reviews */}
          <a
            href="https://www.google.com/search?q=PYNEX+company+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-reviews-panel"
          >
            <div className="footer-reviews-icon">
              <Star size={20} aria-hidden="true" />
            </div>
            <div className="footer-reviews-text">
              <p className="footer-col-title">Google Reviews</p>
              <strong>
                {showGoogleRating
                  ? `${googleRating!.toFixed(1)} / 5`
                  : 'See what clients say'}
              </strong>
              <span>
                {showGoogleRating
                  ? `${googleReviewCount} verified reviews`
                  : 'Read the latest feedback'}
              </span>
            </div>
            <ArrowUpRight size={16} aria-hidden="true" className="footer-panel-arrow" />
          </a>

          {/* Newsletter */}
          <div className="footer-newsletter-panel">
            <div className="footer-newsletter-text">
              <p className="footer-col-title">Stay in the loop</p>
              <strong>Useful ideas, occasionally.</strong>
              <span>Project notes and practical updates from PYNEX.</span>
            </div>
            <div className="footer-newsletter-form">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* ═══ BOTTOM BAR ═══ */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PYNEX. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link href="/cookies">Cookies</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}