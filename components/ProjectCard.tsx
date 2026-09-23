import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import type { ProjectFrontmatter } from '@/lib/content';

export default function ProjectCard({ project }: { project: ProjectFrontmatter }) {
  const hasImage = fs.existsSync(path.join(process.cwd(), 'public', project.image));

  return (
    <Link href={`/projects/${project.slug}`} className="pynex-card block overflow-hidden">
      <div className="relative w-full aspect-[16/10] bg-soft-bg">
        {hasImage ? (
          <Image src={project.image} alt={`Screenshot of the ${project.title} project`} fill className="object-cover" />
        ) : (
          <div className="project-placeholder" aria-label={`${project.title} visual placeholder`}>
            <span>{project.category}</span><strong>{project.title}</strong>
          </div>
        )}
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
