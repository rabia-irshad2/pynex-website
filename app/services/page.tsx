//app/services/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import ServicesFeatureCard from '@/components/ServicesFeatureCard';
import SloganMarquee from '@/components/SloganMarquee';
import Button from '@/components/Button';
import { getAllServices, getAllProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI solutions, business automation, custom software, and intelligent digital products.',
};

const PROJECT_IMAGES: Record<string, string> = {
  'ai-support-assistant': '/images/projects/ai-support-assistant.jpg',
  'client-portal-platform': '/images/projects/custom-software.jpg',
  'smart-inventory-system': '/images/projects/business-automation.jpg',
};

export default function ServicesPage() {
  const services = getAllServices();
  const projects = getAllProjects();
  const featuredSlugs = ['ai-solutions', 'business-automation', 'custom-software'];
  const featuredServices = featuredSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));
  const additionalService = services.find(
    (s) => !featuredSlugs.includes(s.slug),
  );

  return (
    <div className="services-route">
      {/* ═══ HERO ═══ */}
      <section className="services-route-hero theme-dark-section">
        <div className="services-route-container">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
            <h1 className="services-route-title">
              <span>Make work</span>
              <span>work better.</span>
            </h1>
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
                  introduction={
                    service.content.split(/\n\s*##\s+/)[0]?.trim() ||
                    service.frontmatter.shortDescription
                  }
                />
              </Reveal>
            ))}
          </div>

          {additionalService && (
            <Reveal>
              <Link
                href={`/services/${additionalService.slug}`}
                className="services-additional-link"
              >
                <span>ALSO IN OUR TOOLKIT</span>
                <strong>{additionalService.frontmatter.title}</strong>
                <span>{additionalService.frontmatter.shortDescription}</span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      {/* ═══ CASE STUDIES ═══ */}
      <section className="services-work-section theme-dark-section">
        <div className="services-route-container">
          <Reveal>
            <div className="services-work-heading">
              <SectionLabel>Our work</SectionLabel>
              <h2>Built to move business forward.</h2>
              <p>
                Selected systems designed around real teams, processes, and customer needs.
              </p>
            </div>
          </Reveal>

          <div className="case-study-list">
            {projects.slice(0, 3).map((project, index) => {
              const image =
                project.frontmatter.image ||
                PROJECT_IMAGES[project.slug] ||
                '/images/projects/ai-solutions.jpg';

              return (
                <Reveal key={project.slug} delay={index * 0.08}>
                  <Link href={`/projects/${project.slug}`} className="case-study-row">
                    <div className="case-study-image">
                      <Image
                        src={image}
                        alt={`${project.frontmatter.title} preview`}
                        fill
                        sizes="(max-width: 760px) 100vw, 45vw"
                      />
                    </div>
                    <div className="case-study-content">
                      <span className="case-study-index">
                        CASE STUDY / {project.frontmatter.category}
                      </span>
                      <h3>{project.frontmatter.title}</h3>
                      <p className="case-study-summary">
                        {project.frontmatter.summary}
                      </p>
                      <div className="case-study-meta">
                        <div>
                          <strong>{project.frontmatter.location}</strong>
                          <span>LOCATION</span>
                        </div>
                        <div>
                          <strong>{project.frontmatter.category}</strong>
                          <span>SOLUTION</span>
                        </div>
                        <div className="case-study-scope">
                          <strong>
                            {project.frontmatter.scope?.slice(0, 3).join(' / ')}
                          </strong>
                          <span>SCOPE OF WORK</span>
                        </div>
                      </div>
                      <span className="case-study-read-more">
                        Read more <ArrowUpRight size={16} aria-hidden="true" />
                      </span>
                    </div>
                    <span className="case-study-slide-panel" aria-hidden="true">
                      <span>READ MORE</span>
                      <ArrowUpRight size={24} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="services-work-action">
              <Button href="/projects" variant="secondary">
                Explore all case studies
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ SLOGAN BAND ═══ */}
      <SloganMarquee />
    </div>
  );
}