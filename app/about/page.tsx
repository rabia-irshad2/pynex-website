import type { Metadata } from 'next';
import Image from 'next/image';
import { BrainCircuit, Gauge, LifeBuoy, Network, Target, UsersRound } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import AnimatedButton from '@/components/AnimatedButton';
import { getPublicImages, getTeam } from '@/lib/content';
import Reveal from '@/components/Reveal';
import SafeImage from '@/components/SafeImage';

const companyDescription = 'PYNEX is a technology startup focused on AI solutions, business automation, custom software development, and intelligent digital products. Our vision is to build technology that makes businesses smarter, faster, and more efficient. PYNEX aims to help businesses improve their operations, reduce repetitive work, and solve real-world business problems through practical technology solutions.';
const beliefs = [
  'Practical technology that solves real business problems',
  'Honest communication',
  'Results that can be measured',
];
const qualities = [
  { title: 'Practical Solutions', text: 'Technology chosen because it solves a real problem, not because it is fashionable.', Icon: Target },
  { title: 'AI and Automation Expertise', text: 'Skills in AI and automation that turn repetitive work into automatic work.', Icon: BrainCircuit },
  { title: 'Efficient Delivery', text: 'Clear plans and steady progress, so projects finish on time.', Icon: Gauge },
  { title: 'Scalable Systems', text: 'Solutions that keep working as your business and your data grow.', Icon: Network },
  { title: 'Client-Focused Approach', text: 'Every decision is tied back to your goals and your daily workflow.', Icon: UsersRound },
  { title: 'Reliable Support', text: 'A team that stays available after launch to fix, improve, and extend.', Icon: LifeBuoy },
];
const process = ['Understand the problem', 'Design the solution', 'Build and test', 'Launch and support'];

export const metadata: Metadata = {
  title: 'About',
  description: 'PYNEX builds practical AI, automation, software, and digital products for businesses.',
};

export default function AboutPage() {
  const team = getTeam();
  const insidePhotos = getPublicImages('inside');
  return (
    <div className="about-page theme-dark-section">
      <section className="about-hero">
        <div className="about-container about-hero-layout">
          <Reveal>
            <SectionLabel>About</SectionLabel>
            <h1 className="about-hero-title">We build technology that works for your business</h1>
            <p className="about-hero-intro">{companyDescription}</p>
          </Reveal>
          <Image className="about-logo-mark" src="/images/logo/logo.png" alt="" width={520} height={520} priority />
        </div>
      </section>

      <section className="about-section about-story">
        <div className="about-container about-two-col">
          <Reveal><SectionLabel>Our story</SectionLabel><h2>Technology with a clear purpose.</h2></Reveal>
          <Reveal><p>{companyDescription}</p><p>We focus on the daily work behind each business problem, then shape practical systems around the people and processes that use them.</p></Reveal>
        </div>
      </section>

      <section className="about-section about-rows">
        <div className="about-container">
          <Reveal><div className="about-open-row"><div><SectionLabel>Our mission</SectionLabel><h2>Why we exist</h2></div><p>We believe most businesses are held back by manual, repetitive work and software that doesn&apos;t fit how they actually operate. PYNEX exists to close that gap — with AI, automation, and software built around each client&apos;s real workflow.</p></div></Reveal>
          <Reveal><div className="about-open-row"><div><SectionLabel>Our approach</SectionLabel><h2>How we work</h2></div><p>Every engagement starts with understanding the problem, not the tech. We scope clearly, build in stages, and ship things that are actually used — not just delivered.</p></div></Reveal>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <Reveal><SectionLabel>What PYNEX believes</SectionLabel><h2 className="about-section-title">Principles we bring to the work.</h2></Reveal>
          <div className="about-beliefs-grid">{beliefs.map((belief, i) => <Reveal key={belief} delay={i * .07}><article><span>0{i + 1}</span><h3>{belief}</h3></article></Reveal>)}</div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <Reveal><SectionLabel>Why work with PYNEX</SectionLabel><h2 className="about-section-title">Built around your work.</h2></Reveal>
          <div className="about-qualities-grid">{qualities.map(({ title, text, Icon }, i) => <Reveal key={title} delay={i * .05}><article><Icon size={27} strokeWidth={1.6} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <Reveal><SectionLabel>How we work</SectionLabel><h2 className="about-section-title">From problem to progress.</h2></Reveal>
          <ol className="about-process">{process.map((step, i) => <li key={step}><span>0{i + 1}</span><strong>{step}</strong></li>)}</ol>
        </div>
      </section>

      {team.length > 0 && <section className="about-section">
        <div className="about-container"><Reveal><SectionLabel>The team</SectionLabel><h2 className="about-section-title about-center">People behind PYNEX.</h2></Reveal>
          <div className="about-team-grid">{team.slice(0, 2).map((member: any, i: number) => <Reveal key={member.name} delay={i * .1}><article><Image src={member.photo || (i === 0 ? '/images/team/muhammad-ibrahim.svg' : '/images/team/mirza-abdul-rehman.svg')} alt={`${member.name}, PYNEX team member`} width={520} height={520} /><h3>{member.name}</h3><p>{member.role}</p></article></Reveal>)}</div>
        </div>
      </section>}

      {insidePhotos.length > 0 && <section className="about-section"><div className="about-container"><Reveal><SectionLabel>Inside PYNEX</SectionLabel></Reveal><div className="inside-gallery">{insidePhotos.map((photo) => <SafeImage key={photo} src={photo} alt="PYNEX team and workspace" width={500} height={320} className="h-56 w-full object-cover rounded-2xl" fallback={null} />)}</div></div></section>}

      <section className="about-closing"><Reveal><h2>Ready to make your business smarter?</h2><AnimatedButton href="/contact">Book a consultation</AnimatedButton></Reveal></section>
    </div>
  );
}
