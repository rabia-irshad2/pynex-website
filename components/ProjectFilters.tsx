'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import FilterBar from './FilterBar';
import type { ProjectFrontmatter } from '@/lib/content';

type Project = { slug: string; frontmatter: ProjectFrontmatter };

const options = ['All', 'AI Solutions', 'Automation', 'Custom Software', 'Digital Products'];

export default function ProjectFilters({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState('All');
  const visibleProjects = filter === 'All'
    ? projects
    : projects.filter(({ frontmatter }) => frontmatter.category.toLowerCase().includes(filter.toLowerCase().replace(' solutions', '')));

  return (
    <>
      <FilterBar options={options} onChange={setFilter} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project.frontmatter} />)}
      </div>
      {visibleProjects.length === 0 && <p className="text-secondary-text py-10">No projects are available in this category yet.</p>}
    </>
  );
}
