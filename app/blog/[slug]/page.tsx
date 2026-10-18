import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import AnimatedButton from '@/components/AnimatedButton';
import ExpandCard from '@/components/ExpandCard';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/content';

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.frontmatter.title, description: post.frontmatter.summary };
}

function formatDate(date: string) {
  const parsed = new Date(`${date}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? '' : new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(parsed);
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const meta = [post.frontmatter.author, formatDate(post.frontmatter.date), post.frontmatter.readingTime].filter((value): value is string => Boolean(value));
  const related = getAllBlogPosts().filter((item) => item.slug !== post.slug && item.frontmatter.category === post.frontmatter.category).slice(0, 3);

  return (
    <main className="blog-redesign blog-article-page theme-dark-section">
      <header className="blog-article-header">
        <div className="blog-article-container">
          <Reveal>
            <SectionLabel>{post.frontmatter.category}</SectionLabel>
            <h1>{post.frontmatter.title}</h1>
            {meta.length > 0 && <div className="blog-article-meta">{meta.map((item, index) => <span key={`${item}-${index}`}>{index > 0 && <i aria-hidden="true" />}{item}</span>)}</div>}
          </Reveal>
        </div>
      </header>

      {post.frontmatter.image && <div className="blog-article-image-wrap"><Image src={post.frontmatter.image} alt={post.frontmatter.title} width={1600} height={900} sizes="(max-width: 1240px) 100vw, 1200px" priority /></div>}

      <article className="blog-article-content"><MDXRemote source={post.content} /></article>

      {related.length > 0 && <section className="blog-related-section"><div className="blog-container">
        <Reveal><SectionLabel>Keep reading</SectionLabel><h2>More on {post.frontmatter.category}</h2></Reveal>
        <div className="blog-related-grid">{related.map((item, index) => {
          const relatedMeta = [item.frontmatter.author, formatDate(item.frontmatter.date), item.frontmatter.readingTime].filter((value): value is string => Boolean(value));
          return <Reveal key={item.slug} delay={index * .06}><ExpandCard mode="article" href={`/blog/${item.slug}`} title={item.frontmatter.title} category={item.frontmatter.category} summary={item.frontmatter.summary} image={item.frontmatter.image || undefined} imageAlt={item.frontmatter.title} meta={relatedMeta} /></Reveal>;
        })}</div>
      </div></section>}

      <section className="blog-closing"><Reveal><h2>Ready to make your business smarter?</h2><AnimatedButton href="/contact">Book a consultation</AnimatedButton></Reveal></section>
    </main>
  );
}
