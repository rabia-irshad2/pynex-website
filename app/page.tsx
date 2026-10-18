//app/page.tsx
import Hero from '@/components/Hero';
import HomeOverview from '@/components/HomeOverview';
import HomeServices from '@/components/HomeServices';
import HomeProducts from '@/components/HomeProducts';
import HomeFeaturedProduct from '@/components/HomeFeaturedProduct';
import SloganMarquee from '@/components/SloganMarquee';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import HQStrip from '@/components/HQStrip';
import QualitiesSection from '@/components/QualitiesSection';
import TeamSection from '@/components/TeamSection';
import ClosingCta from '@/components/ClosingCta';

import {
  getAllServices,
  getAllProjects,
  getProducts,
  getTeam,
  getTestimonials,
} from '@/lib/content';

export default function HomePage() {
  const services = getAllServices();
  const projects = getAllProjects();
  const products = getProducts();
  const team = getTeam();
  const testimonials = getTestimonials();
  const showTestimonials = testimonials.length >= 2;

  const servicePayload = services.map((s) => ({
    slug: s.slug,
    frontmatter: s.frontmatter,
    introduction:
      s.content.split(/\n\s*##\s+/)[0]?.trim() || s.frontmatter.shortDescription,
  }));

  return (
    <>
      <Hero />
      <HomeOverview />
      <HomeServices services={servicePayload} />
      <HomeProducts products={products} />
      <HomeFeaturedProduct />
      <SloganMarquee />
      <CaseStudiesSection projects={projects} />
      {showTestimonials && <TestimonialsCarousel testimonials={testimonials} />}
      <HQStrip />
      <QualitiesSection />
      <TeamSection team={team} />
      <SloganMarquee />
      <ClosingCta />
    </>
  );
}