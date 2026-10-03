//app/about/page.tsx
import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import { getPublicImages, getTeam } from '@/lib/content';
import Reveal from '@/components/Reveal';
import SafeImage from '@/components/SafeImage';
import QualityGrid from '@/components/QualityGrid';

const qualities: [string, string, string][] = [
  ['01', 'Practical Solutions', 'Technology chosen because it solves a real problem.'],
  ['02', 'AI and Automation Expertise', 'Skills that turn repetitive work into automatic work.'],
  ['03', 'Efficient Delivery', 'Clear plans and steady progress so projects finish on time.'],
  ['04', 'Scalable Systems', 'Solutions that keep working as your business and data grow.'],
  ['05', 'Client-Focused Approach', 'Every decision is tied back to your goals and workflow.'],
  ['06', 'Reliable Support', 'A team that stays available after launch to improve and extend.'],
];

const process = [
  'Understand the problem',
  'Design the solution',
  'Build and test',
  'Launch and support',
];

export const metadata: Metadata = {
  title: 'About',
  description:
    'PYNEX builds AI solutions, business automation, and custom software for businesses ready to grow smarter.',
};

export default function AboutPage() {
  const team = getTeam();
  const insidePhotos = getPublicImages('inside');

  return (
    <>
      {/* HERO */}
      <section className="about-hero theme-dark-section">
        <div className="max-w-content mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <SectionLabel>About PYNEX</SectionLabel>
            <h1 className="about-hero-title">
              We build the systems businesses need to grow smarter.
            </h1>
            <p className="about-hero-intro">
              PYNEX is a technology company focused on AI solutions, business
              automation, custom software, and intelligent digital products.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISSION + APPROACH */}
      <section className="theme-dark-section">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="mission-block">
            <Reveal>
              <div className="mission-card">
                <p className="mission-card-label">Our mission</p>
                <h3 className="mission-card-title">Why we exist</h3>
                <p className="mission-card-text">
                  We believe most businesses are held back by manual, repetitive
                  work and software that doesn&apos;t fit how they actually
                  operate. PYNEX exists to close that gap — with AI, automation,
                  and software built around each client&apos;s real workflow.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mission-card">
                <p className="mission-card-label">How we work</p>
                <h3 className="mission-card-title">Our approach</h3>
                <p className="mission-card-text">
                  Every engagement starts with understanding the problem, not the
                  tech. We scope clearly, build in stages, and ship things that
                  are actually used — not just delivered.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="theme-dark-section py-16 md:py-24 border-t border-white/5">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>What we believe</SectionLabel>
            <h2 className="section-title mb-10">
              Practical technology, measured by the difference it makes.
            </h2>
          </Reveal>
          <QualityGrid qualities={qualities} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="theme-dark-section py-16 md:py-24 border-t border-white/5">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>How we work</SectionLabel>
            <h2 className="section-title mb-10">
              From a clear problem to a useful system.
            </h2>
          </Reveal>

          <ol className="process-line">
            {process.map((step, i) => (
              <li key={step}>
                <span>0{i + 1}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TEAM */}
      {team.length > 0 && (
        <section className="theme-dark-section py-16 md:py-24 border-t border-white/5">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <Reveal>
              <SectionLabel>The team</SectionLabel>
              <h2 className="section-title mb-10">
                Meet the people behind PYNEX.
              </h2>
            </Reveal>

            <div className="team-grid">
              {team.map((member: any, index: number) => (
                <Reveal key={member.name} delay={index * 0.1}>
                  <article className="team-profile-card">
                    <div
                      className={`team-profile-image team-profile-gradient-${(index % 4) + 1}`}
                    >
                      {member.photo ? (
                        <SafeImage
                          src={member.photo}
                          alt={`${member.name}, PYNEX team member`}
                          width={480}
                          height={520}
                          className="h-full w-full object-cover"
                          fallback={
                            <span className="team-avatar-initials">
                              {member.name
                                .split(' ')
                                .map((p: string) => p[0])
                                .slice(0, 2)
                                .join('')}
                            </span>
                          }
                        />
                      ) : (
                        <span className="team-avatar-initials">
                          {member.name
                            .split(' ')
                            .map((p: string) => p[0])
                            .slice(0, 2)
                            .join('')}
                        </span>
                      )}
                    </div>
                    <p className="team-profile-name">{member.name}</p>
                    <p className="team-profile-role">{member.role}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INSIDE PYNEX */}
      {insidePhotos.length > 0 && (
        <section className="theme-dark-section py-16 md:py-24 border-t border-white/5">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <Reveal>
              <SectionLabel>Inside PYNEX</SectionLabel>
              <h2 className="section-title mb-10">
                The people and place behind the work.
              </h2>
            </Reveal>

            <div className="inside-gallery">
              {insidePhotos.map((photo, i) => (
                <Reveal key={photo} delay={i * 0.06}>
                  <SafeImage
                    src={photo}
                    alt="PYNEX team and workspace"
                    width={500}
                    height={320}
                    className="h-56 w-full object-cover rounded-2xl"
                    fallback={null}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="theme-dark-section py-20 md:py-28 text-center border-t border-white/5">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="section-title mb-6">Want to work with us?</h2>
            <p className="text-secondary-text mb-8 max-w-xl mx-auto">
              Tell us about your business and we&apos;ll reply within one business day.
            </p>
            <Button href="/contact">Book a Call</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}