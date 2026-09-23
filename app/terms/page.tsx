import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';

export const metadata: Metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <section className="py-section-phone md:py-section-desktop">
      <div className="max-w-content mx-auto px-6 md:px-12 prose prose-lg max-w-3xl text-main-text">
        <SectionLabel>legal</SectionLabel>
        <h1>Terms of Service</h1>
        <p>Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        <p>
          By using this website you agree to use it only for lawful purposes. Content on this
          site — including text, graphics, logos, and images — belongs to PYNEX unless otherwise
          stated, and may not be reproduced without permission.
        </p>
        <p>
          Information on this site is provided for general purposes only. Project details,
          pricing, and timelines discussed via the contact form are not binding until confirmed
          in a signed agreement.
        </p>
        <p>Questions about these terms can be sent to pynexcompany@gmail.com.</p>
      </div>
    </section>
  );
}
