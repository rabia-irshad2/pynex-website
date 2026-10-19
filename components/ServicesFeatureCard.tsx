import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ButtonLabel } from '@/components/Button';
import { SERVICE_IMAGES } from './ServiceCard';
import type { ServiceFrontmatter } from '@/lib/content';

export default function ServicesFeatureCard({
  service,
  introduction,
  order,
}: {
  service: ServiceFrontmatter;
  introduction: string;
  order: number;
}) {
  const image = SERVICE_IMAGES[service.slug] || SERVICE_IMAGES['ai-solutions'];

  return (
    <Link href={`/services/${service.slug}`} className="services-feature-card services-flip-card">
      <span className="services-flip-inner">
        <span className="services-flip-face services-flip-front">
          <span className="services-feature-image">
            <Image src={image} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
          </span>
          <span className="services-flip-front-shade" aria-hidden="true" />
          <span className="services-flip-front-copy">
            <span className="services-feature-number">{String(order).padStart(2, '0')} / SERVICES</span>
            <span className="services-flip-title">{service.title}</span>
            <span className="services-flip-hint">Hover to explore</span>
          </span>
        </span>
        <span className="services-flip-face services-flip-back">
          <span className="services-feature-image services-feature-image-back">
            <Image src={image} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
          </span>
          <span className="services-flip-back-shade" aria-hidden="true" />
          <span className="services-flip-back-copy">
            <span className="services-feature-number">{String(order).padStart(2, '0')} / SERVICES</span>
            <span className="services-flip-title">{service.title}</span>
            <span className="services-flip-description">{introduction || service.shortDescription}</span>
            <span className="services-feature-action">
              <ButtonLabel>Explore service <ArrowUpRight size={18} aria-hidden="true" /></ButtonLabel>
            </span>
          </span>
        </span>
      </span>
    </Link>
  );
}
