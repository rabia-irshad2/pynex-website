import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import ProjectFilters from '@/components/ProjectFilters';
import { getAllProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Case studies of AI solutions, automation, and custom software PYNEX has delivered.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="py-section-phone md:py-section-desktop">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <SectionLabel>our work</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-main-text">Projects</h1>
        <p className="text-secondary-text max-w-2xl mb-8">Explore practical systems built to solve operational problems. Filter by solution type to find the work closest to your goals.</p>
        <ProjectFilters projects={projects} />
      </div>
    </section>
  );
}
