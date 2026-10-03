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

  // Section 3.1: testimonials section only shows once there are 2+ approved testimonials
  const showTestimonials = testimonials.length >= 2;

  return (
    <>
      {/* 1. Hero */}
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

      {/* Overview bridge inspired by the reference layout; PYNEX-specific copy and styling. */}
      <Reveal className="overview-band theme-dark-section py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12 grid md:grid-cols-[1fr_0.8fr] gap-10 items-center">
          <div>
            <SectionLabel>built around your business</SectionLabel>
            <h2 className="section-title mt-3 text-white">Make more room for what&apos;s next.</h2>
            <p className="text-white/70 max-w-2xl mt-5">We bring AI, automation, and software together to help solve practical business challenges.</p>
            <div className="overview-proof" aria-label="More than 150 implementations successfully completed">
              <strong>150<sup>+</sup></strong>
              <span>successfully completed by PYNEX<br />for real business needs</span>
            </div>
            <div className="mt-8"><Button href="/contact">Book a Call</Button></div>
          </div>
          <div className="overview-visual-wrap">
            <div className="overview-visual">
              <Image src="/images/overview/overview.jpg" alt="Team collaborating around a table in a bright meeting room" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </Reveal>

      {/* 2. Proof / trust bar */}
      <Reveal className="proof-strip theme-dark-section py-8">
        <div className="max-w-content mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-6 text-white/70 text-sm font-medium">
          <span className="proof-statement">Technology that moves work forward.</span>
          <span>AI systems</span><span>Automation</span><span>Custom software</span>
        </div>
      </Reveal>

      <Reveal className="client-logo-strip theme-dark-section">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <h2>Trusted partnerships. Progress that moves business forward.</h2>
          {clientLogos.length > 0 && (
            <div className="client-logo-row" aria-label="PYNEX clients and partners">
              {clientLogos.map((logo) => (
                <Image key={logo} src={logo} alt={`${logo.split('/').pop()?.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')} logo`} width={180} height={72} />
              ))}
            </div>
          )}
        </div>
      </Reveal>

      {/* 3. Services overview */}
      <Reveal className="theme-dark-section py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>what we do</SectionLabel>
          <h2 className="section-title mb-12 text-white">Technology built around real work.</h2>
          <div className="service-stack premium-service-stack">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s.frontmatter} introduction={s.content.split(/\n\s*##\s+/)[0]?.trim()} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/services">View more</Button>
          </div>
        </div>
      </Reveal>

      {/* 4. Featured project spotlight */}
      {featuredProject && (
        <Reveal className="theme-dark-section py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel>featured project</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {featuredProject.frontmatter.title}
              </h2>
              <p className="text-white/70 mb-6">{featuredProject.frontmatter.summary}</p>
              <Link href={`/projects/${featuredProject.slug}`} className="btn-secondary">
                View case study
              </Link>
            </div>
            <div className="project-visual" aria-label={`${featuredProject.frontmatter.title} project preview`}>
              <SafeImage
                src={featuredProject.frontmatter.image}
                alt={`Preview of ${featuredProject.frontmatter.title}`}
                fill
                className="object-cover project-image"
                fallback={<div className="project-placeholder project-placeholder-large"><span>{featuredProject.frontmatter.category}</span><strong>{featuredProject.frontmatter.title}</strong></div>}
              />
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4 mt-8">
              {featuredProject.frontmatter.features?.length ? featuredProject.frontmatter.features.slice(0, 2).map((feature) => (
                <div className="pynex-card p-5" key={feature}><p className="text-white">{feature}</p></div>
              )) : <p className="text-white/65 text-sm">Approved project feature details will appear here when provided.</p>}
            </div>
          </div>
        </Reveal>
      )}

      {/* 5. Slogan band */}
      <SloganBand />

      {/* 6. Projects carousel */}
      <Reveal className="theme-dark-section py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>our work</SectionLabel>
          <h2 className="section-title mb-10 text-main-text">Define. Automate. Grow.</h2>
          {projects.length ? <Carousel>
            {projects.map((p) => (
              <div key={p.slug} className="min-w-[280px] md:min-w-[340px]">
                <ProjectCard project={p.frontmatter} />
              </div>
            ))}
          </Carousel> : <p className="text-secondary-text">Approved project case studies will appear here when available.</p>}
        </div>
      </Reveal>

      {/* 7. Testimonials — hidden until 2+ approved testimonials exist (Section 3.1) */}
      {showTestimonials && (
        <section className="theme-dark-section py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <SectionLabel>what clients say</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-main-text">Testimonials</h2>
            <Carousel loop label="Client testimonials">
              {testimonials.map((t: any, i: number) => (
                <div key={i} className="pynex-card p-8 min-w-[280px] md:min-w-[420px]">
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

      <Reveal className="theme-dark-section py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>qualities</SectionLabel>
          <h2 className="section-title mb-12 text-main-text">Why work with PYNEX</h2>
          <QualityGrid qualities={qualities} />
        </div>
      </Reveal>

      {/* 8. Team preview */}
      {team.length > 0 && (
        <Reveal className="theme-dark-section py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <SectionLabel>team</SectionLabel>
            <h2 className="section-title mb-10 text-main-text">The people behind the intelligence</h2>
            <div className="team-grid">
              {team.map((member: any, index: number) => (
                <article key={member.name} className="team-profile-card">
                  <div className={`team-profile-image team-profile-image-${index + 1}`}>
                    <SafeImage src={member.photo || `/images/team/leader-${index + 1}.svg`} alt={`${member.name}, PYNEX team member`} width={480} height={520} className="h-full w-full object-cover" fallback={<span>{member.name.split(' ').map((part: string) => part[0]).join('')}</span>} />
                  </div>
                  <p className="team-profile-name">{member.name}</p>
                  <p className="team-profile-role">{member.role}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* Second ticker placement follows the reference rhythm before the closing CTA. */}
      <SloganBand />

      {/* 9. Closing CTA */}
      <section className="bg-black text-white py-section-phone md:py-section-desktop text-center">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s build something smarter.</h2>
          <Button href="/contact">Book a Call</Button>
        </div>
      </section>

      {/* 10. Footer is rendered globally in app/layout.tsx */}
    </>
  );
}
