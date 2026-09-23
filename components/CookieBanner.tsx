'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'pynex-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) setVisible(true);
  }, []);

  function choose(value: 'accepted' | 'declined') {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
    if (value === 'accepted') {
      // Loading Google Analytics only after acceptance happens in app/layout.tsx,
      // which reads this same localStorage key on mount.
      window.dispatchEvent(new Event('pynex-cookie-consent-changed'));
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-white/80">
        We use cookies for analytics. Read our{' '}
        <Link href="/cookies" className="underline hover:text-accent-cyan">
          Cookies policy
        </Link>
        .
      </p>
      <div className="flex gap-3 shrink-0">
        <button onClick={() => choose('declined')} className="btn-secondary !border-white !text-white text-sm px-4 py-2">
          Decline
        </button>
        <button onClick={() => choose('accepted')} className="btn-primary text-sm px-4 py-2">
          Accept
        </button>
      </div>
    </div>
  );
}
