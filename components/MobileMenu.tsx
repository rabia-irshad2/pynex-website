'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
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

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>('a, button');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => menuRef.current?.querySelector<HTMLElement>('button, a')?.focus());
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      if (open) document.getElementById('pynex-menu-trigger')?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="PYNEX navigation menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black text-white flex flex-col"
        >
          <div className="flex justify-between items-center px-6 py-4 md:px-12">
            <span className="logo-lockup logo-lockup-header"><Image src="/images/logo.png" alt="PYNEX" fill className="logo-image" /></span>
            <button aria-label="Close menu" onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
              <X size={28} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-6">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`text-4xl md:text-5xl font-semibold hover:text-accent-cyan transition ${
                  pathname === link.href ? 'text-accent-cyan' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 py-8 md:px-12 text-sm text-white/70 flex flex-col md:flex-row gap-3 md:justify-between">
            <div className="flex gap-4">
              <a href="mailto:pynexcompany@gmail.com">pynexcompany@gmail.com</a>
              <a href="tel:+923141754779">+92 314 1754779</a>
            </div>
            <SocialLinks />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
