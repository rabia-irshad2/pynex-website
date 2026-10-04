//app/page.tsx
import Image from 'next/image';
import Button from '@/components/Button';
import HeroVisuals from '@/components/HeroVisuals';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import SloganBand from '@/components/SloganBand';
import Reveal from '@/components/Reveal';
import QualityGrid from '@/components/QualityGrid';
import ScrollRevealText from '@/components/ScrollRevealText';
import ServicesArrows from '@/components/ServicesArrows';
import {
  getAllServices,
  getAllProjects,
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
  const team = getTeam();
  const testimonials = getTestimonials();
  const showTestimonials = testimonials.length >= 2;

  return (
    <>
      {/* ═══════════════ 1. HERO ═══════════════ */}
      <section className="hero-shell">
        <HeroVisuals />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-layout container-pynex">
          <div className="hero-copy">
            <p className="section-label">Technology. Automation. Software.</p>
            <h1 className="hero-title">
              <span>Built for</span>
              <span className="hero-title-accent">smarter business.</span>
            </h1>
            <p className="hero-subtitle">
              We design AI, automation, and software systems that turn repetitive work into measurable business results.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ 2. OVERVIEW ═══════════════ */}
      <section className="overview-section theme-dark-section">
        <div className="container-pynex">
          <div className="overview-grid">
            {/* TEXT SIDE */}
            <div className="overview-text">
              <Reveal>
                <p className="section-label">Built around your business</p>
              </Reveal>

              <ScrollRevealText
                as="h2"
                text="Make more room for what's next."
                className="overview-title-wrap"
              />

              <Reveal delay={0.2}>
                <p className="overview-subtitle">
                  We bring AI, automation, and software together to help solve
                  practical business challenges.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="overview-stats">
                  <div className="overview-stat">
                    <strong>150+</strong>
                    <span>Successful implementations</span>
                  </div>
                  <div className="overview-stat">
                    <strong>12</strong>
                    <span>Industries served</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="overview-actions">
                  <Button href="/contact">Book a Call</Button>
                </div>
              </Reveal>
            </div>

            {/* IMAGE SIDE */}
            <Reveal delay={0.15}>
              <div className="overview-visual-wrap">
                <div className="overview-visual">
                  <Image
                    src="/images/overview/overview.jpg"
                    alt="Team collaborating around a table"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                  />
                  <div className="overview-visual-badge">
                    <span className="overview-visual-badge-dot" />
                    <span>Live workspace</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ 3. PROOF BAND ═══════════════ */}
      <section className="proof-band theme-dark-section">
        <div className="container-pynex">
          <div className="proof-band-header">
            <Reveal>
              <p className="section-label proof-band-eyebrow">
                Technology that moves work forward
              </p>
            </Reveal>

            <ScrollRevealText
              as="h2"
              text="One partner. Every stage."
              className="proof-band-title-wrap"
            />
          </div>

          <div className="proof-band-items">
            {['AI Systems', 'Automation', 'Custom Software'].map((item, i) => (
              <Reveal key={item} delay={i * 0.1}>
                <div className="proof-band-item">
                  <span className="proof-band-item-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="proof-band-item-label">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 4. SERVICES ═══════════════ */}
      <section className="services-section theme-dark-section">
        <div className="container-pynex">
          <Reveal>
            <div className="services-section-header">
              <div className="services-section-header-left">
                <p className="section-label">What we do</p>
              </div>
              <div className="services-section-header-right">
                <ServicesArrows targetId="services-scroll" step={360} />
              </div>
            </div>
          </Reveal>

          <ScrollRevealText
            as="h2"
            text="Technology built around real work."
            className="services-section-title-wrap"
          />

          <Reveal delay={0.15}>
            <p className="services-section-description">
              Four core service areas. One integrated approach to solving
              business problems with technology.
            </p>
          </Reveal>

          <div className="services-scroll-wrap">
            <div className="services-scroll" id="services-scroll">
              {services.map((s) => (
                <div className="services-scroll-item" key={s.slug}>
                  <ServiceCard
                    service={s.frontmatter}
                    introduction={s.content.split(/\n\s*##\s+/)[0]?.trim()}
                  />
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="services-section-footer">
              <Button href="/services" variant="secondary">
                View all services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 5. SLOGAN ═══════════════ */}
      <SloganBand />

      {/* ═══════════════ 6. PROJECTS ═══════════════ */}
      <section className="projects-home-section theme-dark-section">
        <div className="container-pynex">
          <Reveal>
            <p className="section-label">Our work</p>
          </Reveal>

          <ScrollRevealText
            as="h2"
            text="Define. Automate. Grow."
            className="projects-home-title-wrap"
          />

          <Reveal delay={0.15}>
            <p className="projects-home-description">
              Real systems built for real business problems.
            </p>
          </Reveal>
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
          <Reveal delay={0.2}>
            <div className="projects-home-footer">
              <Button href="/projects" variant="secondary">
                View all projects
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 7. QUALITIES ═══════════════ */}
      <section className="qualities-section theme-dark-section alt-bg">
        <div className="container-pynex">
          <div className="qualities-header">
            <Reveal>
              <p className="section-label qualities-eyebrow">Qualities</p>
            </Reveal>

            <ScrollRevealText
              as="h2"
              text="Why work with PYNEX."
              className="qualities-title-wrap"
            />

            <Reveal delay={0.2}>
              <p className="qualities-subtitle">
                What separates us from a typical software vendor.
              </p>
            </Reveal>
          </div>

          <QualityGrid qualities={qualities} />
        </div>
      </section>

      {/* ═══════════════ 8. TESTIMONIALS ═══════════════ */}
      {showTestimonials && (
        <section className="testimonials-section theme-dark-section">
          <div className="container-pynex">
            <div className="testimonials-header">
              <Reveal>
                <p className="section-label testimonials-eyebrow">
                  What clients say
                </p>
              </Reveal>

              <ScrollRevealText
                as="h2"
                text="Trusted by teams who need results."
                className="testimonials-title-wrap"
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

      {/* ═══════════════ 9. TEAM ═══════════════ */}
      {team.length > 0 && (
        <section className="team-section theme-dark-section alt-bg">
          <div className="container-pynex">
            <div className="team-header">
              <Reveal>
                <p className="section-label team-eyebrow">Team</p>
              </Reveal>

              <ScrollRevealText
                as="h2"
                text="The people behind the intelligence."
                className="team-title-wrap"
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

      {/* ═══════════════ 10. CLOSING CTA ═══════════════ */}
      <section className="closing-cta theme-dark-section">
        <div className="container-pynex">
          <div className="closing-cta-inner">
            <Reveal>
              <p className="section-label closing-cta-eyebrow">Let&apos;s talk</p>
            </Reveal>

            <ScrollRevealText
              as="h2"
              text="Let's build something smarter."
              className="closing-cta-title-wrap"
            />

            <Reveal delay={0.2}>
              <p className="closing-cta-subtitle">
                Tell us about the problem you&apos;re trying to solve.
                We&apos;ll reply within one business day.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="closing-cta-actions">
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