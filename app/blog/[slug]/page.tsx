import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import SectionLabel from '@/components/SectionLabel';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/content';

export function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article>
      <section className="bg-soft-bg py-16">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>{post.frontmatter.category}</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-main-text max-w-3xl">
            {post.frontmatter.title}
          </h1>
          <p className="text-secondary-text">
            {post.frontmatter.author} &middot;{' '}
            {new Date(post.frontmatter.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
            {post.frontmatter.readingTime && <> &middot; {post.frontmatter.readingTime}</>}
          </p>
        </div>
      </section>

      <div className="max-w-content mx-auto px-6 md:px-12 py-section-phone md:py-section-desktop">
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 bg-soft-bg">
          <Image src={post.frontmatter.image} alt={post.frontmatter.title} fill className="object-cover" />
        </div>
        <div className="prose prose-lg max-w-none mx-auto text-main-text">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
