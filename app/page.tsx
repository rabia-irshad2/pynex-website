import Link from 'next/link';
import Button from '@/components/Button';
import SectionLabel from '@/components/SectionLabel';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import Carousel from '@/components/Carousel';
import SloganBand from '@/components/SloganBand';
import {
  getAllServices,
  getAllProjects,
  getFeaturedProject,
  getTeam,
  getTestimonials,
} from '@/lib/content';

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
      <section className="bg-black text-white min-h-[90vh] flex items-center">
        <div className="max-w-content mx-auto px-6 md:px-12 py-20">
          <SectionLabel>pynex</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight mb-6">
            AI solutions and automation for businesses ready to grow smarter
          </h1>
          <p className="text-white/70 max-w-xl mb-8 text-lg">
            We design and build AI-driven tools, automate operations, and ship custom software
            that fits how your business actually works.
          </p>
          <Button href="/contact">Book a consultation</Button>
        </div>
      </section>

      {/* 2. Proof / trust bar */}
      <section className="bg-soft-bg py-10">
        <div className="max-w-content mx-auto px-6 md:px-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-secondary-text text-sm font-medium">
          <span>Trusted across multiple industries</span>
          <span>{projects.length}+ projects delivered</span>
          <span>Custom AI &amp; automation builds</span>
        </div>
      </section>

      {/* 3. Services overview */}
      <section className="py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>what we do</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-main-text">Our services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s.frontmatter} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured project spotlight */}
      {featuredProject && (
        <section className="bg-soft-bg py-section-phone md:py-section-desktop">
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
            <div className="aspect-[4/3] bg-white rounded-2xl border border-black/5" />
          </div>
        </section>
      )}

      {/* 5. Slogan band */}
      <SloganBand text="Built to think, automate, and scale with you." />

      {/* 6. Projects carousel */}
      <section className="py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>our work</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-main-text">Recent projects</h2>
          <Carousel>
            {projects.map((p) => (
              <div key={p.slug} className="min-w-[280px] md:min-w-[340px]">
                <ProjectCard project={p.frontmatter} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

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

      {/* 8. Team preview */}
      {team.length > 0 && (
        <section className="py-section-phone md:py-section-desktop">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <SectionLabel>the people behind pynex</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-main-text">Meet the team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {team.map((member: any) => (
                <div key={member.name} className="text-center">
                  <div className="w-24 h-24 rounded-full bg-soft-bg mx-auto mb-4" />
                  <p className="font-semibold text-main-text">{member.name}</p>
                  <p className="text-sm text-secondary-text">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
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
