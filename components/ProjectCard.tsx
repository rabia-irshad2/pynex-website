'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import SafeImage from './SafeImage';
import Button from './Button';
import type { ProjectFrontmatter } from '@/lib/content';

const PROJECT_IMAGES: Record<string, string> = {
  'ai-support-assistant': '/images/projects/ai-support-assistant.JPG',
  'client-portal-platform': '/images/projects/custom-software.jpg',
  'smart-inventory-system': '/images/projects/business-automation.jpg',
};

const CATEGORY_FALLBACKS: Record<string, string> = {
  'AI Solutions': '/images/projects/ai-solutions.jpg',
  Automation: '/images/projects/business-automation.jpg',
  'Business Automation': '/images/projects/business-automation.jpg',
  'Custom Software': '/images/projects/custom-software.jpg',
  'Digital Products': '/images/projects/ai-solutions.jpg',
};

export default function ProjectCard({
  project,
  expanded: controlledExpanded,
  onExpand,
}: {
  project: ProjectFrontmatter;
  expanded?: boolean;
  onExpand?: () => void;
}) {
  const [localExpanded, setLocalExpanded] = useState(false);
  const image = project.image || PROJECT_IMAGES[project.slug] || CATEGORY_FALLBACKS[project.category] || '/images/projects/ai-solutions.jpg';
  const expanded = controlledExpanded ?? localExpanded;
  const toggleExpanded = onExpand || (() => setLocalExpanded((value) => !value));

  return (
    <article className={`project-flip-card project-expand-card${expanded ? ' is-expanded' : ''}`}>
      <Link href={`/projects/${project.slug}`} className="project-expand-link">
        <SafeImage
          src={image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="project-expand-image"
          fallback={<div className="project-placeholder"><span>{project.category}</span></div>}
        />
        <span className="project-card-shade" aria-hidden="true" />
        <span className="project-image-category">{project.category}</span>
        <span className="project-expand-front-copy">
          <span className="section-label">{project.location}</span>
          <span className="project-expand-title">{project.title}</span>
          <span className="project-card-hint">Hover to explore <ArrowUpRight size={15} aria-hidden="true" /></span>
        </span>
      </Link>

      <button
        type="button"
        className="project-expand-toggle"
        aria-label={`${expanded ? 'Collapse' : 'Expand'} ${project.title}`}
        aria-expanded={expanded}
        onClick={toggleExpanded}
      >
        <span aria-hidden="true">{expanded ? '−' : '+'}</span>
      </button>

      <div className="project-expand-panel">
        <span className="section-label">Case Study · {project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.features?.length ? (
          <ul className="project-expand-features">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        ) : null}
        {project.scope.length > 0 && (
          <ul className="project-expand-tags">
            {project.scope.map((item) => <li key={item}>{item}</li>)}
          </ul>
        )}
        <Button href={`/projects/${project.slug}`} variant="outline" className="project-expand-cta">
          <>Explore case study <ArrowUpRight size={16} aria-hidden="true" /></>
        </Button>
      </div>
    </article>
  );
}
