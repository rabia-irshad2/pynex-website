import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

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
      {mode === 'project' && image ? (
        <span className={`project-device ${category === 'AI Solutions' ? 'project-device-phone' : 'project-device-monitor'}`}>
          <span className="project-device-screen">
            <Image src={image} alt={imageAlt} width={1200} height={800} sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" />
          </span>
          {category !== 'AI Solutions' && <span className="project-device-stand" aria-hidden="true" />}
        </span>
      ) : mode === 'article' && image ? (
        <>
          <span className="article-expand-image"><Image src={image} alt={imageAlt} width={1600} height={900} sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" /></span>
          <span className="article-expand-pill">{category}</span>
        </>
      ) : null}
      <span className="project-card-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
      <span className="project-showcase-copy">
        <span className="project-showcase-category">{category}</span>
        <span className="project-showcase-title">{title}</span>
        <span className="project-showcase-summary">
          <span>
            <span className="expand-card-description">{summary}</span>
            {meta.length > 0 && <span className="expand-card-meta">{meta.map((item, index) => <span key={`${item}-${index}`}>{index > 0 && <i aria-hidden="true" />}{item}</span>)}</span>}
          </span>
        </span>
      </span>
    </Link>
  );
}
