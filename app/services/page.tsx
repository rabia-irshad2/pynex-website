import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import ServiceCard from '@/components/ServiceCard';
import { getAllServices, getAllProjects } from '@/lib/content';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Services',
  description: 'AI solutions, business automation, custom software, and intelligent digital products.',
};

export default function ServicesPage() {
  const services = getAllServices();
  const projects = getAllProjects().slice(0, 2);

  return (
    <section className="py-section-phone md:py-section-desktop">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <SectionLabel>services</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-main-text">Services built around real business problems</h1>
        <p className="text-secondary-text max-w-2xl mb-10">From strategy and AI to automation and custom software, we build digital products that solve real business problems and create lasting advantages.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s.frontmatter} />
          ))}
        </div>
        <div className="mt-24 border-t border-black/10 pt-12">
          <SectionLabel>our work</SectionLabel>
          <h2 className="section-title mb-10 text-main-text">Recent work shaped around real workflows</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {projects.map((project) => <ProjectCard key={project.slug} project={project.frontmatter} />)}
          </div>
          <Button href="/projects" variant="secondary">Explore all projects</Button>
        </div>
      </div>
    </section>
  );
}
