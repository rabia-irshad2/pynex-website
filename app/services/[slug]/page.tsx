import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Button from '@/components/Button';
import SectionLabel from '@/components/SectionLabel';
import { getAllServices, getServiceBySlug } from '@/lib/content';

export function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.frontmatter.title,
    description: service.frontmatter.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-black text-white py-20">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>service</SectionLabel>
          <p className="text-4xl mb-4">{service.frontmatter.icon}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.frontmatter.title}</h1>
          <p className="text-white/70 max-w-xl text-lg">{service.frontmatter.shortDescription}</p>
        </div>
      </section>

      <section className="py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 prose prose-lg max-w-none text-main-text">
            <MDXRemote source={service.content} />
          </div>
          <aside className="pynex-card p-8 h-fit sticky top-24">
            <p className="font-semibold text-main-text mb-2">Interested in this service?</p>
            <p className="text-secondary-text text-sm mb-6">
              Tell us about your business and we&apos;ll map out how it fits.
            </p>
            <Button href="/contact">Book a consultation</Button>
          </aside>
        </div>
      </section>
    </>
  );
}
