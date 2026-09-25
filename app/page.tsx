import Link from 'next/link';
import Button from '@/components/Button';
import SectionLabel from '@/components/SectionLabel';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import Carousel from '@/components/Carousel';
import SloganBand from '@/components/SloganBand';
import Reveal from '@/components/Reveal';
import SafeImage from '@/components/SafeImage';
import QualityGrid from '@/components/QualityGrid';
import { BarChart3, BrainCircuit, Cloud, Code2, Globe2, Workflow } from 'lucide-react';
import {
  getAllServices,
  getAllProjects,
  getFeaturedProject,
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

  // Section 3.1: testimonials section only shows once there are 2+ approved testimonials
  const showTestimonials = testimonials.length >= 2;

  return (
    <>
      {/* 1. Hero */}
      <section className="hero-shell bg-black text-white min-h-[90vh] flex items-center overflow-hidden">
        <div className="hero-grid" aria-hidden="true" />
        <div className="max-w-content mx-auto px-6 md:px-12 py-28 w-full relative">
          <div className="hero-tech-icon hero-tech-ai" aria-label="AI"><BrainCircuit size={26} /></div>
          <div className="hero-tech-icon hero-tech-automation" aria-label="Automation"><Workflow size={26} /></div>
          <div className="hero-tech-icon hero-tech-code" aria-label="Code"><Code2 size={26} /></div>
          <div className="hero-tech-icon hero-tech-cloud" aria-label="Cloud"><Cloud size={26} /></div>
          <div className="hero-tech-icon hero-tech-chart" aria-label="Analytics"><BarChart3 size={26} /></div>
          <div className="hero-tech-icon hero-tech-globe" aria-label="Global technology"><Globe2 size={26} /></div>
          <div className="max-w-4xl relative">
            <SectionLabel>AI. Automation. Software.</SectionLabel>
            <h1 className="hero-title mt-5 mb-7">Built for smarter business</h1>
            <p className="text-white/65 max-w-xl mb-9 text-lg md:text-xl">
              Technology that makes your business smarter, faster, and more efficient.
            </p>
            <Button href="/contact">Book a consultation</Button>
          </div>
        </div>
      </section>

      {/* 2. Proof / trust bar */}
      <Reveal className="proof-strip bg-soft-bg py-8">
        <div className="max-w-content mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-6 text-secondary-text text-sm font-medium">
          <span className="proof-number">{projects.length.toString().padStart(2, '0')}<small>+</small></span>
          <span>Projects shaped around real workflows</span>
          <span>AI systems</span><span>Automation</span><span>Custom software</span>
        </div>
      </Reveal>

      {/* 3. Services overview */}
      <Reveal className="py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>services</SectionLabel>
          <h2 className="section-title mb-12 text-main-text">Explore our complete technology services</h2>
          <div className="service-stack">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s.frontmatter} />
            ))}
          </div>
        </div>
      </Reveal>

      {/* 4. Featured project spotlight */}
      {featuredProject && (
        <Reveal className="bg-soft-bg py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel>featured project</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-main-text">
                {featuredProject.frontmatter.title}
              </h2>
              <p className="text-secondary-text mb-6">{featuredProject.frontmatter.summary}</p>
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
                <div className="pynex-card p-5" key={feature}><p className="text-main-text">{feature}</p></div>
              )) : <p className="text-secondary-text text-sm">Approved project feature details will appear here when provided.</p>}
            </div>
          </div>
        </Reveal>
      )}

      {/* 5. Slogan band */}
      <SloganBand />

      {/* 6. Projects carousel */}
      <Reveal className="py-section-phone md:py-section-desktop">
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
        <section className="bg-soft-bg py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <SectionLabel>what clients say</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-main-text">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t: any, i: number) => (
                <div key={i} className="pynex-card p-8">
                  <p className="text-main-text mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-sm text-secondary-text font-medium">
                    {t.name}, {t.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Reveal className="bg-soft-bg py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>qualities</SectionLabel>
          <h2 className="section-title mb-12 text-main-text">Why work with PYNEX</h2>
          <QualityGrid qualities={qualities} />
        </div>
      </Reveal>

      {/* 8. Team preview */}
      {team.length > 0 && (
        <Reveal className="py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <SectionLabel>team</SectionLabel>
            <h2 className="section-title mb-10 text-main-text">The people behind the intelligence</h2>
            <Carousel>
              {team.map((member: any) => (
                <div key={member.name} className="text-center min-w-[260px]">
                  <div className="w-24 h-24 rounded-full bg-soft-bg mx-auto mb-4 overflow-hidden flex items-center justify-center">
                    {member.photo ? <SafeImage src={member.photo} alt={member.name} width={96} height={96} className="h-full w-full object-cover" fallback={<span className="text-primary-blue font-bold text-xl">{member.name.charAt(0)}</span>} /> : <span className="text-primary-blue font-bold text-xl">{member.name.charAt(0)}</span>}
                  </div>
                  <p className="font-semibold text-main-text">{member.name}</p>
                  <p className="text-sm text-secondary-text">{member.role}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </Reveal>
      )}

      {/* 9. Closing CTA */}
      <section className="bg-black text-white py-section-phone md:py-section-desktop text-center">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s build something smarter</h2>
          <Button href="/contact">Book a consultation</Button>
        </div>
      </section>

      {/* 10. Footer is rendered globally in app/layout.tsx */}
    </>
  );
}
