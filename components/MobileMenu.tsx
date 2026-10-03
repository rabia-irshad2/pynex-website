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
        <div className="fixed inset-0 z-[999] bg-[#082a52] text-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={onClose}
            className="absolute inset-0 bg-[#082a52]"
            aria-hidden="true"
          />

          <motion.aside
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="PYNEX navigation menu"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 h-full w-full overflow-hidden"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.11) 1px, transparent 1px)',
                backgroundSize: '72px 72px',
                maskImage:
                  'linear-gradient(180deg, transparent, black 18%, black 82%, transparent)',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 mx-auto flex h-full max-w-[1800px] flex-col px-5 py-5 sm:px-8 lg:px-12">
              <div className="flex items-center justify-between">
                <Link href="/" onClick={onClose} aria-label="PYNEX home" className="flex items-center gap-3">
                  <span className="logo-lockup logo-lockup-header rounded-full bg-[#0b0d12] p-2 shadow-2xl">
                    <Image src="/images/logo/logo.png" alt="PYNEX" fill sizes="92px" className="logo-image" />
                  </span>
                  <span className="text-[2.1rem] font-black tracking-[-0.06em] text-white sm:text-[2.4rem]">PYNEX</span>
                </Link>

                <button
                  aria-label="Close menu"
                  onClick={onClose}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/10"
                >
                  <X size={30} strokeWidth={1.8} />
                </button>
              </div>

              <nav className="mt-6 flex-1 overflow-y-auto pb-8">
                {LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 + i * 0.05,
                        duration: 0.28,
                        ease: 'easeOut',
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={`group flex items-center justify-between border-t border-white/10 py-4 sm:py-5 ${
                          active ? 'text-[#00d7ff]' : 'text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3 sm:gap-5">
                          <span className="min-w-[2.5rem] text-lg font-medium tracking-tight text-[#91d7ff] sm:text-[1.7rem]">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="menu-link-label text-[2.4rem] font-black uppercase leading-none tracking-[-0.06em] sm:text-[3.5rem] lg:text-[5.2rem]">
                            {link.label}
                          </span>
                        </div>

                        <ArrowUpRight
                          size={28}
                          className={`shrink-0 transition-all ${
                            active ? 'translate-x-0 opacity-100' : 'translate-x-[-8px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="border-t border-white/10 pt-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex flex-col gap-2 text-[1.05rem] text-white/80 sm:text-[1.3rem]">
                    <a href="mailto:pynexcompany@gmail.com" className="transition hover:text-[#00d7ff]">
                      pynexcompany@gmail.com
                    </a>
                    <a href="tel:+923141754779" className="transition hover:text-[#00d7ff]">
                      +92 314 1754779
                    </a>
                  </div>

                  <SocialLinks />
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}