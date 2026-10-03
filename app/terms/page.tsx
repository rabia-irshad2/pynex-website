//app/terms/page.tsx
import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = { title: 'Terms of Service' };

export default function TermsPage() {
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
            Terms of Service
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
              By using this website you agree to use it only for lawful
              purposes. Content on this site — including text, graphics, logos,
              and images — belongs to PYNEX unless otherwise stated, and may not
              be reproduced without permission.
            </p>
            <p>
              Information on this site is provided for general purposes only.
              Project details, pricing, and timelines discussed via the contact
              form are not binding until confirmed in a signed agreement.
            </p>
            <p>
              Questions about these terms can be sent to{' '}
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