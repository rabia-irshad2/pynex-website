import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SafeImage from '@/components/SafeImage';
import { MDXRemote } from 'next-mdx-remote/rsc';
import SectionLabel from '@/components/SectionLabel';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/content';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

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
  const related = getAllBlogPosts().filter((item) => item.slug !== post.slug && item.frontmatter.category === post.frontmatter.category).slice(0, 3);

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
          <SafeImage src={post.frontmatter.image} alt={post.frontmatter.title} fill className="object-cover" fallback={<div className="blog-placeholder blog-placeholder-large"><span>{post.frontmatter.category}</span></div>} />
        </div>
        <div className="prose prose-lg max-w-none mx-auto text-main-text">
          <MDXRemote source={post.content} />
        </div>
        <Reveal className="article-cta bg-black text-white text-center rounded-2xl p-8 md:p-12 mt-16"><h2 className="text-3xl md:text-4xl font-bold mb-5">Have a business problem to solve?</h2><Link href="/contact" className="btn-primary">Talk to PYNEX</Link></Reveal>
        {related.length > 0 && <section className="mt-16"><SectionLabel>related articles</SectionLabel><div className="grid md:grid-cols-3 gap-5 mt-6">{related.map((item) => <Link href={`/blog/${item.slug}`} className="pynex-card p-5" key={item.slug}><p className="section-label">{item.frontmatter.category}</p><h2 className="font-semibold text-main-text mt-2">{item.frontmatter.title}</h2></Link>)}</div></section>}
      </div>
    </article>
  );
}
