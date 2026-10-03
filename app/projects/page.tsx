//app/projects/page.tsx
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import ProjectFilters from '@/components/ProjectFilters';
import { getAllProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Case studies of AI solutions, automation, and custom software PYNEX has delivered.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      {/* HERO */}
      <section className="projects-page-hero theme-dark-section">
        <div className="max-w-content mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <SectionLabel>Our work</SectionLabel>
            <h1 className="projects-page-title">
              Projects shaped around real workflows.
            </h1>
            <p className="projects-page-intro">
              Explore practical systems built to solve operational problems.
              Filter by solution type to find the work closest to your goals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="theme-dark-section py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <ProjectFilters projects={projects} />
        </div>
      </section>
    </>
  );
}