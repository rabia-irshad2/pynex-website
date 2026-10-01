import Link from 'next/link';
import { ArrowRight, Bot, Code2, Workflow, Sparkles } from 'lucide-react';
import type { ServiceFrontmatter } from '@/lib/content';

const serviceVisuals = {
  'ai-solutions': Bot,
  'business-automation': Workflow,
  'custom-software': Code2,
  'digital-products': Sparkles,
} as const;

export default function ServiceCard({ service }: { service: ServiceFrontmatter }) {
  const Visual = serviceVisuals[service.slug as keyof typeof serviceVisuals] || Sparkles;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`pynex-card service-card service-card-${service.slug} block p-8 bg-gradient-to-br from-soft-bg to-white`}
    >
      <span className="service-card-art" aria-hidden="true">
        <span className="service-card-art-glow" />
        <Visual className="service-card-art-icon" size={76} strokeWidth={1.2} />
      </span>
      <div className="service-card-copy">
        <h3 className="text-xl font-semibold mb-2 text-main-text">{service.title}</h3>
        <p className="text-secondary-text text-sm mb-4">{service.shortDescription}</p>
        <span className="service-card-link inline-flex items-center gap-1 text-primary-blue font-medium text-sm">
          Learn more <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
