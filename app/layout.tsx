import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';
import Analytics from '@/components/Analytics';

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
    images: ['/images/logo.png'],
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
        <Analytics measurementId={GA_ID} />

        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
