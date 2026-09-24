'use client';

import { useState } from 'react';
import Link from 'next/link';
import FilterBar from './FilterBar';
import type { BlogFrontmatter } from '@/lib/content';
import SafeImage from './SafeImage';

type Post = { slug: string; frontmatter: BlogFrontmatter };
const options = ['All', 'AI', 'Automation', 'Software Development', 'Technology Insights'];

export default function BlogFilters({ posts }: { posts: Post[] }) {
  const [filter, setFilter] = useState('All');
  const visiblePosts = filter === 'All' ? posts : posts.filter(({ frontmatter }) => frontmatter.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <FilterBar options={options} onChange={setFilter} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visiblePosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="pynex-card block overflow-hidden">
            <div className="relative aspect-[16/10] bg-soft-bg"><SafeImage src={post.frontmatter.image} alt={post.frontmatter.title} fill className="object-cover" fallback={<div className="blog-placeholder" aria-label={`${post.frontmatter.title} image placeholder`}><span>{post.frontmatter.category}</span></div>} /></div>
            <div className="p-6">
              <p className="section-label mb-1">{post.frontmatter.category}</p>
              <h2 className="text-lg font-semibold text-main-text mb-2">{post.frontmatter.title}</h2>
              <p className="text-secondary-text text-sm mb-3">{post.frontmatter.summary}</p>
              <p className="text-xs text-secondary-text">{post.frontmatter.author} &middot; {post.frontmatter.readingTime || 'Read'}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
