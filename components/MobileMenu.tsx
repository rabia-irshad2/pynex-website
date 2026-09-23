'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

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

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black text-white flex flex-col"
        >
          <div className="flex justify-between items-center px-6 py-4 md:px-12">
            <span className="font-bold text-xl">PYNEX</span>
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
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
