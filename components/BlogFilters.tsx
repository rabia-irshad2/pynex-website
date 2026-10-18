'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ExpandCard from '@/components/ExpandCard';
import type { BlogFrontmatter } from '@/lib/content';

type Post = { slug: string; frontmatter: BlogFrontmatter };

function formatDate(date: string) {
  const parsed = new Date(`${date}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? '' : new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(parsed);
}

export default function BlogFilters({ posts, featuredSlug }: { posts: Post[]; featuredSlug?: string }) {
  const categories = useMemo(() => ['All', ...Array.from(new Set(posts.map(({ frontmatter }) => frontmatter.category).filter(Boolean)))], [posts]);
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

  const remaining = posts.filter(({ slug }) => slug !== featuredSlug);
  const filtered = activeCategory === 'All' ? remaining : remaining.filter(({ frontmatter }) => frontmatter.category === activeCategory);

  return (
    <>
      <div className="blog-filter-pills" role="group" aria-label="Filter articles by category">
        {categories.map((category) => <button key={category} type="button" onClick={() => selectCategory(category)} aria-pressed={activeCategory === category} className={activeCategory === category ? 'blog-filter-pill is-active' : 'blog-filter-pill'}>{category}</button>)}
      </div>
      {filtered.length ? (
        <motion.div layout className="blog-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map(({ slug, frontmatter }) => {
              const meta = [frontmatter.author, formatDate(frontmatter.date), frontmatter.readingTime].filter((value): value is string => Boolean(value));
              return <motion.div key={slug} layout initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} transition={{ duration: .3 }}>
                <ExpandCard mode="article" href={`/blog/${slug}`} title={frontmatter.title} category={frontmatter.category} summary={frontmatter.summary} image={frontmatter.image || ''} imageAlt={frontmatter.title} meta={meta} />
              </motion.div>;
            })}
          </AnimatePresence>
        </motion.div>
      ) : <p className="blog-empty-state">No articles in this category yet.</p>}
    </>
  );
}
