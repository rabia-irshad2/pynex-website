import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ServiceFrontmatter } from '@/lib/content';

export default function ServiceCard({ service }: { service: ServiceFrontmatter }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="pynex-card block p-8 bg-gradient-to-br from-soft-bg to-white"
    >
      <p className="text-3xl mb-4">{service.icon}</p>
      <h3 className="text-xl font-semibold mb-2 text-main-text">{service.title}</h3>
      <p className="text-secondary-text text-sm mb-4">{service.shortDescription}</p>
      <span className="inline-flex items-center gap-1 text-primary-blue font-medium text-sm">
        Learn more <ArrowRight size={16} />
      </span>
    </Link>
  );
}
