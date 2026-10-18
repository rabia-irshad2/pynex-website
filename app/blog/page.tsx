import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';
import BlogFilters from '@/components/BlogFilters';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { getAllBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Articles on AI, automation, and building smarter software from the PYNEX team.',
};

function formatDate(date: string) {
  const parsed = new Date(`${date}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? '' : new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(parsed);
}

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featured = posts[0];
  const featuredMeta = featured ? [featured.frontmatter.author, formatDate(featured.frontmatter.date), featured.frontmatter.readingTime].filter((value): value is string => Boolean(value)) : [];

  return (
    <main className="blog-redesign theme-dark-section">
      <section className="blog-index-hero">
        <div className="blog-container">
          <Reveal>
            <SectionLabel>Insights</SectionLabel>
            <h1 className="blog-page-title">Thinking on AI, automation, and business software.</h1>
            <p className="blog-page-intro">Practical thinking on AI, automation, and software for people building better businesses.</p>
          </Reveal>
        </div>
      </section>

      {featured && <section className="blog-featured-section"><div className="blog-container">
        <Reveal>
          <article className="blog-featured-card">
            {featured.frontmatter.image && <Link href={`/blog/${featured.slug}`} className="blog-featured-image"><Image src={featured.frontmatter.image} alt={featured.frontmatter.title} width={1600} height={900} sizes="(max-width: 760px) 100vw, 55vw" priority /></Link>}
            <div className="blog-featured-content">
              <span className="blog-category-label">{featured.frontmatter.category}</span>
              <h2>{featured.frontmatter.title}</h2>
              <p>{featured.frontmatter.summary}</p>
              {featuredMeta.length > 0 && <div className="blog-featured-meta">{featuredMeta.map((item, index) => <span key={`${item}-${index}`}>{index > 0 && <i aria-hidden="true" />}{item}</span>)}</div>}
              <AnimatedButton href={`/blog/${featured.slug}`} className="blog-read-button">Read article <ArrowRight size={16} aria-hidden="true" /></AnimatedButton>
            </div>
          </article>
        </Reveal>
      </div></section>}

      <section className="blog-articles-section"><div className="blog-container">
        <Reveal><div className="blog-grid-heading"><SectionLabel>All articles</SectionLabel><h2>Explore the insights</h2></div></Reveal>
        <BlogFilters posts={posts} featuredSlug={featured?.slug} />
      </div></section>

      <section className="blog-closing"><Reveal><h2>Ready to make your business smarter?</h2><AnimatedButton href="/contact">Book a consultation <ArrowRight size={16} aria-hidden="true" /></AnimatedButton></Reveal></section>
    </main>
  );
}
