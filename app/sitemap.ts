import type { MetadataRoute } from 'next';
import { getAllBlogPosts, getAllProjects, getAllServices } from '@/lib/content';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ['', '/about', '/services', '/projects', '/blog', '/contact', '/privacy-policy', '/terms', '/cookies', '/unsubscribe'];

  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}`, lastModified: now })),
    ...getAllServices().map((service) => ({ url: `${siteUrl}/services/${service.slug}`, lastModified: now })),
    ...getAllProjects().map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, lastModified: now })),
    ...getAllBlogPosts().map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.frontmatter.date),
    })),
  ];
}