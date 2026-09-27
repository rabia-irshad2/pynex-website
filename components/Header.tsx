//app/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu as MenuIcon } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 border-b border-white/5">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" aria-label="PYNEX home" className="flex items-center">
          <span className="logo-lockup logo-lockup-header">
            <Image src="/images/logo.png" alt="PYNEX" fill priority className="logo-image" />
          </span>
        </Link>

        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href="/contact"
            className="btn-primary hidden sm:inline-flex !py-2.5 !px-5 !text-sm"
          >
            Book a consultation
          </Link>
          <button
            id="pynex-menu-trigger"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="text-white p-2 rounded-full hover:bg-white/10 transition flex items-center justify-center"
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}