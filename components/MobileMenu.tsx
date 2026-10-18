'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowUpRight } from 'lucide-react';
import SocialLinks from './SocialLinks';
import PynexLogo from './PynexLogo';
import Button from '@/components/Button';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Only render the portal AFTER the client has mounted (fixes hydration)
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  // Server render and first client render both return null — identical
  if (!mounted) return null;

  const content = (
    <div className={`drawer-root${open ? ' is-open' : ''}`} aria-hidden={!open}>
      <div className="drawer-backdrop" onClick={onClose} aria-hidden="true" />

      <aside
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label="PYNEX navigation menu"
        className="drawer-panel"
      >
        <div className="drawer-mesh" aria-hidden="true">
          <div className="mesh-blob mesh-blob-1" />
          <div className="mesh-blob mesh-blob-2" />
          <div className="mesh-blob mesh-blob-3" />
        </div>

        <div className="drawer-top">
          <Link href="/" onClick={onClose} className="drawer-brand">
            <PynexLogo height={36} />
            <span className="header-brand-text">PYNEX</span>
          </Link>
          <button onClick={onClose} className="drawer-close" aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <Button href="/contact" onClick={onClose} className="drawer-cta" variant="outline">
          <>Book a Call <ArrowUpRight size={16} aria-hidden="true" /></>
        </Button>

        <nav className="drawer-links">
          {LINKS.map((link, i) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`drawer-link${active ? ' drawer-link-active' : ''}`}
              >
                <span className="drawer-link-number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="drawer-link-label">{link.label}</span>
                <ArrowUpRight size={20} className="drawer-link-arrow" />
              </Link>
            );
          })}
        </nav>

        <div className="drawer-footer">
          <div className="drawer-footer-lines">
            <a href="mailto:pynexcompany@gmail.com">pynexcompany@gmail.com</a>
            <a href="tel:+923141754779">+92 314 1754779</a>
          </div>
          <SocialLinks />
        </div>
      </aside>
    </div>
  );

  return createPortal(content, document.body);
}