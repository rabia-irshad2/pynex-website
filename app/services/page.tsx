import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import ServiceCard from '@/components/ServiceCard';
import { getAllServices } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Services',
  description: 'AI solutions, business automation, custom software, and intelligent digital products.',
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <section className="py-section-phone md:py-section-desktop">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <SectionLabel>what we do</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-main-text">Our services</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s.frontmatter} />
          ))}
        </div>
      </div>
    </section>
  );
}
