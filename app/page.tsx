//app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import HeroVisuals from '@/components/HeroVisuals';
import SectionLabel from '@/components/SectionLabel';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import SloganBand from '@/components/SloganBand';
import Reveal from '@/components/Reveal';
import SafeImage from '@/components/SafeImage';
import QualityGrid from '@/components/QualityGrid';
import LogoRow from '@/components/LogoRow';
import TeamAvatar from '@/components/TeamAvatar';
import ServicesArrows from '@/components/ServicesArrows';
import {
  getAllServices,
  getAllProjects,
  getFeaturedProject,
  getTeam,
  getTestimonials,
  getPublicImages,
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
  const clientLogos = getPublicImages('clients');

  const showTestimonials = testimonials.length >= 2;

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
<section className="hero-shell">
  <HeroVisuals />
  <div className="hero-grid" aria-hidden="true" />
  <div className="hero-layout max-w-content mx-auto px-6 md:px-12">
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
      <div className="overview-text">
        <Reveal>
          <p className="section-label">Built around your business</p>
          <h2 className="overview-title">
            Make more room for{' '}
            <span className="overview-accent">what&apos;s next.</span>
          </h2>
          <p className="overview-subtitle">
            We bring AI, automation, and software together to help solve
            practical business challenges.
          </p>

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

          <div className="overview-actions">
            <Button href="/contact">Book a Call</Button>
          </div>
        </Reveal>
      </div>

      <div className="overview-visual-wrap">
        <div className="overview-visual">
          <Image
            src="/images/overview/overview.jpg"
            alt="Team collaborating around a table"
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover"
          />
          <div className="overview-visual-badge">
            <span className="overview-visual-badge-dot" />
            <span>Live workspace</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ═══════════════ 3. PROOF STRIP ═══════════════ */}
<section className="proof-band theme-dark-section">
  <div className="container-pynex">
    <div className="proof-band-inner">
      <div className="proof-band-heading">
        <p className="section-label">Technology that moves work forward</p>
        <h3 className="proof-band-title">
          One partner. <span className="proof-band-accent">Every stage.</span>
        </h3>
      </div>
      <div className="proof-band-items">
        <div className="proof-band-item">
          <span className="proof-band-item-number">01</span>
          <span className="proof-band-item-label">AI Systems</span>
        </div>
        <div className="proof-band-item">
          <span className="proof-band-item-number">02</span>
          <span className="proof-band-item-label">Automation</span>
        </div>
        <div className="proof-band-item">
          <span className="proof-band-item-number">03</span>
          <span className="proof-band-item-label">Custom Software</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ═══════════════ 4. CLIENT LOGOS ═══════════════ */}
{clientLogos.length > 0 && (
  <Reveal className="client-logo-strip theme-dark-section">
    <div className="max-w-content mx-auto px-6 md:px-12">
      <h2>Trusted partnerships. Progress that moves business forward.</h2>
    </div>
    <LogoRow
      logos={clientLogos.map((src, i) => ({ src, alt: `Client ${i + 1}` }))}
      speed={48}
    />
  </Reveal>
)}

      {/* ═══════════════ 4. SERVICES ═══════════════ */}
<section className="services-section theme-dark-section">
  <div className="container-pynex">
    <Reveal>
      <div className="services-section-header">
        <div className="services-section-header-left">
          <p className="section-label">What we do</p>
          <h2 className="services-section-title">
            Technology built around{' '}
            <span className="services-section-accent">real work.</span>
          </h2>
        </div>
        <div className="services-section-header-right">
  <p className="services-section-description">
    Four core service areas. One integrated approach.
  </p>
  <ServicesArrows targetId="services-scroll" step={360} />
        </div>
      </div>
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

    <div className="services-section-footer">
      <Button href="/services" variant="secondary">
        View all services
      </Button>
    </div>
  </div>
</section>

      {/* ══════════════ 6. FEATURED PROJECT ══════════════ */}
      {featuredProject && (
        <Reveal className="theme-dark-section py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel>featured project</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {featuredProject.frontmatter.title}
              </h2>
              <p className="text-white/70 mb-6">
                {featuredProject.frontmatter.summary}
              </p>
              <Link
                href={`/projects/${featuredProject.slug}`}
                className="btn-secondary"
              >
                View case study
              </Link>
            </div>
            <div
              className="project-visual"
              aria-label={`${featuredProject.frontmatter.title} preview`}
            >
              <SafeImage
                src={featuredProject.frontmatter.image}
                alt={`Preview of ${featuredProject.frontmatter.title}`}
                fill
                className="object-cover project-image"
                fallback={
                  <div className="project-placeholder project-placeholder-large">
                    <span>{featuredProject.frontmatter.category}</span>
                    <strong>{featuredProject.frontmatter.title}</strong>
                  </div>
                }
              />
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4 mt-8">
              {featuredProject.frontmatter.features?.length ? (
                featuredProject.frontmatter.features.slice(0, 2).map((feature) => (
                  <div className="pynex-card p-5" key={feature}>
                    <p className="text-white">{feature}</p>
                  </div>
                ))
              ) : (
                <p className="text-white/65 text-sm">
                  Approved project feature details will appear here.
                </p>
              )}
            </div>
          </div>
        </Reveal>
      )}

      {/* ══════════════ 7. SLOGAN ══════════════ */}
      <SloganBand />

      {/* ═══════════════ 6. PROJECTS ═══════════════ */}
<section className="projects-home-section theme-dark-section">
  <div className="container-pynex">
    <Reveal>
      <div className="projects-home-header">
        <p className="section-label">Our work</p>
        <h2 className="projects-home-title">
          Define. <span className="projects-home-accent">Automate.</span> Grow.
        </h2>
      </div>
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
    <div className="projects-home-footer">
      <Button href="/projects" variant="secondary">
        View all projects
      </Button>
    </div>
  </div>
</section>

      {/* ══════════════ 9. TESTIMONIALS ══════════════ */}
      {showTestimonials && (
        <section className="theme-dark-section py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <SectionLabel>what clients say</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-main-text">
              Testimonials
            </h2>
            
          </div>
        </section>
      )}

      {/* ══════════════ 10. QUALITIES ══════════════ */}
      <Reveal className="theme-dark-section py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>qualities</SectionLabel>
          <h2 className="section-title mb-12 text-main-text">Why work with PYNEX</h2>
          <QualityGrid qualities={qualities} />
        </div>
      </Reveal>

      {/* ══════════════ 11. TEAM ══════════════ */}
      {team.length > 0 && (
        <Reveal className="theme-dark-section py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <SectionLabel>team</SectionLabel>
            <h2 className="section-title mb-10 text-main-text">
              The people behind the intelligence
            </h2>
            <div className="team-grid">
              {team.map((member: any, index: number) => (
                <TeamAvatar
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  gradient={((index % 4) + 1) as 1 | 2 | 3 | 4}
                />
              ))}
            </div>
          </div>
        </Reveal>
      )}

      <SloganBand />

      {/* ══════════════ 12. CLOSING CTA ══════════════ */}
      <section className="bg-black text-white py-section-phone md:py-section-desktop text-center">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let&apos;s build something smarter.
          </h2>
          <Button href="/contact">Book a Call</Button>
        </div>
      </section>
    </>
  );
}