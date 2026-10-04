import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import { getPublicImages, getTeam } from '@/lib/content';
import Reveal from '@/components/Reveal';
import SafeImage from '@/components/SafeImage';
import QualityGrid from '@/components/QualityGrid';

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
      <Reveal className="bg-black text-white py-20">
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
      </Reveal>

      <Reveal className="theme-dark-section py-section-phone md:py-section-desktop">
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

      <Reveal className="theme-dark-section py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>what we believe</SectionLabel>
          <h2 className="section-title mb-10 text-main-text">Practical technology, measured by the difference it makes.</h2>
          <QualityGrid qualities={qualities.map(([title, text], index) => [String(index + 1).padStart(2, '0'), title, text])} />
        </div>
      </Reveal>

      <Reveal className="theme-dark-section py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>how we work</SectionLabel>
          <h2 className="section-title mb-10 text-main-text">From a clear problem to a useful system.</h2>
          <ol className="process-line">
            {process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>)}
          </ol>
        </div>
      </Reveal>

      {team.length > 0 && (
        <Reveal className="theme-dark-section py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <SectionLabel>the team</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-main-text">Meet the people behind PYNEX</h2>
            <div className="team-grid">
              {team.map((member: any, index: number) => (
                <Reveal key={member.name} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.12}>
                <article className="team-profile-card">
                  <div className={`team-profile-image team-profile-image-${index + 1}`}>
                    <SafeImage src={member.photo || `/images/team/leader-${index + 1}.svg`} alt={`${member.name}, PYNEX team member`} width={480} height={520} className="h-full w-full object-cover" fallback={<span>{member.name.split(' ').map((part: string) => part[0]).join('')}</span>} />
                  </div>
                  <p className="team-profile-name">{member.name}</p>
                  <p className="team-profile-role">{member.role}</p>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {insidePhotos.length > 0 && (
        <Reveal className="theme-dark-section py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <SectionLabel>inside pynex</SectionLabel>
            <h2 className="section-title mb-10 text-main-text">The people and place behind the work.</h2>
            <div className="inside-gallery">
              {insidePhotos.map((photo, index) => (
                <Reveal key={photo} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.12}>
                  <SafeImage src={photo} alt="PYNEX team and workspace" width={500} height={320} className="h-56 w-full object-cover" fallback={null} />
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      <Reveal className="theme-dark-section py-section-phone md:py-section-desktop text-center">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Want to work with us?</h2>
          <Button href="/contact">Book a Call</Button>
        </div>
      </Reveal>
    </>
  );
}
