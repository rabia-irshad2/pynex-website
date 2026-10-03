//app/blog/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import SectionLabel from '@/components/SectionLabel';
import SafeImage from '@/components/SafeImage';
import BlogFilters from '@/components/BlogFilters';
import Reveal from '@/components/Reveal';
import { getAllBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Articles on AI, automation, and building smarter software from the PYNEX team.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featured = posts[0];

  return (
    <>
      {/* HERO */}
      <section className="blog-page-hero theme-dark-section">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>Insights</SectionLabel>
            <h1 className="blog-page-title">
              Thinking on AI, automation, and business software.
            </h1>
            <p className="blog-page-intro">
              Practical thinking on AI, automation, and software for people
              building better businesses.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {featured && (
        <section className="theme-dark-section pt-12 md:pt-16 pb-8">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <Reveal>
              <SectionLabel>Latest article</SectionLabel>
              <Link
                href={`/blog/${featured.slug}`}
                className="featured-article-card"
              >
                <div className="featured-article-image">
                  <SafeImage
                    src={featured.frontmatter.image}
                    alt={featured.frontmatter.title}
                    fill
                    className="object-cover"
                    fallback={
                      <div className="blog-placeholder">
                        <span>{featured.frontmatter.category}</span>
                      </div>
                    }
                  />
                </div>
                <div className="featured-article-content">
                  <p className="section-label mb-0">
                    {featured.frontmatter.category}
                  </p>
                  <h2 className="featured-article-title">
                    {featured.frontmatter.title}
                  </h2>
                  <p className="featured-article-summary">
                    {featured.frontmatter.summary}
                  </p>
                  <p className="text-xs text-secondary-text mt-2">
                    {featured.frontmatter.author} ·{' '}
                    {featured.frontmatter.readingTime || 'Read'}
                  </p>
                  <span className="btn-secondary self-start mt-4">
                    Read article
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* ALL ARTICLES */}
      <section className="theme-dark-section py-12 md:py-16">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>All articles</SectionLabel>
          </Reveal>
          <BlogFilters posts={posts} />
        </div>
      </section>
    </>
  );
}