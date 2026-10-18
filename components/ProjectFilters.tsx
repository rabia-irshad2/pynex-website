'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import type { ProjectFrontmatter } from '@/lib/content';

type Project = { slug: string; frontmatter: ProjectFrontmatter };

export default function ProjectFilters({ projects }: { projects: Project[] }) {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map(({ frontmatter }) => frontmatter.category)))],
    [projects],
  );
  const [activeCategory, setActiveCategory] = useState('All');
  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get('category');
    if (category && categories.includes(category)) setActiveCategory(category);
  }, [categories]);

  function selectCategory(category: string) {
    setActiveCategory(category);
    const url = new URL(window.location.href);
    if (category === 'All') url.searchParams.delete('category');
    else url.searchParams.set('category', category);
    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
  }
  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(({ frontmatter }) => frontmatter.category === activeCategory);

  return (
    <>
      <div className="project-filter-pills" role="group" aria-label="Filter projects by category">
        {categories.map((category) => (
          <button key={category} type="button" onClick={() => selectCategory(category)} aria-pressed={activeCategory === category} className={activeCategory === category ? 'project-filter-pill is-active' : 'project-filter-pill'}>
            {category}
          </button>
        ))}
      </div>
      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map(({ slug, frontmatter }) => (
            <motion.div key={slug} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3 }}>
              <ProjectCard project={frontmatter} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
