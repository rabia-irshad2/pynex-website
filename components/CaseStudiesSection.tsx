//components/CaseStudiesSection.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ScrollRevealText from '@/components/ScrollRevealText';
import ProjectCard from '@/components/ProjectCard';
import type { ProjectFrontmatter } from '@/lib/content';

type Project = { slug: string; frontmatter: ProjectFrontmatter };

export default function CaseStudiesSection({
  projects,
}: {
  projects: Project[];
}) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const total = Math.ceil(projects.length / perView);
  const safeIndex = Math.min(index, Math.max(0, total - 1));

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }

  function next() {
    setIndex((i) => Math.min(total - 1, i + 1));
  }

  const start = safeIndex * perView;
  const visible = projects.slice(start, start + perView);

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
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p.frontmatter} />
            </Reveal>
          ))}
        </div>

        {total > 1 && (
          <div className="case-studies-controls">
            <button
              onClick={prev}
              disabled={safeIndex === 0}
              aria-label="Previous case studies"
              className="case-studies-arrow"
            >
              <ChevronLeft size={18} />
            </button>

            <span className="case-studies-counter">
              {safeIndex + 1} / {total}
            </span>

            <button
              onClick={next}
              disabled={safeIndex === total - 1}
              aria-label="Next case studies"
              className="case-studies-arrow"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        <div className="case-studies-footer">
          <Link href="/projects" className="case-studies-link">
            View all case studies
          </Link>
        </div>
      </div>
    </section>
  );
}