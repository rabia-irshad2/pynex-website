//app/cookies/page.tsx
import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import CookiePreference from '@/components/CookiePreference';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = { title: 'Cookies Policy' };

export default function CookiesPage() {
  return (
    <section className="legal-page theme-dark-section py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-12 max-w-3xl">
        <Reveal>
          <SectionLabel>Legal</SectionLabel>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              letterSpacing: '0.01em',
              color: '#fff',
              marginBottom: '2rem',
            }}
          >
            Cookies Policy
          </h1>
        </Reveal>

        <Reveal>
          <div className="legal-body">
            <p>
              We use a small number of cookies to run this site. Essential
              cookies keep the site working and don&apos;t require consent.
              Analytics cookies (Google Analytics) help us understand how the
              site is used — these only load after you accept the cookie banner.
            </p>
            <p>
              You can change your choice anytime using the control below. Your
              current choice is stored only in this browser.
            </p>
            <CookiePreference />
          </div>
        </Reveal>
      </div>
    </section>
  );
}