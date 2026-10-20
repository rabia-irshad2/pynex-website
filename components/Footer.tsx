// components/Footer.tsx
import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Linkedin,
  Star,
  ArrowUpRight, // <-- Add this
} from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const QUICK_LINKS = [
  { href: '/projects', label: 'Case studies' },
  { href: '/services', label: 'Services' },
  { href: '/services/ai-solutions', label: 'AI Solutions' },
  { href: '/services/digital-products', label: 'Products' },
  { href: '/contact', label: 'Contact Us' },
];

const SERVICES = [
  { href: '/services/ai-solutions', label: 'AI Solutions' },
  { href: '/services/business-automation', label: 'Business Automation' },
  { href: '/services/custom-software', label: 'Custom Software' },
  { href: '/services/digital-products', label: 'Digital Products' },
];

const SOCIALS = [
  { href: 'https://www.linkedin.com/company/pynex.pk/', Icon: Linkedin },
  { href: 'https://www.facebook.com/share/1KLfm9ApiW/', Icon: Facebook },
  { href: 'https://www.instagram.com/pynex.tech', Icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="pynex-footer">
      {/* Background World Map SVG Graphic */}
      <div className="footer-map-bg" aria-hidden="true">
        <WorldMap />
      </div>

      <div className="footer-container">
        
        {/* TOP MAIN GRID */}
        <div className="footer-main-grid">
          
          {/* Column 1: Brand & CTA */}
          <div className="footer-col-brand">
            <Link href="/" aria-label="PYNEX home" className="footer-logo">
              <Image 
                src="/images/logo/logo.png" 
                alt="PYNEX" 
                width={38} 
                height={38} 
                className="object-contain" 
              />
            </Link>
            <h2 className="footer-brand-title">
              PRODUCT.<br/>
              DESIGN.<br/>
              TECHNOLOGY.
            </h2>
            <Button href="/contact" variant="outline" className="footer-meeting-btn">
              <>
                ARRANGE A MEETING
                <ArrowUpRight size={16} />
              </>
            </Button>
          </div>

          {/* Column 2: PYNEX Links & FOLLOW US Stacked Underneath */}
          <div className="footer-col-group">
            <div className="footer-col-section">
              <p className="footer-col-title">PYNEX</p>
              <ul>
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col-section">
              <p className="footer-col-title">FOLLOW US</p>
              <div className="footer-socials">
                {SOCIALS.map(({ href, Icon }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: SERVICES & CONTACT US Stacked Underneath */}
          <div className="footer-col-group">
            <div className="footer-col-section">
              <p className="footer-col-title">SERVICES</p>
              <ul>
                {SERVICES.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col-section">
              <p className="footer-col-title">CONTACT US</p>
              <a href="mailto:pynexcompany@gmail.com" className="footer-email">
                pynexcompany@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: Ratings & Newsletter */}
        <div className="footer-bottom-bar">
          
          {/* Static Rating Badge - No Link */}
          <div className="footer-reviews-card">
            <div className="footer-reviews-top">
              <span>GOOGLE AVERAGE RATING</span>
              <span className="card-arrow">↗</span>
            </div>
            <div className="footer-reviews-score">
              <strong>4.9 out of 5</strong>
              <div className="footer-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="footer-bottom-divider" />

          {/* Newsletter Text */}
          <div className="footer-newsletter-copy">
            <p>Subscribe to our newsletter and receive<br/>the latest updates from our CEO.</p>
          </div>

          {/* Newsletter Input Form */}
          <div className="footer-newsletter-form-wrap">
            <NewsletterForm />
          </div>

        </div>

        {/* COPYRIGHT BAR */}
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} PYNEX. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/cookies">Cookies</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

/* Precise Dotted World Map Component */
function WorldMap() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMaxYMid slice">
      <defs>
        {/* Active Cyan Map Dots Pattern */}
        <pattern id="cyan-map-dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.25" fill="#00c6ff" opacity="0.8" />
        </pattern>

        {/* Soft Background Grid Dots Pattern */}
        <pattern id="bg-grid-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#1e293b" opacity="0.3" />
        </pattern>
      </defs>

      {/* Subtle Background Grid */}
      <rect width="800" height="500" fill="url(#bg-grid-dots)" />

      {/* Stylized World Map Shapes */}
      <g fill="url(#cyan-map-dots)">
        {/* Eurasia */}
        <path d="M280,60 L580,40 L760,110 L790,200 L680,280 L610,240 L580,180 L510,190 L460,140 L380,130 Z" />
        {/* Middle East & South Asia */}
        <path d="M430,170 L510,150 L560,230 L520,270 L450,220 Z" />
        {/* Africa */}
        <path d="M330,200 L420,210 L450,310 L390,410 L340,320 Z" />
        {/* SE Asia & Oceania */}
        <path d="M620,280 L720,270 L730,370 L640,380 Z" />
      </g>

            {/* UAE Location Pill - Moved Right */}
      <g transform="translate(550, 150)">
        <rect x="0" y="0" width="182" height="28" rx="8" fill="#090d16" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
        <image href="/images/logo/logo.png" x="6" y="5" width="18" height="18" />
        <text x="30" y="18" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="700" letterSpacing="0.8">UNITED ARAB EMIRATES</text>
      </g>

      {/* PAKISTAN Location Pill - Moved Right */}
      <g transform="translate(620, 250)">
        <rect x="0" y="0" width="95" height="28" rx="8" fill="#090d16" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
        <image href="/images/logo/logo.png" x="6" y="5" width="18" height="18" />
        <text x="30" y="18" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="700" letterSpacing="0.8">PAKISTAN</text>
      </g>
    </svg>
  );
}