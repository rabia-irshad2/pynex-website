import Image from 'next/image';
import Link from 'next/link';

export default function ExpandCard({
  mode,
  href,
  title,
  category,
  summary,
  image,
  imageAlt,
  meta = [],
}: {
  mode: 'project' | 'article';
  href: string;
  title: string;
  category: string;
  summary: string;
  image?: string;
  imageAlt: string;
  meta?: string[];
}) {
  return (
    <Link href={href} className={`project-showcase-card expand-card expand-card-${mode}`}>
      {/* FULL IMAGE */}
{mode === 'project' && image ? (
  <div className="project-card-media">
    <Image
      src={image}
      alt={imageAlt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="project-card-image"
    />
  </div>
) : null}

      {/* GRADIENT OVERLAY */}
      <div className="project-card-overlay" aria-hidden="true" />

      {/* TEXT ON IMAGE */}
      <div className="project-showcase-copy">
        <span className="project-showcase-category">{category}</span>
        <h3 className="project-showcase-title">{title}</h3>

        <div className="project-showcase-summary">
          <p>{summary}</p>
        </div>
      </div>
    </Link>
  );
}