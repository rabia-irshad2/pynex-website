import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPolicyPage() {
  return (
    <section className="py-section-phone md:py-section-desktop">
      <div className="max-w-content mx-auto px-6 md:px-12 prose prose-lg max-w-3xl text-main-text">
        <SectionLabel>legal</SectionLabel>
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        <p>
          PYNEX (&quot;we&quot;, &quot;us&quot;) collects the information you submit through our
          contact form and newsletter signup — your name, email address, company name, and
          message. We use this only to respond to your enquiry and, if you subscribe, to send
          occasional updates.
        </p>
        <p>
          We use Google Analytics to understand how visitors use this site. Analytics only runs
          after you accept cookies — see our{' '}
          <a href="/cookies">Cookies policy</a>.
        </p>
        <p>
          We do not sell your data. Contact form and newsletter data is processed via Resend, our
          email delivery provider. You can request deletion of your data at any time by emailing{' '}
          pynexcompany@gmail.com.
        </p>
      </div>
    </section>
  );
}
