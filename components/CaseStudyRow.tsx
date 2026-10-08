import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectFrontmatter } from '@/lib/content';

const PROJECT_IMAGES: Record<string, string> = {
  'ai-support-assistant': '/images/projects/ai-support-assistant.JPG',
  'client-portal-platform': '/images/projects/custom-software.jpg',
  'smart-inventory-system': '/images/projects/business-automation.jpg',
};

export default function CaseStudyRow({ project }: { project: ProjectFrontmatter }) {
  const image = project.image || PROJECT_IMAGES[project.slug] || '/images/projects/ai-solutions.jpg';

  return (
    <Link href={`/projects/${project.slug}`} className="case-study-row">
      <div className="case-study-image">
        <Image
          src={image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 760px) 100vw, 45vw"
        />
      </div>
      <div className="case-study-content">
        <span className="case-study-index">CASE STUDY / {project.category}</span>
        <h3>{project.title}</h3>
        <p className="case-study-summary">{project.summary}</p>
        <div className="case-study-meta">
          <div><strong>{project.location}</strong><span>LOCATION</span></div>
          <div><strong>{project.category}</strong><span>SOLUTION</span></div>
          <div className="case-study-scope"><strong>{project.scope.slice(0, 3).join(' / ')}</strong><span>SCOPE OF WORK</span></div>
        </div>
        <span className="case-study-read-more">Read more <ArrowUpRight size={16} aria-hidden="true" /></span>
      </div>
      <span className="case-study-slide-panel" aria-hidden="true">
        <span>READ MORE</span><ArrowUpRight size={24} />
      </span>
    </Link>
  );
}