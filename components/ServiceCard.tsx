//app/components/ServiceCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ServiceFrontmatter } from '@/lib/content';

const serviceImages: Record<string, string> = {
  'ai-solutions': '/images/services/ai-solutions.jpg',
  'business-automation': '/images/services/business-automation.jpg',
  'custom-software': '/images/services/custom-software.jpg',
  'digital-products': '/images/services/digital-products.jpg',
};

export default function ServiceCard({
  service,
  introduction,
}: {
  service: ServiceFrontmatter;
  introduction?: string;
}) {
  const imageSrc = serviceImages[service.slug] || serviceImages['ai-solutions'];
  const description = introduction || service.shortDescription;

  return (
    <Link
      href={`/services/${service.slug}`}
      aria-label={`Learn more about ${service.title}`}
      className="premium-service-card service-flip-card"
    >
      <div className="service-flip-inner">
        {/* FRONT */}
        <div className="service-flip-front premium-service-face">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="service-face-image"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="service-face-shade" aria-hidden="true" />
          <div className="premium-service-body">
            <span className="service-chip">PYNEX Service</span>
            <h3>{service.title}</h3>
            <span className="premium-service-hint">Hover to explore</span>
          </div>
        </div>

        {/* BACK */}
        <div className="service-flip-back premium-service-face">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="service-face-image"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="service-face-shade service-face-shade-back" aria-hidden="true" />
          <div className="premium-service-body">
            <span className="service-chip">Service overview</span>
            <h3>{service.title}</h3>
            <p>{description}</p>
            <span className="premium-service-link">
              Explore service <ArrowRight size={18} aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}