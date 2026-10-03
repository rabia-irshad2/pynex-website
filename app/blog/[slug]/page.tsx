//app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { MDXRemote } from 'next-mdx-remote/rsc';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/content';

export function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const related = getAllBlogPosts()
    .filter(
      (item) =>
        item.slug !== post.slug &&
        item.frontmatter.category === post.frontmatter.category
    )
    .slice(0, 3);

  return (
    <article className="theme-dark-section">
      {/* HERO */}
      <section className="blog-page-hero">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>{post.frontmatter.category}</SectionLabel>
            <h1 className="blog-page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              {post.frontmatter.title}
            </h1>
            <p className="blog-page-intro">
              {post.frontmatter.author} ·{' '}
              {new Date(post.frontmatter.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
              {post.frontmatter.readingTime && ` · ${post.frontmatter.readingTime}`}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-content mx-auto px-6 md:px-12 py-16 md:py-24">
        <Reveal>
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 border border-white/10">
            <SafeImage
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              fill
              className="object-cover"
              fallback={
                <div className="blog-placeholder">
                  <span>{post.frontmatter.category}</span>
                </div>
              }
            />
          </div>
        </Reveal>

        <article className="blog-article-content max-w-3xl mx-auto">
          <MDXRemote source={post.content} />
        </article>

        {/* CTA */}
        <Reveal>
          <div className="mission-card text-center mt-16 max-w-3xl mx-auto">
            <h2 className="mission-card-title">Have a business problem to solve?</h2>
            <p className="mission-card-text mb-6">
              Tell us about it — we&apos;ll reply within one business day.
            </p>
            <Link href="/contact" className="btn-primary">
              Talk to PYNEX
            </Link>
          </div>
        </Reveal>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="mt-20 max-w-3xl mx-auto">
            <Reveal>
              <SectionLabel>Related articles</SectionLabel>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 mt-6">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.06}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="blog-card p-5 block"
                  >
                    <p className="section-label">{item.frontmatter.category}</p>
                    <h3
                      className="text-main-text mt-2"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.35rem',
                        lineHeight: 1.1,
                        color: '#fff',
                      }}
                    >
                      {item.frontmatter.title}
                    </h3>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}