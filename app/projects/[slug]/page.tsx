import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Button from '@/components/Button';
import SectionLabel from '@/components/SectionLabel';
import { getAllProjects, getProjectBySlug } from '@/lib/content';

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

  return (
    <>
      <section className="bg-soft-bg py-16">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>{project.frontmatter.category}</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-main-text">
            {project.frontmatter.title}
          </h1>
          <p className="text-secondary-text">{project.frontmatter.location}</p>
        </div>
      </section>

      <section className="py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 bg-soft-bg">
            <Image src={project.frontmatter.image} alt={project.frontmatter.title} fill className="object-cover" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 prose prose-lg max-w-none text-main-text">
              <MDXRemote source={project.content} />
            </div>
            <aside className="pynex-card p-8 h-fit sticky top-24">
              <p className="font-semibold text-main-text mb-3">Project scope</p>
              <ul className="text-secondary-text text-sm space-y-2 mb-6 list-disc list-inside">
                {project.frontmatter.scope.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {project.frontmatter.website && (
                <a
                  href={project.frontmatter.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center mb-3"
                >
                  Visit live site
                </a>
              )}
              <Button href="/contact">Start a similar project</Button>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
