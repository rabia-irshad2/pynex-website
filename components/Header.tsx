'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import MobileMenu from './MobileMenu';
import AnimatedButton from './AnimatedButton';

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Work' },
  { href: '/about',    label: 'About' },
  { href: '/blog',     label: 'Insights' },
  { href: '/contact',  label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const current = window.scrollY;
        const delta = current - lastScroll.current;
        setScrolled(current > 40);
        if (current <= 0) {
          setHidden(false);
          lastScroll.current = 0;
        } else if (Math.abs(delta) >= 8) {
          if (!menuOpen) setHidden(delta > 0 && current > 100);
          lastScroll.current = current;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) setHidden(false);
  }, [menuOpen]);

  return (
    <header className={`site-header${hidden && !menuOpen ? ' is-hidden' : ''}${scrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link href="/" className="header-brand" aria-label="PYNEX home">
          <span className="header-brand-logo">
            <Image src="/images/logo/logo.png" alt="" fill priority sizes="40px" className="header-brand-logo-img" />
          </span>
          <span className="header-brand-text">PYNEX</span>
        </Link>

        <nav className="header-nav" aria-label="Main navigation">
          {NAV_LINKS.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={`nav-link${active ? ' nav-link-active' : ''}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <AnimatedButton href="/contact" className="nav-cta" variant="secondary">
            <Phone size={14} aria-hidden="true" /> Book a Call
          </AnimatedButton>
          <button className="header-menu-trigger" onClick={() => setMenuOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
