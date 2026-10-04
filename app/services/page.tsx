import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import ServiceCard from '@/components/ServiceCard';
import { getAllServices, getAllProjects, getFeaturedProject, getTeam, getTestimonials } from '@/lib/content';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Services',
  description: 'AI solutions, business automation, custom software, and intelligent digital products.',
};

export default function ServicesPage() {
  const services = getAllServices();
  const projects = getAllProjects().slice(0, 2);
  const featuredProject = getFeaturedProject();
  const team = getTeam();
  const testimonials = getTestimonials();
  const TESTIMONIALS_ENABLED = false;
  const showTestimonials = TESTIMONIALS_ENABLED && testimonials.length >= 2;

  return (
    <section className="services-page theme-dark-section py-section-phone md:py-section-desktop">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <Reveal className="mb-10" direction="left">
          <SectionLabel>services</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-main-text">Services built around real business problems</h1>
          <p className="text-secondary-text max-w-2xl">From strategy and AI to automation and custom software, we build digital products that solve real business problems and create lasting advantages.</p>
        </Reveal>
        <div className="service-directory-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, index) => (
            <ServiceCard key={s.slug} service={s.frontmatter} index={index} introduction={s.content.split(/\n\s*##\s+/)[0]?.trim()} />
          ))}
        </div>
        <div className="mt-24 border-t border-white/10 pt-12">
          <Reveal direction="left">
            <SectionLabel>our work</SectionLabel>
            <h2 className="section-title mb-10 text-main-text">Recent work shaped around real workflows</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {projects.map((project) => (
              <div key={project.slug}>
                <ProjectCard project={project.frontmatter} index={projects.indexOf(project)} />
              </div>
            ))}
          </div>
          <Button href="/projects" variant="secondary">Explore all projects</Button>
        </div>
      </div>
    </section>
  );
}
