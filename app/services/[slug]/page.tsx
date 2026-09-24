import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Button from '@/components/Button';
import SectionLabel from '@/components/SectionLabel';
import { getAllServices, getServiceBySlug, getAllProjects } from '@/lib/content';
import Reveal from '@/components/Reveal';

const process = ['Understand', 'Design', 'Build and test', 'Launch and support'];

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
  const relatedProjects = getAllProjects().filter((project) => project.frontmatter.category.toLowerCase().includes(service.frontmatter.title.toLowerCase().split(' ')[0])).slice(0, 2);
  const deliverables = service.frontmatter.deliverables || [];
  const technologies = service.frontmatter.technologies || [];

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

      <Reveal className="py-section-phone md:py-section-desktop">
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
      </Reveal>

      <Reveal className="bg-soft-bg py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>what we deliver</SectionLabel>
          <h2 className="section-title mb-10 text-main-text">A practical path from idea to useful system.</h2>
          {deliverables.length ? <div className="grid sm:grid-cols-2 gap-4">{deliverables.map((item, index) => <article key={item} className="pynex-card p-6"><span className="section-label">0{index + 1}</span><h3 className="font-semibold text-main-text mt-3">{item}</h3></article>)}</div> : <p className="text-secondary-text">Deliverables will be added when this service has approved service-specific content.</p>}
        </div>
      </Reveal>

      <Reveal className="bg-soft-bg py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12"><SectionLabel>technologies</SectionLabel><h2 className="section-title mb-8 text-main-text">Tools selected for the problem.</h2>{technologies.length ? <div className="flex flex-wrap gap-3">{technologies.map((technology) => <span className="scope-chip light" key={technology}>{technology}</span>)}</div> : <p className="text-secondary-text">Technology details are provided during project discovery and will be listed here when approved.</p>}</div>
      </Reveal>

      <Reveal className="py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12"><SectionLabel>related projects</SectionLabel><h2 className="section-title mb-8 text-main-text">Work in this solution area.</h2>{relatedProjects.length ? <div className="grid md:grid-cols-2 gap-6">{relatedProjects.map((project) => <a className="pynex-card p-6" href={`/projects/${project.slug}`} key={project.slug}><h3 className="font-semibold text-main-text">{project.frontmatter.title}</h3><p className="text-secondary-text text-sm mt-2">{project.frontmatter.summary}</p></a>)}</div> : <p className="text-secondary-text">Related projects will appear when approved case studies match this service.</p>}</div>
      </Reveal>

      <Reveal className="py-section-phone md:py-section-desktop">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionLabel>how it works</SectionLabel>
          <h2 className="section-title mb-10 text-main-text">A clear four-step process.</h2>
          <ol className="process-line">{process.map((step, index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong></li>)}</ol>
        </div>
      </Reveal>

      <section className="bg-black text-white py-section-phone md:py-section-desktop text-center">
        <div className="max-w-content mx-auto px-6 md:px-12"><h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to discuss your project?</h2><Button href="/contact">Book a consultation</Button></div>
      </section>
    </>
  );
}
