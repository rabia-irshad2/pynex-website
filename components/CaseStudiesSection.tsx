'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';
import ScrollRevealText from '@/components/ScrollRevealText';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';
import type { ProjectFrontmatter } from '@/lib/content';

type Project = { slug: string; frontmatter: ProjectFrontmatter };

export default function CaseStudiesSection({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="case-studies theme-dark-section">
      <div className="container-pynex">
        <div className="case-studies-header">
          <Reveal>
            <p className="section-label">Case studies</p>
          </Reveal>
          <ScrollRevealText
            as="h2"
            text="Define. Create. Grow."
            className="case-studies-title"
            variant="expand"
          />
        </div>

        <div className="case-studies-grid">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard
                project={project.frontmatter}
                expanded={active === project.slug}
                onExpand={() => setActive(active === project.slug ? null : project.slug)}
              />
            </Reveal>
          ))}
        </div>

        <div className="case-studies-footer">
          <Button href="/projects" variant="outline" className="case-studies-link">
            View all case studies
          </Button>
        </div>
      </div>
    </section>
  );
}
