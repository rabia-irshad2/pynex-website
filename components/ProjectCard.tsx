import Link from 'next/link';
import Image from 'next/image';
import SafeImage from './SafeImage';
import type { ProjectFrontmatter } from '@/lib/content';

export default function ProjectCard({ project }: { project: ProjectFrontmatter }) {
  const representativeImage = '/images/projects/project.jpg';

  return (
      <Link href={`/projects/${project.slug}`} className="pynex-card project-flip-card block overflow-hidden">
        <div className="project-flip-inner">
          <div className="project-card-face project-card-front">
            <div className="project-card-image project-card-image-full">
              {project.image ? <SafeImage src={project.image} alt={`Project image for ${project.title}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" fallback={<div className="project-placeholder project-card-art-default"><span>{project.category}</span></div>} /> : <Image src={representativeImage} alt={`Project dashboard image representing ${project.title}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />}
              <div className="project-card-shade" aria-hidden="true" />
              <span className="project-image-category">{project.category}</span>
              <div className="project-card-front-content">
                <p className="section-label">{project.location}</p>
                <h3>{project.title}</h3>
                <span className="project-card-hint">Hover to explore <span aria-hidden="true">↻</span></span>
              </div>
            </div>
          </div>
          <div className="project-card-face project-card-back">
            <SafeImage src={project.image || representativeImage} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="project-card-back-image" fallback={<div className="project-placeholder project-card-art-default" />} />
            <div className="project-card-shade" aria-hidden="true" />
            <div className="project-card-back-content">
              <span className="section-label">CASE STUDY · {project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <span className="project-card-link">Explore case study <span aria-hidden="true">↗</span></span>
            </div>
          </div>
      </div>
    </Link>
  );
}
