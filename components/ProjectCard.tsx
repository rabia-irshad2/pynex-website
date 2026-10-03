//app/components/ProjectCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import SafeImage from './SafeImage';
import type { ProjectFrontmatter } from '@/lib/content';

const CATEGORY_FALLBACKS: Record<string, string> = {
  'AI Solutions': '/images/projects/fallback-ai.jpg',
  'Automation': '/images/projects/fallback-automation.jpg',
  'Business Automation': '/images/projects/fallback-automation.jpg',
  'Custom Software': '/images/projects/fallback-software.jpg',
  'Digital Products': '/images/projects/fallback-digital.jpg',
};

export default function ProjectCard({
  project,
}: {
  project: ProjectFrontmatter;
}) {
  const fallback =
    CATEGORY_FALLBACKS[project.category] || '/images/projects/project.jpg';
  const image = project.image || fallback;

  return (
    <Link href={`/projects/${project.slug}`} className="project-flip-card">
      <div className="project-flip-inner">
        <div className="project-card-face project-card-front">
          <div className="project-card-image project-card-image-full">
            <SafeImage
              src={image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              fallback={
                <div className="project-placeholder">
                  <span>{project.category}</span>
                </div>
              }
            />
            <div className="project-card-shade" aria-hidden="true" />
            <span className="project-image-category">{project.category}</span>
            <div className="project-card-front-content">
              <p className="section-label">{project.location}</p>
              <h3>{project.title}</h3>
              <span className="project-card-hint">
                Hover to explore <span aria-hidden="true">↻</span>
              </span>
            </div>
          </div>
        </div>

        <div className="project-card-face project-card-back">
          <SafeImage
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="project-card-back-image"
            fallback={<div className="project-placeholder" />}
          />
          <div className="project-card-shade" aria-hidden="true" />
          <div className="project-card-back-content">
            <span className="section-label">Case Study · {project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <span className="project-card-link">
              Explore case study <span aria-hidden="true">↗</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}