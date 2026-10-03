//app/projects/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Button from '@/components/Button';
import SectionLabel from '@/components/SectionLabel';
import SafeImage from '@/components/SafeImage';
import Reveal from '@/components/Reveal';
import {
  getAllProjects,
  getProjectBySlug,
  getMarkdownBullets,
} from '@/lib/content';

const CATEGORY_TO_SERVICE: Record<string, string> = {
  'AI Solutions': 'ai-solutions',
  'Business Automation': 'business-automation',
  'Custom Software': 'custom-software',
  'Digital Products': 'digital-products',
};

function getSection(content: string, heading: string) {
  const match = content.match(
    new RegExp(`##\\s+${heading}\\s*\\n([\\s\\S]*?)(?=\\n##\\s|$)`, 'i')
  );
  return match?.[1]?.trim() || '';
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.summary,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const challenge = getSection(project.content, 'The challenge');
  const solution = getSection(project.content, 'What we built|The solution');
  const result = getSection(project.content, 'The result|Results and impact');
  const features =
    project.frontmatter.features ||
    getMarkdownBullets(project.content, 'Core Features');
  const technologies = project.frontmatter.technologies || [];
  const relatedService =
    project.frontmatter.service ||
    (project.frontmatter.category
      ? CATEGORY_TO_SERVICE[project.frontmatter.category]
      : undefined);

  return (
    <>
      {/* HERO */}
      <section className="projects-page-hero theme-dark-section">
        <div className="max-w-content mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <SectionLabel>{project.frontmatter.category}</SectionLabel>
            <h1 className="projects-page-title">{project.frontmatter.title}</h1>
            <p className="projects-page-intro">{project.frontmatter.summary}</p>

            <div className="flex flex-wrap gap-2 mt-8">
              <span className="scope-chip">{project.frontmatter.location}</span>
              {project.frontmatter.scope.map((s) => (
                <span className="scope-chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* COVER IMAGE + CONTENT */}
      <section className="project-detail-content theme-dark-section py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Reveal>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-16 border border-white/10">
              <SafeImage
                src={project.frontmatter.image}
                alt={`Preview of ${project.frontmatter.title}`}
                fill
                className="object-cover"
                fallback={
                  <div className="project-placeholder">
                    <span>{project.frontmatter.category}</span>
                    <strong>{project.frontmatter.title}</strong>
                  </div>
                }
              />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <SectionLabel>Overview</SectionLabel>
                <p className="text-white/85 text-lg leading-relaxed">
                  {project.frontmatter.summary}
                </p>
              </section>

              {challenge && (
                <section>
                  <SectionLabel>The challenge</SectionLabel>
                  <div className="prose prose-lg max-w-none">
                    <MDXRemote source={challenge} />
                  </div>
                </section>
              )}

              {solution && (
                <section>
                  <SectionLabel>The solution</SectionLabel>
                  <div className="prose prose-lg max-w-none">
                    <MDXRemote source={solution} />
                  </div>
                </section>
              )}

              <section>
                <SectionLabel>Scope of work</SectionLabel>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  {project.frontmatter.scope.map((item, i) => (
                    <article className="quality-item" key={item}>
                      <span>0{i + 1}</span>
                      <h3 style={{ fontSize: '1.5rem' }}>{item}</h3>
                    </article>
                  ))}
                </div>
              </section>

              {features.length > 0 && (
                <section>
                  <SectionLabel>Core features</SectionLabel>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    {features.map((feature, i) => (
                      <article className="quality-item" key={feature}>
                        <span>0{i + 1}</span>
                        <p style={{ fontSize: '0.95rem', color: '#fff' }}>{feature}</p>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              <section>
                <SectionLabel>Technology stack</SectionLabel>
                {technologies.length ? (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {technologies.map((t) => (
                      <span key={t} className="scope-chip light">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-secondary-text">
                    Technology details are not listed because approved project data
                    has not been provided.
                  </p>
                )}
              </section>

              {result && (
                <section>
                  <SectionLabel>Results and impact</SectionLabel>
                  <div className="prose prose-lg max-w-none">
                    <MDXRemote source={result} />
                  </div>
                </section>
              )}
            </div>

            <aside className="h-fit sticky top-24">
              <Reveal>
                <div className="mission-card">
                  <p className="mission-card-label">Project scope</p>
                  <ul className="text-secondary-text text-sm space-y-2 mb-6 list-disc list-inside">
                    {project.frontmatter.scope.map((s: string) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>

                  {project.frontmatter.website &&
                    !project.frontmatter.website.includes('example.com') && (
                      <a
                        href={project.frontmatter.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary w-full justify-center mb-3"
                      >
                        Visit live site
                      </a>
                    )}

                  {relatedService && (
                    <a
                      href={`/services/${relatedService}`}
                      className="btn-secondary w-full justify-center mb-3"
                    >
                      View related service
                    </a>
                  )}

                  <Button href="/contact">Start a similar project</Button>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}