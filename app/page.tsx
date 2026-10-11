//app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Button from '@/components/Button';
import HeroSection from '@/components/HeroSection';
import ServiceFlipCard from '@/components/ServiceFlipCard';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import QualityGrid from '@/components/QualityGrid';
import ScrollRevealText from '@/components/ScrollRevealText';
import ProcessTimeline from '@/components/ProcessTimeline';
import FeaturedProject from '@/components/FeaturedProject';
import {
  getAllServices,
  getAllProjects,
  getFeaturedProject,
  getMarkdownBullets,
  getTeam,
  getTestimonials,
} from '@/lib/content';

const qualities: [string, string, string][] = [
  ['01', 'Practical solutions', 'Technology chosen to solve a real business problem.'],
  ['02', 'AI and automation expertise', 'Intelligent systems that turn repetitive work into progress.'],
  ['03', 'Efficient delivery', 'Clear plans and steady momentum from first workshop to launch.'],
  ['04', 'Scalable systems', 'Built to keep working as your team, data, and ambition grow.'],
  ['05', 'Client-focused approach', 'Every decision stays connected to your goals and workflow.'],
  ['06', 'Reliable support', 'A long-term partner to improve and extend what we build.'],
];

export default function HomePage() {
  const services = getAllServices();
  const projects = getAllProjects();
  const featuredProject = getFeaturedProject();
  const team = getTeam();
  const testimonials = getTestimonials();
  const showTestimonials = testimonials.length >= 2;

  return (
    <>
      {/* ═══ 1. HERO ═══ */}
      <HeroSection />

      {/* ═══ 2. OVERVIEW — text left, image right ═══ */}
      <section className="home-overview theme-dark-section">
        <div className="container-pynex">
          <div className="home-overview-grid">
            <div className="home-overview-text">
              <Reveal>
                <p className="section-label">Built around your business</p>
              </Reveal>

              <ScrollRevealText
                as="h2"
                text="Make more room for what's next."
                className="home-overview-title"
                variant="focus"
              />

              <Reveal delay={0.2}>
                <p className="home-overview-lede">
                  We bring AI, automation, and software together to help solve
                  practical business challenges. Every engagement starts with
                  the problem — not the technology.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="home-overview-stats">
                  <div className="home-overview-stat">
                    <strong>150+</strong>
                    <span>Implementations</span>
                  </div>
                  <div className="home-overview-stat">
                    <strong>12</strong>
                    <span>Industries served</span>
                  </div>
                  <div className="home-overview-stat">
                    <strong>2</strong>
                    <span>Global offices</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} direction="right">
              <div className="home-overview-visual">
                <Image
                  src="/images/overview/overview.jpg"
                  alt="Team collaborating around a table"
                  fill
                  sizes="(max-width: 900px) 100vw, 550px"
                  className="object-cover"
                />
                <div className="home-overview-badge">
                  <span className="home-overview-badge-dot" />
                  <span>Live workspace</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 3. SERVICES — 3 visible + scroll ═══ */}
      <section className="section-centered theme-dark-section">
        <div className="container-pynex">
          <div className="centered-header">
            <Reveal>
              <p className="section-label">What we do</p>
            </Reveal>

            <ScrollRevealText
              as="h2"
              text="Technology built around real work."
              className="centered-title-wrap"
              variant="focus"
            />

            <Reveal delay={0.2}>
              <p className="centered-subtitle">
                Four core service areas. One integrated approach.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="home-services-grid container-pynex">
          {services.map((s, index) => (
            <Reveal key={s.slug} delay={index * 0.08}>
              <ServiceFlipCard
                service={s.frontmatter}
                order={index + 1}
                introduction={
                  s.content.split(/\n\s*##\s+/)[0]?.trim() ||
                  s.frontmatter.shortDescription
                }
                details={getMarkdownBullets(s.content, "What's included")}
              />
            </Reveal>
          ))}
        </div>

        <div className="container-pynex">
          <div className="centered-actions">
            <Button href="/services" variant="secondary">
              View all services
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ 4. PROCESS TIMELINE ═══ */}
      <ProcessTimeline />

      {/* ═══ 5. FEATURED PROJECT ═══ */}
      {featuredProject && <FeaturedProject project={featuredProject} />}

      {/* ═══ 6. PROJECTS CAROUSEL ═══ */}
      <section className="section-centered theme-dark-section">
        <div className="container-pynex">
          <div className="centered-header">
            <Reveal>
              <p className="section-label">Our work</p>
            </Reveal>

            <ScrollRevealText
              as="h2"
              text="Define. Automate. Grow."
              className="centered-title-wrap"
              variant="expand"
            />

            <Reveal delay={0.2}>
              <p className="centered-subtitle">
                Real systems built for real business problems.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="projects-scroll-wrap">
          <div className="projects-scroll">
            {projects.map((p) => (
              <div className="projects-scroll-item" key={p.slug}>
                <ProjectCard project={p.frontmatter} />
              </div>
            ))}
          </div>
        </div>

        <div className="container-pynex">
          <div className="centered-actions">
            <Button href="/projects" variant="secondary">
              View all projects
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ 7. QUALITIES ═══ */}
      <section className="section-centered theme-dark-section alt-bg">
        <div className="container-pynex">
          <div className="centered-header">
            <Reveal>
              <p className="section-label">Qualities</p>
            </Reveal>

            <ScrollRevealText
              as="h2"
              text="Why work with PYNEX."
              className="centered-title-wrap"
              variant="focus"
            />

            <Reveal delay={0.2}>
              <p className="centered-subtitle">
                What separates us from a typical software vendor.
              </p>
            </Reveal>
          </div>

          <div className="qualities-content">
            <QualityGrid qualities={qualities} />
          </div>
        </div>
      </section>

      {/* ═══ 8. TEAM ═══ */}
      {team.length > 0 && (
        <section className="section-centered theme-dark-section">
          <div className="container-pynex">
            <div className="centered-header">
              <Reveal>
                <p className="section-label">Team</p>
              </Reveal>

              <ScrollRevealText
                as="h2"
                text="The people behind the intelligence."
                className="centered-title-wrap"
                variant="focus"
              />
            </div>

            <div className="team-grid">
              {team.map((member: any, i: number) => (
                <Reveal key={member.name} delay={i * 0.1}>
                  <article className="team-profile-card">
                    <div
                      className={`team-profile-image team-profile-gradient-${(i % 4) + 1}`}
                    >
                      <span className="team-avatar-initials">
                        {member.name
                          .split(' ')
                          .map((p: string) => p[0])
                          .slice(0, 2)
                          .join('')}
                      </span>
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

      {/* ═══ 9. TESTIMONIALS ═══ */}
      {showTestimonials && (
        <section className="section-centered theme-dark-section alt-bg">
          <div className="container-pynex">
            <div className="centered-header">
              <Reveal>
                <p className="section-label">What clients say</p>
              </Reveal>

              <ScrollRevealText
                as="h2"
                text="Trusted by teams who need results."
                className="centered-title-wrap"
                variant="focus"
              />
            </div>

            <div className="testimonials-grid">
              {testimonials.map((t: any, i: number) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="testimonial-card">
                    <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                    <p className="testimonial-author">
                      {t.name} — {t.company}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ 10. CLOSING CTA ═══ */}
      <section className="section-centered theme-dark-section">
        <div className="container-pynex">
          <div className="closing-cta-inner">
            <Reveal>
              <p className="section-label">Let&apos;s talk</p>
            </Reveal>

            <ScrollRevealText
              as="h2"
              text="Let's build something smarter."
              className="closing-cta-title-wrap"
              variant="expand"
            />

            <Reveal delay={0.2}>
              <p className="centered-subtitle">
                Tell us about the problem you&apos;re trying to solve.
                We&apos;ll reply within one business day.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="centered-actions">
                <Button href="/contact">Book a Call</Button>
                <Button href="/services" variant="secondary">
                  Explore services
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}