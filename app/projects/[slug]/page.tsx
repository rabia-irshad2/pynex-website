import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Button from '@/components/Button';
import SectionLabel from '@/components/SectionLabel';
import SafeImage from '@/components/SafeImage';
import { getAllProjects, getProjectBySlug, getMarkdownBullets } from '@/lib/content';

function getSection(content: string, heading: string) {
  const match = content.match(new RegExp(`##\\s+${heading}\\s*\\n([\\s\\S]*?)(?=\\n##\\s|$)`, 'i'));
  return match?.[1]?.trim() || '';
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.summary,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  const challenge = getSection(project.content, 'The challenge');
  const solution = getSection(project.content, 'What we built|The solution');
  const result = getSection(project.content, 'The result|Results and impact');
  const features = project.frontmatter.features || getMarkdownBullets(project.content, 'Core Features');
  const technologies = project.frontmatter.technologies || [];
  const relatedService = project.frontmatter.service || ({ 'AI Solutions': 'ai-solutions', 'Business Automation': 'business-automation', 'Custom Software': 'custom-software', 'Digital Products': 'digital-products' } as Record<string, string>)[project.frontmatter.category];

  return (
    <>
      <section className="bg-black text-white py-20">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>{project.frontmatter.category}</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {project.frontmatter.title}
          </h1>
          <p className="text-white/65 max-w-2xl text-lg mb-6">{project.frontmatter.summary}</p>
          <div className="flex flex-wrap gap-2 text-sm text-white/70"><span className="scope-chip">{project.frontmatter.location}</span>{project.frontmatter.scope.map((item) => <span className="scope-chip" key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 bg-soft-bg">
            <SafeImage
              src={project.frontmatter.image}
              alt={`Preview of ${project.frontmatter.title}`}
              fill
              className="object-cover"
              fallback={<div className="project-placeholder project-placeholder-large"><span>{project.frontmatter.category}</span><strong>{project.frontmatter.title}</strong></div>}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-10">
              <section><SectionLabel>overview</SectionLabel><p className="text-main-text text-lg">{project.frontmatter.summary}</p></section>
              {challenge && <section><SectionLabel>the challenge</SectionLabel><div className="prose prose-lg max-w-none text-main-text"><MDXRemote source={challenge} /></div></section>}
              {solution && <section><SectionLabel>the solution</SectionLabel><div className="prose prose-lg max-w-none text-main-text"><MDXRemote source={solution} /></div></section>}
              <section><SectionLabel>scope of work</SectionLabel><div className="grid sm:grid-cols-2 gap-4">{project.frontmatter.scope.map((item, index) => <article className="pynex-card p-5" key={item}><span className="section-label">0{index + 1}</span><h2 className="font-semibold text-main-text mt-2">{item}</h2></article>)}</div></section>
              {features.length > 0 && <section><SectionLabel>core features</SectionLabel><div className="grid sm:grid-cols-2 gap-4">{features.map((feature) => <article className="pynex-card p-5" key={feature}><p className="text-main-text">{feature}</p></article>)}</div></section>}
              <section><SectionLabel>technology stack</SectionLabel>{technologies.length ? <div className="flex flex-wrap gap-3">{technologies.map((technology) => <span className="scope-chip light" key={technology}>{technology}</span>)}</div> : <p className="text-secondary-text">Technology details are not listed because approved project data has not been provided.</p>}</section>
              {result && <section><SectionLabel>results and impact</SectionLabel><div className="prose prose-lg max-w-none text-main-text"><MDXRemote source={result} /></div></section>}
            </div>
            <aside className="pynex-card p-8 h-fit sticky top-24">
              <p className="font-semibold text-main-text mb-3">Project scope</p>
              <ul className="text-secondary-text text-sm space-y-2 mb-6 list-disc list-inside">
                {project.frontmatter.scope.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {project.frontmatter.website && !project.frontmatter.website.includes('example.com') && (
                <a
                  href={project.frontmatter.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center mb-3"
                >
                  Visit live site
                </a>
              )}
              {relatedService && <a href={`/services/${relatedService}`} className="btn-secondary w-full justify-center mb-3">View related service</a>}
              <Button href="/contact">Start a similar project</Button>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
