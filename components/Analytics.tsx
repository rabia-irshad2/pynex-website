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
      const analyticsWindow = window as Window & {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
      };
      analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
      analyticsWindow.gtag = (...args: unknown[]) => analyticsWindow.dataLayer?.push(args);
      analyticsWindow.gtag('js', new Date());
      analyticsWindow.gtag('config', measurementId, { anonymize_ip: true });
    }

    if (localStorage.getItem(consentKey) === 'accepted') loadAnalytics();
    const onConsent = () => loadAnalytics();
    window.addEventListener('pynex-cookie-consent-changed', onConsent);
    return () => window.removeEventListener('pynex-cookie-consent-changed', onConsent);
  }, [measurementId]);

  return null;
}
