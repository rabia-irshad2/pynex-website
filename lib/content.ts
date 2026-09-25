import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export type ServiceFrontmatter = {
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  deliverables?: string[];
  technologies?: string[];
};

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  location: string;
  category: string;
  summary: string;
  scope: string[];
  website?: string;
  featured?: boolean;
  image?: string;
  features?: string[];
  technologies?: string[];
  service?: string;
};

export type BlogFrontmatter = {
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  summary: string;
  image: string;
  readingTime?: string;
};

function readAll<T>(subfolder: string): { frontmatter: T; content: string; slug: string }[] {
  const dir = path.join(CONTENT_DIR, subfolder);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const { data, content } = matter(raw);
      const slug = data.slug || file.replace(/\.mdx?$/, '');
      return { frontmatter: { ...data, slug } as T, content, slug };
    });
}

function normalizeImagePath(image: unknown) {
  if (typeof image !== 'string' || !image) return undefined;
  const filePath = path.join(process.cwd(), 'public', image.replace(/^\//, ''));
  return fs.existsSync(filePath) ? image : undefined;
}

export function getAllServices() {
  return readAll<ServiceFrontmatter>('services');
}

export function getServiceBySlug(slug: string) {
  return getAllServices().find((s) => s.slug === slug) || null;
}

export function getAllProjects() {
  return readAll<ProjectFrontmatter>('projects').map((project) => ({
    ...project,
    frontmatter: { ...project.frontmatter, image: normalizeImagePath(project.frontmatter.image) },
  }));
}

export function getProjectBySlug(slug: string) {
  return getAllProjects().find((p) => p.slug === slug) || null;
}

export function getFeaturedProject() {
  const projects = getAllProjects();
  return projects.find((p) => p.frontmatter.featured) || null;
}

export function getAllBlogPosts() {
  return readAll<BlogFrontmatter>('blog').map((post) => ({
    ...post,
    frontmatter: { ...post.frontmatter, image: normalizeImagePath(post.frontmatter.image) || '' },
  })).sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string) {
  return getAllBlogPosts().find((p) => p.slug === slug) || null;
}

export function getTeam() {
  const file = path.join(CONTENT_DIR, 'team.json');
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

export function getTestimonials() {
  const file = path.join(CONTENT_DIR, 'testimonials.json');
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

export function getMarkdownBullets(content: string, heading: string) {
  const section = content.match(new RegExp(`##\\s+${heading}\\s*\\n([\\s\\S]*?)(?=\\n##\\s|$)`, 'i'))?.[1] || '';
  return Array.from(section.matchAll(/^[-*]\s+(.+)$/gm), (match) => match[1].trim());
}

export function getPublicImages(subfolder: string) {
  const dir = path.join(process.cwd(), 'public', 'images', subfolder);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((file) => /\.(avif|jpg|jpeg|png|webp)$/i.test(file))
    .map((file) => `/images/${subfolder}/${file}`);
}
