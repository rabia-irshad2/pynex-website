//app/components/CookieBanner.tsx
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
      window.dispatchEvent(new Event('pynex-cookie-consent-changed'));
    }
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p>
        We use cookies for analytics. Read our{' '}
        <Link href="/cookies">Cookies policy</Link>.
      </p>
      <div className="cookie-actions">
        <button
          onClick={() => choose('declined')}
          className="cookie-decline"
        >
          Decline
        </button>
        <button
          onClick={() => choose('accepted')}
          className="cookie-accept"
        >
          Accept
        </button>
      </div>
    </div>
  );
}