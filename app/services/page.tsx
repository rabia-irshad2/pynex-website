//app/services/page.tsx
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';
import { getAllServices, getAllProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI solutions, business automation, custom software, and intelligent digital products.',
};

export default function ServicesPage() {
  const services = getAllServices();
  const projects = getAllProjects().slice(0, 2);

  const stats = [
    { value: '04', label: 'Core services' },
    { value: '150+', label: 'Deliveries' },
    { value: '12', label: 'Industries served' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="services-page-hero theme-dark-section">
        <div className="max-w-content mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
            <h1 className="services-page-title">
              Services built around real business problems.
            </h1>
            <p className="services-page-intro">
              From strategy and AI to automation and custom software, we build
              digital products that solve real business problems and create
              lasting advantages.
            </p>

            <div className="services-meta-row">
              {stats.map((s) => (
                <div key={s.label} className="services-meta-item">
                  <span className="services-meta-value">{s.value}</span>
                  <span className="services-meta-label">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="theme-dark-section pb-16 md:pb-24">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="service-directory-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <ServiceCard
                  service={s.frontmatter}
                  introduction={s.content.split(/\n\s*##\s+/)[0]?.trim()}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="theme-dark-section pt-16 md:pt-24 pb-16 md:pb-24 border-t border-white/5">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>Our work</SectionLabel>
            <h2 className="section-title mb-10">Recent work shaped around real workflows.</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <ProjectCard project={p.frontmatter} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Button href="/projects" variant="secondary">
              Explore all projects
            </Button>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="theme-dark-section py-20 md:py-28 text-center border-t border-white/5">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="section-title mb-6">Ready to build something?</h2>
            <p className="text-secondary-text mb-8 max-w-xl mx-auto">
              Tell us about the problem you&apos;re trying to solve. We&apos;ll reply within one business day.
            </p>
            <Button href="/contact">Book a Call</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}