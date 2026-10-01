//app/components/MobileMenu.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
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
  const menuRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Escape + focus trap + scroll lock
  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a, button'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
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
      menuRef.current?.querySelector<HTMLElement>('button, a')?.focus()
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
        <div className="fixed inset-0 z-[999] flex justify-end">
          {/* Dimmed backdrop — click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer panel — slides in from the right */}
          <motion.aside
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="PYNEX navigation menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full sm:w-[440px] h-full bg-black text-white flex flex-col shadow-2xl border-l border-white/10"
          >
            {/* Subtle grid texture inside the panel */}
            <div
              className="absolute inset-0 pointer-events-none opacity-15"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,198,255,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(0,198,255,.22) 1px, transparent 1px)',
                backgroundSize: '72px 72px',
                maskImage:
                  'linear-gradient(180deg, transparent, black 20%, black 80%, transparent)',
              }}
              aria-hidden="true"
            />

            {/* Top bar */}
            <div className="relative z-10 flex items-center justify-between px-6 py-5 md:px-8">
              <Link
                href="/"
                onClick={onClose}
                aria-label="PYNEX home"
                className="flex items-center"
              >
                <span className="logo-lockup logo-lockup-header">
                  <Image
                    src="/images/logo.png"
                    alt="PYNEX"
                    fill
                    className="logo-image"
                  />
                </span>
              </Link>

              <button
                aria-label="Close menu"
                onClick={onClose}
                className="flex items-center justify-center w-10 h-10 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Divider */}
            <div className="relative z-10 mx-6 md:mx-8 h-px bg-white/10" />

            {/* Book a consultation — top CTA inside drawer */}
            <div className="relative z-10 px-6 md:px-8 pt-6">
              <Link
                href="/contact"
                onClick={onClose}
                className="btn-primary w-full justify-center !py-3"
              >
                Book a consultation
              </Link>
            </div>

            {/* Nav links */}
            <nav className="relative z-10 flex-1 flex flex-col px-6 md:px-8 py-6 gap-1 overflow-y-auto">
              {LINKS.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.04,
                      duration: 0.3,
                      ease: 'easeOut',
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`group flex items-center justify-between py-3 text-2xl md:text-[28px] font-semibold tracking-tight transition-colors ${
                        active
                          ? 'text-accent-cyan'
                          : 'text-white/85 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={20}
                        className={`opacity-0 -translate-x-1 transition-all duration-300 ${
                          active
                            ? 'opacity-100 translate-x-0'
                            : 'group-hover:opacity-100 group-hover:translate-x-0'
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="relative z-10 mx-6 md:mx-8 h-px bg-white/10" />

            {/* Footer — contact + socials */}
            <div className="relative z-10 px-6 md:px-8 py-6 flex flex-col gap-4 text-sm text-white/70">
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:pynexcompany@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-accent-cyan transition"
                >
                  <ArrowUpRight size={16} />
                  pynexcompany@gmail.com
                </a>
                <a
                  href="tel:+923141754779"
                  className="inline-flex items-center gap-2 hover:text-accent-cyan transition"
                >
                  <ArrowUpRight size={16} />
                  +92 314 1754779
                </a>
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