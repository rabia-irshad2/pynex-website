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
import HeroIcons from '@/components/HeroIcons';
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
      {/* ═══════════ 1. HERO ═══════════ */}
      <section className="hero-shell">
  <HeroVisuals />
  <div className="hero-grid" aria-hidden="true" />
  <HeroIcons />
  <div className="hero-layout container-pynex">
          <div className="hero-copy-center">
            <Reveal direction="up" distance={12}>
              <p className="section-label hero-eyebrow">
                Technology. Automation. Software.
              </p>
            </Reveal>

            <Reveal direction="up" distance={20} delay={0.1}>
              <h1 className="hero-title-center">
                <span>Built for</span>
                <span className="hero-title-accent">smarter business.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" distance={14} delay={0.25}>
              <p className="hero-subtitle-center">
                We design AI, automation, and software systems that turn
                repetitive work into measurable business results.
              </p>
            </Reveal>

            <Reveal direction="up" distance={14} delay={0.4}>
              <div className="hero-actions-center">
                <Button href="/contact">Book a Call</Button>
                <Button href="/services" variant="secondary">
                  Explore services
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════ 2. OVERVIEW ═══════════ */}
      <section className="section-centered theme-dark-section">
        <div className="container-pynex">
          <div className="centered-header">
            <Reveal>
              <p className="section-label">Built around your business</p>
            </Reveal>

            <ScrollRevealText
              as="h2"
              text="Make more room for what's next."
              className="centered-title-wrap"
              variant="focus"
            />

            <Reveal delay={0.2}>
              <p className="centered-subtitle">
                We bring AI, automation, and software together to help solve
                practical business challenges.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="overview-stats-centered">
              <div className="overview-stat">
                <strong>150+</strong>
                <span>Implementations</span>
              </div>
              <div className="overview-stat-divider" />
              <div className="overview-stat">
                <strong>12</strong>
                <span>Industries served</span>
              </div>
            </div>
          </Reveal>

          {/* Side-by-side: text left, image right */}
          <Reveal delay={0.3}>
            <div className="overview-split">
              <div className="overview-description">
                <p>
                  We&apos;ve spent years helping businesses replace manual
                  processes with intelligent systems. Every engagement starts
                  with the problem — not the technology.
                </p>
                <p>
                  From small automation projects to full AI platforms, we build
                  software that fits how your team actually works.
                </p>
              </div>

              <div className="overview-visual-aside">
                <Image
                  src="/images/overview/overview.jpg"
                  alt="Team collaborating around a table"
                  fill
                  sizes="(max-width: 900px) 100vw, 550px"
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
      </section>

      {/* ═══════════ 3. PROOF BAND ═══════════ */}
      <section className="section-centered theme-dark-section">
        <div className="container-pynex">
          <div className="centered-header">
            <Reveal>
              <p className="section-label">Technology that moves work forward</p>
            </Reveal>

            <ScrollRevealText
              as="h2"
              text="One partner. Every stage."
              className="centered-title-wrap"
              variant="expand"
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

      {/* ═══════════ 4. SERVICES ═══════════ */}
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

          <div className="services-arrows-center">
            <ServicesArrows targetId="services-scroll" step={400} />
          </div>
        </div>

        <div className="container-pynex">
          <div className="centered-actions">
            <Button href="/services" variant="secondary">
              View all services
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════ 5. SLOGAN ═══════════ */}
      <SloganBand />

      {/* ═══════════ 6. PROJECTS ═══════════ */}
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

      {/* ═══════════ 7. QUALITIES ═══════════ */}
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

      {/* ═══════════ 8. TESTIMONIALS ═══════════ */}
      {showTestimonials && (
        <section className="section-centered theme-dark-section">
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

      {/* ═══════════ 9. TEAM ═══════════ */}
      {team.length > 0 && (
        <section className="section-centered theme-dark-section alt-bg">
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

      {/* ═══════════ 10. CLOSING CTA ═══════════ */}
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