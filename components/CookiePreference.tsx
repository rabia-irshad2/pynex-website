//app/components/CookiePreference.tsx
'use client';

import Button from '@/components/Button';

export default function CookiePreference() {
  function changePreference() {
    localStorage.removeItem('pynex-cookie-consent');
    window.dispatchEvent(new Event('pynex-cookie-consent-changed'));
    window.location.reload();
  }

  return (
    <Button
      onClick={changePreference}
      className="btn-secondary mt-4"
      variant="outline"
    >
      Change cookie preference
    </Button>
  );
}
