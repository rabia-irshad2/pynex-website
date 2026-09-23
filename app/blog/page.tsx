import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SectionLabel from '@/components/SectionLabel';
import { getAllBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles on AI, automation, and building smarter software from the PYNEX team.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <section className="py-section-phone md:py-section-desktop">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <SectionLabel>insights</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-main-text">Blog</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="pynex-card block overflow-hidden">
              <div className="relative w-full aspect-[16/10] bg-soft-bg">
                <Image src={post.frontmatter.image} alt={post.frontmatter.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="section-label mb-1">{post.frontmatter.category}</p>
                <h2 className="text-lg font-semibold text-main-text mb-2">{post.frontmatter.title}</h2>
                <p className="text-secondary-text text-sm mb-3">{post.frontmatter.summary}</p>
                <p className="text-xs text-secondary-text">
                  {post.frontmatter.author} &middot;{' '}
                  {new Date(post.frontmatter.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
