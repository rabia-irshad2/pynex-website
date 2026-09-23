import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'PYNEX — AI Solutions & Business Automation',
    template: '%s | PYNEX',
  },
  description:
    'PYNEX builds AI solutions, business automation, custom software, and intelligent digital products for businesses ready to grow smarter.',
  openGraph: {
    type: 'website',
    siteName: 'PYNEX',
    images: ['/images/og-default.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {/* Google Analytics 4 — only fires after the visitor accepts cookies (Section 5.7 / 9) */}
        {GA_ID && (
          <>
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
                if (localStorage.getItem('pynex-cookie-consent') !== 'accepted') {
                  gtag('consent', 'default', { analytics_storage: 'denied' });
                }
                window.addEventListener('pynex-cookie-consent-changed', function () {
                  gtag('consent', 'update', { analytics_storage: 'granted' });
                });
              `}
            </Script>
          </>
        )}

        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
