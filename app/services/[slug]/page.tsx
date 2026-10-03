//app/services/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Button from '@/components/Button';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import ProjectCard from '@/components/ProjectCard';
import {
  getAllServices,
  getServiceBySlug,
  getAllProjects,
  getMarkdownBullets,
} from '@/lib/content';

const process = [
  'Understand the problem',
  'Design the solution',
  'Build and test',
  'Launch and support',
];

const relatedCategoryBySlug: Record<string, string[]> = {
  'ai-solutions': ['ai'],
  'business-automation': ['automation'],
  'custom-software': ['custom software'],
  'digital-products': ['digital products', 'digital product'],
};

export function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.frontmatter.title,
    description: service.frontmatter.shortDescription,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const relatedCategories = relatedCategoryBySlug[service.slug] || [];
  const relatedProjects = getAllProjects()
    .filter((project) => {
      const category = project.frontmatter.category?.toLowerCase() || '';
      return relatedCategories.some((r) => category.includes(r));
    })
    .slice(0, 2);

  const deliverables =
    service.frontmatter.deliverables ||
    getMarkdownBullets(service.content, "What's included");
  const technologies = service.frontmatter.technologies || [];

  return (
    <>
      {/* HERO */}
      <section className="services-page-hero theme-dark-section">
        <div className="max-w-content mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <SectionLabel>Service</SectionLabel>
            {service.frontmatter.icon && (
              <p className="text-5xl mb-4">{service.frontmatter.icon}</p>
            )}
            <h1 className="services-page-title">{service.frontmatter.title}</h1>
            <p className="services-page-intro">
              {service.frontmatter.shortDescription}
            </p>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW + SIDEBAR */}
      <section className="theme-dark-section py-16 md:py-24 border-t border-white/5">
        <div className="max-w-content mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 service-content max-w-none">
            <Reveal>
              <MDXRemote source={service.content} />
            </Reveal>
          </div>

          <aside className="h-fit sticky top-24">
            <Reveal>
              <div className="mission-card">
                <p className="mission-card-label">Interested in this service?</p>
                <h3 className="mission-card-title" style={{ fontSize: '1.75rem' }}>
                  Let&apos;s map it out
                </h3>
                <p className="mission-card-text mb-6">
                  Tell us about your business and we&apos;ll show you how this fits.
                </p>
                <Button href="/contact">Book a Call</Button>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="theme-dark-section py-16 md:py-24 border-t border-white/5">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>What we deliver</SectionLabel>
            <h2 className="section-title mb-10">
              A practical path from idea to useful system.
            </h2>
          </Reveal>

          {deliverables.length ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {deliverables.map((item, i) => (
                <Reveal key={item} delay={i * 0.06}>
                  <article className="quality-item">
                    <span>0{i + 1}</span>
                    <h3>{item}</h3>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="text-secondary-text">
              Deliverables will be added when this service has approved content.
            </p>
          )}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="theme-dark-section py-16 md:py-24 border-t border-white/5">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>Technologies</SectionLabel>
            <h2 className="section-title mb-8">Tools selected for the problem.</h2>
          </Reveal>

          {technologies.length ? (
            <Reveal>
              <div className="flex flex-wrap gap-3">
                {technologies.map((t) => (
                  <span key={t} className="scope-chip light">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ) : (
            <p className="text-secondary-text">
              Technology details are provided during project discovery.
            </p>
          )}
        </div>
      </section>

      {/* PROCESS */}
      <section className="theme-dark-section py-16 md:py-24 border-t border-white/5">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>How it works</SectionLabel>
            <h2 className="section-title mb-10">A clear four-step process.</h2>
          </Reveal>

          <ol className="process-line">
            {process.map((step, i) => (
              <li key={step}>
                <span>0{i + 1}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="theme-dark-section py-16 md:py-24 border-t border-white/5">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <Reveal>
              <SectionLabel>Related projects</SectionLabel>
              <h2 className="section-title mb-10">Work in this solution area.</h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedProjects.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.1}>
                  <ProjectCard project={p.frontmatter} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="theme-dark-section py-20 md:py-28 text-center border-t border-white/5">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="section-title mb-6">Ready to discuss your project?</h2>
            <Button href="/contact">Book a Call</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}