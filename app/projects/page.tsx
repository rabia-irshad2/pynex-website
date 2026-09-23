import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import ProjectCard from '@/components/ProjectCard';
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p.frontmatter} />
          ))}
        </div>
      </div>
    </section>
  );
}
