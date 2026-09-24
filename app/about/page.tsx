import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import { getPublicImages, getTeam } from '@/lib/content';
import Carousel from '@/components/Carousel';
import Reveal from '@/components/Reveal';
import SafeImage from '@/components/SafeImage';

const qualities = [
  ['Practical Solutions', 'Technology chosen because it solves a real problem.'],
  ['AI and Automation Expertise', 'Skills that turn repetitive work into automatic work.'],
  ['Efficient Delivery', 'Clear plans and steady progress so projects finish on time.'],
  ['Scalable Systems', 'Solutions that keep working as your business and data grow.'],
  ['Client-Focused Approach', 'Every decision is tied back to your goals and workflow.'],
  ['Reliable Support', 'A team that stays available after launch to improve and extend.'],
];

const process = ['Understand the problem', 'Design the solution', 'Build and test', 'Launch and support'];

export const metadata: Metadata = {
  title: 'About',
  description: 'PYNEX builds AI solutions, business automation, and custom software for businesses ready to grow smarter.',
};

export default function AboutPage() {
  const team = getTeam();
  const insidePhotos = getPublicImages('inside');

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

      <Reveal className="py-section-phone md:py-section-desktop">
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
      </Reveal>

      <Reveal className="bg-soft-bg py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>what we believe</SectionLabel>
          <h2 className="section-title mb-10 text-main-text">Practical technology, measured by the difference it makes.</h2>
          <div className="quality-grid">
            {qualities.map(([title, text], index) => (
              <article key={title} className="quality-item"><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>how we work</SectionLabel>
          <h2 className="section-title mb-10 text-main-text">From a clear problem to a useful system.</h2>
          <ol className="process-line">
            {process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>)}
          </ol>
        </div>
      </Reveal>

      {team.length > 0 && (
        <Reveal className="bg-soft-bg py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <SectionLabel>the team</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-main-text">Meet the people behind PYNEX</h2>
            <Carousel>
              {team.map((member: any) => (
                <div key={member.name} className="pynex-card p-6 text-center min-w-[260px] md:min-w-[320px]">
                  <div className="w-20 h-20 rounded-full bg-white mx-auto mb-4 flex items-center justify-center text-primary-blue font-bold text-xl">{member.name.charAt(0)}</div>
                  <p className="font-semibold text-main-text">{member.name}</p>
                  <p className="text-sm text-secondary-text mb-2">{member.role}</p>
                  {member.bio && <p className="text-xs text-secondary-text">{member.bio}</p>}
                </div>
              ))}
            </Carousel>
          </div>
        </Reveal>
      )}

      {insidePhotos.length > 0 && (
        <Reveal className="py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <SectionLabel>inside pynex</SectionLabel>
            <h2 className="section-title mb-10 text-main-text">The people and place behind the work.</h2>
            <div className="inside-gallery">
              {insidePhotos.map((photo) => (
                <SafeImage key={photo} src={photo} alt="PYNEX team and workspace" width={500} height={320} className="h-56 w-full object-cover" fallback={null} />
              ))}
            </div>
          </div>
        </Reveal>
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
