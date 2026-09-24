import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import CookiePreference from '@/components/CookiePreference';

export const metadata: Metadata = { title: 'Cookies Policy' };

export default function CookiesPage() {
  return (
    <section className="py-section-phone md:py-section-desktop">
      <div className="max-w-content mx-auto px-6 md:px-12 prose prose-lg max-w-3xl text-main-text">
        <SectionLabel>legal</SectionLabel>
        <h1>Cookies Policy</h1>
        <p>
          We use a small number of cookies to run this site. Essential cookies keep the site
          working and don&apos;t require consent. Analytics cookies (Google Analytics) help us
          understand how the site is used — these only load after you accept the cookie banner.
        </p>
        <p>
          You can change your choice anytime using the control below. Your current choice is stored
          only in this browser.
        </p>
        <CookiePreference />
      </div>
    </section>
  );
}
