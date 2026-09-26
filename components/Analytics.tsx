//app/components/Analytics.tsx
'use client';

import { useEffect } from 'react';

const consentKey = 'pynex-cookie-consent';

export default function Analytics({ measurementId }: { measurementId?: string }) {
  useEffect(() => {
    if (!measurementId) return;

    function loadAnalytics() {
      if (document.getElementById('pynex-ga-script')) return;
      const script = document.createElement('script');
      script.id = 'pynex-ga-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
      const w = window as Window & {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
      };
      w.dataLayer = w.dataLayer || [];
      w.gtag = (...args: unknown[]) => w.dataLayer?.push(args);
      w.gtag('js', new Date());
      w.gtag('config', measurementId, { anonymize_ip: true });
    }

    if (localStorage.getItem(consentKey) === 'accepted') loadAnalytics();

    const onConsent = () => {
      const value = localStorage.getItem(consentKey);
      if (value === 'accepted') loadAnalytics();
      // If declined later, we leave the already-loaded script alone in this
      // session; a full page reload (as CookiePreference triggers) will
      // prevent it from loading again.
    };

    window.addEventListener('pynex-cookie-consent-changed', onConsent);
    return () =>
      window.removeEventListener('pynex-cookie-consent-changed', onConsent);
  }, [measurementId]);

  return null;
}