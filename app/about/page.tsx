import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import { getTeam } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description: 'PYNEX builds AI solutions, business automation, and custom software for businesses ready to grow smarter.',
};

export default function AboutPage() {
  const team = getTeam();

  return (
    <>
      <section className="bg-black text-white py-20">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>about pynex</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl">
            We build the systems businesses need to grow smarter
          </h1>
          <p className="text-white/70 max-w-xl text-lg">
            PYNEX is a technology company focused on AI solutions, business automation, custom
            software, and intelligent digital products.
          </p>
        </div>
      </section>

      <section className="py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
          <div>
            <SectionLabel>our mission</SectionLabel>
            <h2 className="text-2xl font-bold mb-4 text-main-text">Why we exist</h2>
            <p className="text-secondary-text">
              We believe most businesses are held back by manual, repetitive work and software
              that doesn&apos;t fit how they actually operate. PYNEX exists to close that gap —
              with AI, automation, and software built around each client&apos;s real workflow.
            </p>
          </div>
          <div>
            <SectionLabel>how we work</SectionLabel>
            <h2 className="text-2xl font-bold mb-4 text-main-text">Our approach</h2>
            <p className="text-secondary-text">
              Every engagement starts with understanding the problem, not the tech. We scope
              clearly, build in stages, and ship things that are actually used — not just
              delivered.
            </p>
          </div>
        </div>
      </section>

      {team.length > 0 && (
        <section className="bg-soft-bg py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <SectionLabel>the team</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-main-text">Meet the people behind PYNEX</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {team.map((member: any) => (
                <div key={member.name} className="pynex-card p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-white mx-auto mb-4" />
                  <p className="font-semibold text-main-text">{member.name}</p>
                  <p className="text-sm text-secondary-text mb-2">{member.role}</p>
                  {member.bio && <p className="text-xs text-secondary-text">{member.bio}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-section-phone md:py-section-desktop text-center">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-main-text">Want to work with us?</h2>
          <Button href="/contact">Book a consultation</Button>
        </div>
      </section>
    </>
  );
}
