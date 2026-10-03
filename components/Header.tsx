//app/components/Header.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu as MenuIcon, ArrowUpRight } from 'lucide-react';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 12);
        const delta = y - lastY;
        if (Math.abs(delta) > 8) setHidden(delta > 0 && y > 160);
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`site-header${scrolled ? ' is-scrolled' : ''}${
        hidden && !menuOpen ? ' is-hidden' : ''
      }`}
    >
      <div className="header-inner">
        {/* LEFT: Logo */}
        <Link href="/" className="header-brand" aria-label="PYNEX home">
          <span className="header-brand-logo">
            <Image
              src="/images/logo/logo.png"
              alt=""
              fill
              priority
              sizes="88px"
              className="header-brand-logo-img"
            />
          </span>
          <span className="header-brand-text">PYNEX</span>
        </Link>

        {/* CENTER: Nav */}
        <nav className="header-nav" aria-label="Main navigation">
          {NAV_LINKS.map((item) => {
            const active =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${active ? ' nav-link-active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: CTA + menu */}
        <div className="header-actions">
          <Link href="/contact" className="nav-cta">
            Book a Call <ArrowUpRight size={14} />
          </Link>
          <button
            id="pynex-menu-trigger"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="header-menu-trigger"
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}