//app/services/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import ServicesFeatureCard from '@/components/ServicesFeatureCard';
import CaseStudyRow from '@/components/CaseStudyRow';
import Marquee from '@/components/Marquee';
import Button from '@/components/Button';
import { ArrowUpRight } from 'lucide-react';
import { getAllServices, getAllProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI solutions, business automation, custom software, and intelligent digital products.',
};

export default function ServicesPage() {
  const services = getAllServices();
  const projects = getAllProjects();
  const featuredSlugs = ['ai-solutions', 'business-automation', 'custom-software'];
  const featuredServices = featuredSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] => Boolean(service));
  const additionalService = services.find((service) => !featuredSlugs.includes(service.slug));

  return (
    <div className="services-route">
      <section className="services-route-hero theme-dark-section">
        <div className="services-route-container">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
            <h1 className="services-route-title"><span>Make work</span><span>work better.</span></h1>
            <p className="services-route-intro">
              AI, automation, and software shaped around the work your team needs to move forward.
            </p>
          </Reveal>
          <div className="services-feature-grid">
            {featuredServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.1}>
                <ServicesFeatureCard
                  service={service.frontmatter}
                  order={index + 1}
                  introduction={service.content.split(/\n\s*##\s+/)[0]?.trim() || service.frontmatter.shortDescription}
                />
              </Reveal>
            ))}
          </div>
          {additionalService && (
            <Reveal>
              <Link href={`/services/${additionalService.slug}`} className="services-additional-link">
                <span>ALSO IN OUR TOOLKIT</span>
                <strong>{additionalService.frontmatter.title}</strong>
                <span>{additionalService.frontmatter.shortDescription}</span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      <section className="services-work-section theme-dark-section">
        <div className="services-route-container">
          <Reveal>
            <div className="services-work-heading">
              <SectionLabel>Our work</SectionLabel>
              <h2>Built to move business forward.</h2>
              <p>Selected systems designed around real teams, processes, and customer needs.</p>
            </div>
          </Reveal>
          <div className="case-study-list">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <CaseStudyRow project={project.frontmatter} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="services-work-action">
              <Button href="/projects" variant="secondary">Explore all case studies</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />
    </div>
  );
}