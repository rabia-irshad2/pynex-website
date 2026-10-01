import Link from 'next/link';
import SafeImage from './SafeImage';
import type { ProjectFrontmatter } from '@/lib/content';

export default function ProjectCard({ project }: { project: ProjectFrontmatter }) {
  const categoryStyle = project.category.toLowerCase().includes('ai')
    ? 'project-card-art-ai'
    : project.category.toLowerCase().includes('automation')
      ? 'project-card-art-automation'
      : project.category.toLowerCase().includes('software')
        ? 'project-card-art-software'
        : 'project-card-art-default';

  return (
    <Link href={`/projects/${project.slug}`} className="pynex-card block overflow-hidden">
      <div className="relative w-full aspect-[16/10] bg-soft-bg">
        <SafeImage src={project.image} alt={`Screenshot of ${project.title}`} fill className="object-cover" fallback={<div className={`project-placeholder ${categoryStyle}`} aria-label={`${project.title} preview placeholder`}><span className="project-placeholder-mark" aria-hidden="true" /><span>{project.category}</span><strong>{project.title}</strong></div>} />
      </div>
      <div className="p-6">
        <p className="section-label mb-1">{project.category}</p>
        <h3 className="text-lg font-semibold text-main-text mb-1">{project.title}</h3>
        <p className="text-secondary-text text-sm">{project.location}</p>
        <p className="text-secondary-text text-sm mt-2">{project.summary}</p>
      </div>
    </Link>
  );
}
