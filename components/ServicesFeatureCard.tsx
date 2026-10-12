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
    <Link href={`/services/${service.slug}`} className="services-feature-card">
      <span className="services-feature-number">{String(order).padStart(2, '0')} / SERVICES</span>
      <h2>{service.title}</h2>
      <p>{introduction || service.shortDescription}</p>
      <div className="services-feature-image">
        <Image
          src={image}
          alt={`${service.title} project visual`}
          fill
          sizes="(max-width: 700px) 100vw, 33vw"
        />
      </div>
      <span className="services-feature-action">
        <ButtonLabel>More information <ArrowUpRight size={20} aria-hidden="true" /></ButtonLabel>
      </span>
    </Link>
  );
}
