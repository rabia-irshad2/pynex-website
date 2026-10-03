//app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import HeroVisuals from '@/components/HeroVisuals';
import SectionLabel from '@/components/SectionLabel';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import Carousel from '@/components/Carousel';
import SloganBand from '@/components/SloganBand';
import Reveal from '@/components/Reveal';
import SafeImage from '@/components/SafeImage';
import QualityGrid from '@/components/QualityGrid';
import LogoRow from '@/components/LogoRow';
import TeamAvatar from '@/components/TeamAvatar';
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

const clientLogosFromDisk = [
  { src: '/images/clients/client-1.png', alt: 'Client' },
  { src: '/images/clients/client-2.png', alt: 'Client' },
  { src: '/images/clients/client-3.png', alt: 'Client' },
  { src: '/images/clients/client-4.png', alt: 'Client' },
  { src: '/images/clients/client-5.png', alt: 'Client' },
  { src: '/images/clients/client-6.png', alt: 'Client' },
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
      {/* ══════════════ 1. HERO ══════════════ */}
      <section className="hero-shell bg-black text-white min-h-[90vh] flex items-center overflow-hidden">
        <div className="hero-grid" aria-hidden="true" />
        <HeroVisuals />
        <div className="hero-layout max-w-content mx-auto px-6 md:px-12 py-24 w-full relative">
          <div className="hero-copy relative">
            <h1 className="hero-title mb-7">
              <span>Built for</span>
              <span>smarter</span>
              <span className="hero-title-accent">business.</span>
            </h1>
            <p className="hero-subtitle max-w-2xl">
              Technology that makes your business smarter, faster, and more efficient.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ 2. OVERVIEW ══════════════ */}
      <Reveal className="overview-band theme-dark-section py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12 grid md:grid-cols-[1fr_0.8fr] gap-10 items-center">
          <div>
            <SectionLabel>built around your business</SectionLabel>
            <h2 className="section-title mt-3 text-white">
              Make more room for what&apos;s next.
            </h2>
            <p className="text-white/70 max-w-2xl mt-5">
              We bring AI, automation, and software together to help solve practical
              business challenges.
            </p>
            <div className="overview-proof" aria-label="More than 150 implementations">
              <strong>
                150<sup>+</sup>
              </strong>
              <span>
                successfully completed by PYNEX
                <br />
                for real business needs
              </span>
            </div>
            <div className="mt-8">
              <Button href="/contact">Book a Call</Button>
            </div>
          </div>
          <div className="overview-visual-wrap">
            <div className="overview-visual">
              <Image
                src="/images/overview/overview.jpg"
                alt="Team collaborating around a table"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Reveal>

      {/* ══════════════ 3. PROOF STRIP ══════════════ */}
      <Reveal className="proof-strip theme-dark-section py-8">
        <div className="max-w-content mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-6 text-white/70 text-sm font-medium">
          <span className="proof-statement">Technology that moves work forward.</span>
          <span>AI systems</span>
          <span>Automation</span>
          <span>Custom software</span>
        </div>
      </Reveal>

      {/* ══════════════ 4. CLIENT LOGOS ══════════════ */}
      <Reveal className="client-logo-strip theme-dark-section">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <h2>Trusted partnerships. Progress that moves business forward.</h2>
        </div>
        {clientLogos.length > 0 ? (
          <LogoRow
            logos={clientLogos.map((src, i) => ({ src, alt: `Client ${i + 1}` }))}
            speed={48}
          />
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-8 py-8 opacity-60">
            {clientLogosFromDisk.map((l) => (
              <Image
                key={l.src}
                src={l.src}
                alt={l.alt}
                width={140}
                height={48}
                className="h-10 w-auto object-contain grayscale brightness-200"
              />
            ))}
          </div>
        )}
      </Reveal>

      {/* ══════════════ 5. SERVICES ══════════════ */}
      <Reveal className="theme-dark-section py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>what we do</SectionLabel>
          <h2 className="section-title mb-12 text-white">
            Technology built around real work.
          </h2>
          <div className="service-stack premium-service-stack">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                service={s.frontmatter}
                introduction={s.content.split(/\n\s*##\s+/)[0]?.trim()}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/services">View more</Button>
          </div>
        </div>
      </Reveal>

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

      {/* ══════════════ 8. PROJECTS ══════════════ */}
      <Reveal className="theme-dark-section py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>our work</SectionLabel>
          <h2 className="section-title mb-10 text-main-text">Define. Automate. Grow.</h2>
          {projects.length ? (
            <Carousel>
              {projects.map((p) => (
                <div key={p.slug} className="min-w-[280px] md:min-w-[340px]">
                  <ProjectCard project={p.frontmatter} />
                </div>
              ))}
            </Carousel>
          ) : (
            <p className="text-secondary-text">
              Approved project case studies will appear here.
            </p>
          )}
        </div>
      </Reveal>

      {/* ══════════════ 9. TESTIMONIALS ══════════════ */}
      {showTestimonials && (
        <section className="theme-dark-section py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <SectionLabel>what clients say</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-main-text">
              Testimonials
            </h2>
            <Carousel loop label="Client testimonials">
              {testimonials.map((t: any, i: number) => (
                <div
                  key={i}
                  className="pynex-card p-8 min-w-[280px] md:min-w-[420px]"
                >
                  <p className="text-main-text mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-sm text-secondary-text font-medium">
                    {t.name}, {t.company}
                  </p>
                </div>
              ))}
            </Carousel>
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