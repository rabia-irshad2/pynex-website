import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ProjectCard from '@/components/ProjectCard';
import AnimatedButton from '@/components/AnimatedButton';
import type { ProjectFrontmatter } from '@/lib/content';

type Project = { slug: string; frontmatter: ProjectFrontmatter };

export default function CaseStudiesSection({ projects }: { projects: Project[] }) {
  if (!projects.length) return null;

  return (
    <section className="case-studies theme-dark-section">
      <div className="container-pynex">
        
        {/* FIXED HEADER - Guaranteed to show */}
        <div className="case-studies-header-centered">
          <p className="case-studies-label">
            <span className="red-dot" /> Case Studies
          </p>
          <h2 className="case-studies-title">
            Define. Create. Grow.
          </h2>
        </div>

        {/* PROJECT CARDS GRID */}
        <div className="home-projects-grid">
          {projects.slice(0, 3).map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project.frontmatter} />
            </Reveal>
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        <div className="case-studies-footer-btn">
          <AnimatedButton href="/projects" variant="outline">
            View More <ArrowUpRight size={18} />
          </AnimatedButton>
        </div>

      </div>
    </section>
  );
}