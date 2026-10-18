import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ScrollRevealText from '@/components/ScrollRevealText';
import ProjectCard from '@/components/ProjectCard';
import type { ProjectFrontmatter } from '@/lib/content';

type Project = { slug: string; frontmatter: ProjectFrontmatter };

export default function CaseStudiesSection({ projects }: { projects: Project[] }) {
  if (!projects.length) return null;

  return (
    <section className="case-studies theme-dark-section">
      <div className="container-pynex">
        <div className="case-studies-header">
          <Reveal><p className="section-label">case studies</p></Reveal>
          <ScrollRevealText as="h2" text="Define. Create. Grow." className="case-studies-title" variant="expand" />
        </div>
        <div className="home-projects-grid">
          {projects.slice(0, 3).map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project.frontmatter} />
            </Reveal>
          ))}
        </div>
        <div className="case-studies-footer">
          <Link href="/projects" className="case-view-all">View all case studies <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
