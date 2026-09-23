import Link from 'next/link';
import Image from 'next/image';
import type { ProjectFrontmatter } from '@/lib/content';

export default function ProjectCard({ project }: { project: ProjectFrontmatter }) {
  return (
    <Link href={`/projects/${project.slug}`} className="pynex-card block overflow-hidden">
      <div className="relative w-full aspect-[16/10] bg-soft-bg">
        <Image
          src={project.image}
          alt={`Screenshot of the ${project.title} project`}
          fill
          className="object-cover"
        />
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
