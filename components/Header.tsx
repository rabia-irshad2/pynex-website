//app/components/Header.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu as MenuIcon } from 'lucide-react';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previousY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - previousY) > 6) {
        setHidden(currentY > previousY && currentY > 120);
      }
      previousY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header fixed top-0 left-0 right-0 z-50${hidden && !menuOpen ? ' site-header-hidden' : ''}`}>
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="header-brand" aria-label="PYNEX home">
          <span className="header-logo-mark" aria-hidden="true" />
          <span className="header-brand-name">PYNEX</span>
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          <nav className="header-nav hidden md:flex" aria-label="Main navigation">
            {NAV_LINKS.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </nav>
          <button
            id="pynex-menu-trigger"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="header-menu-trigger text-white p-2 rounded-full transition flex items-center justify-center md:hidden"
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
