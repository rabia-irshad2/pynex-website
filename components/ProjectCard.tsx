import ExpandCard from '@/components/ExpandCard';
import type { ProjectFrontmatter } from '@/lib/content';

const PROJECT_IMAGES: Record<string, string> = {
  'ai-support-assistant': '/images/projects/ai-support-assistant.JPG',
  'client-portal-platform': '/images/projects/custom-software.jpg',
  'smart-inventory-system': '/images/projects/business-automation.jpg',
};

export default function ProjectCard({ project }: { project: ProjectFrontmatter }) {
  const image = project.image || PROJECT_IMAGES[project.slug] || '/images/projects/ai-solutions.jpg';
  return <ExpandCard mode="project" href={`/projects/${project.slug}`} title={project.title} category={project.category} summary={project.summary} image={image} imageAlt={`${project.title} project preview`} />;
}
