//app/components/ProjectCard.tsx
import Link from 'next/link';
import SafeImage from './SafeImage';
import type { ProjectFrontmatter } from '@/lib/content';

// Map each project slug → its specific image
const PROJECT_IMAGES: Record<string, string> = {
  'ai-support-assistant': '/images/projects/ai-support-assistant.jpg',
  'client-portal-platform': '/images/projects/client-portal-platform.jpg',
  'smart-inventory-system': '/images/projects/smart-inventory-system.jpg',
};

// Fallback per category if the slug image doesn't exist
const CATEGORY_FALLBACKS: Record<string, string> = {
  'AI Solutions': '/images/services/ai-solutions.jpg',
  'Automation': '/images/services/business-automation.jpg',
  'Business Automation': '/images/services/business-automation.jpg',
  'Custom Software': '/images/services/custom-software.jpg',
  'Digital Products': '/images/services/digital-products.jpg',
};

export default function ProjectCard({ project }: { project: ProjectFrontmatter }) {
  const image =
    project.image ||
    PROJECT_IMAGES[project.slug] ||
    CATEGORY_FALLBACKS[project.category] ||
    '/images/services/custom-software.jpg';

  return (
    <Link href={`/projects/${project.slug}`} className="project-flip-card">
      <div className="project-flip-inner">
        {/* FRONT */}
        <div className="project-card-face project-card-front">
          <div className="project-card-image-full">
            <SafeImage
              src={image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="project-front-image"
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
              <span className="project-card-hint">Hover to explore ↻</span>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="project-card-face project-card-back">
          <SafeImage
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="project-back-image"
            fallback={<div className="project-placeholder" />}
          />
          <div className="project-card-shade" aria-hidden="true" />
          <div className="project-card-back-content">
            <span className="section-label">Case Study · {project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <span className="project-card-link">Explore case study ↗</span>
          </div>
        </div>
      </div>
    </Link>
  );
}