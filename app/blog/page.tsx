import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import { getAllBlogPosts } from '@/lib/content';
import BlogFilters from '@/components/BlogFilters';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles on AI, automation, and building smarter software from the PYNEX team.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featured = posts[0];

  return (
    <section className="py-section-phone md:py-section-desktop">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <SectionLabel>insights</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-main-text">Blog</h1>
        <p className="text-secondary-text max-w-2xl mb-8">Practical thinking on AI, automation, and software for people building better businesses.</p>
        {featured && <Link href={`/blog/${featured.slug}`} className="featured-article mb-14"><div><SectionLabel>latest article</SectionLabel><h2 className="text-3xl md:text-5xl font-bold text-main-text mt-3 mb-4">{featured.frontmatter.title}</h2><p className="text-secondary-text max-w-xl">{featured.frontmatter.summary}</p></div><span className="btn-secondary">Read article</span></Link>}
        <BlogFilters posts={posts} />
      </div>
    </section>
  );
}
