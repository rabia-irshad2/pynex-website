//components/FeaturedProject.tsx
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import type { ProjectFrontmatter } from '@/lib/content';

export default function FeaturedProject({
  project,
}: {
  project: { slug: string; frontmatter: ProjectFrontmatter };
}) {
  const { frontmatter: p } = project;

  return (
    <section className="home-featured-project theme-dark-section">
      <div className="container-pynex">
        <Reveal>
          <p className="section-label">Featured work</p>
        </Reveal>

        <div className="featured-project-grid">
          <Reveal direction="left">
            <div className="featured-project-image">
              <Image
                src={p.image || '/images/projects/ai-support-assistant.jpg'}
                alt={`${p.title} preview`}
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                className="object-cover"
              />
              <span className="featured-project-category">{p.category}</span>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div className="featured-project-content">
              <h2 className="featured-project-title">{p.title}</h2>
              <p className="featured-project-summary">{p.summary}</p>

              <div className="featured-project-meta">
                <div>
                  <span className="featured-project-label">Location</span>
                  <strong>{p.location}</strong>
                </div>
                <div>
                  <span className="featured-project-label">Category</span>
                  <strong>{p.category}</strong>
                </div>
                <div>
                  <span className="featured-project-label">Scope</span>
                  <strong>{p.scope.slice(0, 2).join(' · ')}</strong>
                </div>
              </div>

              <Button href={`/projects/${project.slug}`} className="featured-project-cta" variant="outline">
                <>View case study <ArrowUpRight size={16} aria-hidden="true" /></>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
