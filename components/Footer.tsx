import Link from 'next/link';
import Image from 'next/image';
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

// googleRating: pass a number 1–5 once PYNEX has 5+ public Google reviews; otherwise leave undefined to hide it (Section 3.7).
export default function Footer({ googleRating }: { googleRating?: number }) {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-content mx-auto px-6 md:px-12 py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to make your business smarter?</h2>
        <Link href="/contact" className="btn-primary">
          Book a consultation
        </Link>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-12 pb-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <span className="logo-lockup logo-lockup-footer">
            <Image src="/images/logo.png" alt="PYNEX" fill className="logo-image" />
          </span>
          <p className="text-white/60">AI solutions, business automation, custom software, and intelligent digital products.</p>
        </div>

        <div>
          <p className="font-semibold mb-3">Quick links</p>
          <ul className="space-y-2 text-white/70">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-accent-cyan">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3">Services</p>
          <ul className="space-y-2 text-white/70">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-accent-cyan">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3">Get in touch</p>
          <p className="text-white/70 mb-1">pynexcompany@gmail.com</p>
          <p className="text-white/70 mb-4">+92 314 1754779</p>
          <SocialLinks />
          {googleRating && (
            <p className="text-white/70 mb-4">Rated {googleRating.toFixed(1)}/5 on Google</p>
          )}
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-white/10 px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50 max-w-content mx-auto">
        <p>&copy; {new Date().getFullYear()} PYNEX. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/cookies">Cookies</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/unsubscribe">Unsubscribe</Link>
        </div>
      </div>
    </footer>
  );
}
