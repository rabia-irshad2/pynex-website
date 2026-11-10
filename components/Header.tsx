'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu } from 'lucide-react';
import { useCallback, useState } from 'react';
import MobileMenu from './MobileMenu';

const NAV = [
  { href: '/',         label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Work' },
  { href: '/about',    label: 'About' },
  { href: '/blog',     label: 'Insights' },
  { href: '/contact',  label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <header className={`site-header${open ? ' menu-open' : ''}`}>
      <div className="header-inner">
        <Link href="/" className="header-brand" aria-label="PYNEX home">
          <span className="header-brand-logo">
            <Image
              src="/images/logo/logo.png"
              alt=""
              fill
              priority
              sizes="48px"
              className="header-brand-logo-img"
            />
          </span>
          <span className="header-brand-text">PYNEX</span>
        </Link>

        <nav className="header-nav" aria-label="Main navigation">
          {NAV.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${active ? ' nav-link-active' : ''}`}
              >
                <span className="btn-swap">
                  <span className="btn-swap-front">{item.label}</span>
                  <span className="btn-swap-back" aria-hidden="true">
                    {item.label}
                  </span>
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="nav-cta">
            <span className="btn-swap">
              <span className="btn-swap-front">
                <Phone size={16} fill="currentColor" aria-hidden="true" />
                Book a Call
              </span>
              <span className="btn-swap-back" aria-hidden="true">
                <Phone size={16} fill="currentColor" aria-hidden="true" />
                Book a Call
              </span>
            </span>
          </Link>

          <button
            className="header-menu-trigger"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={close} />
    </header>
  );
}