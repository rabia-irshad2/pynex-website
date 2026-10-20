//app/layout.tsx
import type { Metadata } from 'next';
import { Bebas_Neue } from 'next/font/google';
import '@fontsource-variable/inter';
import '@fontsource-variable/geist-mono';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';
import Analytics from '@/components/Analytics';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: {
    default: 'PYNEX — AI Solutions & Business Automation',
    template: '%s | PYNEX',
  },
  description:
    'PYNEX builds AI solutions, business automation, custom software, and intelligent digital products for businesses ready to grow smarter.',
  openGraph: {
    type: 'website',
    siteName: 'PYNEX',
    images: ['/images/logo/logo.png'],
  },
  twitter: { card: 'summary_large_image' },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bebasNeue.variable}>
      <body>
        <ScrollProgress />
        <Analytics measurementId={GA_ID} />
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
