//app/privacy-policy/page.tsx
import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPolicyPage() {
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
              marginBottom: '1rem',
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '2.5rem',
            }}
          >
            Last updated:{' '}
            {new Date().toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </Reveal>

        <Reveal>
          <div className="legal-body">
            <p>
              PYNEX (&quot;we&quot;, &quot;us&quot;) collects the information you
              submit through our contact form and newsletter signup — your name,
              email address, company name, and message. We use this only to
              respond to your enquiry and, if you subscribe, to send occasional
              updates.
            </p>
            <p>
              We use Google Analytics to understand how visitors use this site.
              Analytics only runs after you accept cookies — see our{' '}
              <a href="/cookies">Cookies policy</a>.
            </p>
            <p>
              We do not sell your data. Contact form and newsletter data is
              processed via Resend, our email delivery provider. You can request
              deletion of your data at any time by emailing{' '}
              <a href="mailto:pynexcompany@gmail.com">
                pynexcompany@gmail.com
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}