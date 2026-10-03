//app/components/MobileMenu.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import PynexLogo from './PynexLogo';

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

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && ref.current) {
        const focus = ref.current.querySelectorAll<HTMLElement>('a, button');
        if (!focus.length) return;
        const first = focus[0];
        const last = focus[focus.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() =>
      ref.current?.querySelector<HTMLElement>('button, a')?.focus()
    );
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      document.getElementById('pynex-menu-trigger')?.focus();
    };
  }, [open, onClose]);

  if (!mounted) return null;

  const content = (
    <AnimatePresence>
      {open && (
        <div className="drawer-root">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="drawer-backdrop"
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.aside
            ref={ref}
            role="dialog"
            aria-modal="true"
            aria-label="PYNEX navigation menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="drawer-panel"
          >
            {/* Animated gradient mesh background */}
            <div className="drawer-mesh" aria-hidden="true">
              <div className="mesh-blob mesh-blob-1" />
              <div className="mesh-blob mesh-blob-2" />
              <div className="mesh-blob mesh-blob-3" />
            </div>

            {/* Top bar */}
            <div className="drawer-top">
              <Link
                href="/"
                onClick={onClose}
                className="drawer-brand"
                aria-label="PYNEX home"
              >
                <PynexLogo height={36} />
                <span className="header-brand-text">PYNEX</span>
              </Link>
              <button
                aria-label="Close menu"
                onClick={onClose}
                className="drawer-close"
              >
                <X size={22} />
              </button>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              onClick={onClose}
              className="drawer-cta"
            >
              Book a Call <ArrowUpRight size={16} />
            </Link>

            {/* Links — no scrollbar, fits viewport */}
            <nav className="drawer-links">
              {LINKS.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.04,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`drawer-link${active ? ' drawer-link-active' : ''}`}
                    >
                      <span className="drawer-link-number">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="drawer-link-label">{link.label}</span>
                      <ArrowUpRight
                        size={20}
                        className="drawer-link-arrow"
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="drawer-footer">
              <div className="drawer-footer-lines">
                <a href="mailto:pynexcompany@gmail.com">
                  pynexcompany@gmail.com
                </a>
                <a href="tel:+923141754779">+92 314 1754779</a>
              </div>
              <SocialLinks />
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}