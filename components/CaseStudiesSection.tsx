//components/CaseStudiesSection.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ScrollRevealText from '@/components/ScrollRevealText';
import type { ProjectFrontmatter } from '@/lib/content';

type Project = { slug: string; frontmatter: ProjectFrontmatter };

export default function CaseStudiesSection({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const visible = projects.slice(0, 3);
  const current = visible[index];

  if (!projects.length) return null;

  return (
    <section className="case-studies theme-dark-section">
      <div className="container-pynex">
        <div className="case-studies-header">
          <Reveal>
            <p className="section-label">case studies</p>
          </Reveal>
          <ScrollRevealText
            as="h2"
            text="Define. Create. Grow."
            className="case-studies-title"
            variant="expand"
          />
        </div>

        {current && (
          <div className="case-studies-stage">
            <Reveal key={current.slug}>
              <article className="case-study-card">
                <div className="case-study-media">
                  {current.frontmatter.image ? (
                    <Image
                      src={current.frontmatter.image}
                      alt={current.frontmatter.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 60vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="case-study-media-placeholder" />
                  )}
                  <span className="case-study-tag">
                    {current.frontmatter.category}
                  </span>
                </div>

                <div className="case-study-body">
                  <h3 className="case-study-name">
                    {current.frontmatter.title}
                  </h3>
                  <p className="case-study-summary">
                    {current.frontmatter.summary}
                  </p>

                  <Link
                    href={`/projects/${current.slug}`}
                    className="case-study-link"
                  >
                    View case study
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>

            <div className="case-studies-controls">
              <button
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                disabled={index === 0}
                aria-label="Previous project"
                className="case-arrow"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="case-counter">
                {index + 1} / {visible.length}
              </span>
              <button
                onClick={() => setIndex((i) => Math.min(visible.length - 1, i + 1))}
                disabled={index === visible.length - 1}
                aria-label="Next project"
                className="case-arrow"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        <div className="case-studies-footer">
          <Link href="/projects" className="case-view-all">
            View all case studies
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}