//app/page.tsx
import Button from '@/components/Button';
import Hero from '@/components/Hero';
import HomeStats from '@/components/HomeStats';
import HomeServices from '@/components/HomeServices';
import HomeProducts from '@/components/HomeProducts';
import HomeFeaturedProduct from '@/components/HomeFeaturedProduct';
import SloganMarquee from '@/components/SloganMarquee';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import HQStrip from '@/components/HQStrip';
import QualitiesSection from '@/components/QualitiesSection';
import TeamSection from '@/components/TeamSection';
import Reveal from '@/components/Reveal';
import ScrollRevealText from '@/components/ScrollRevealText';
import HomeOverview from '@/components/HomeOverview';
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
      {/* ═══ 1. HERO ═══ */}
      <Hero />
      <HomeOverview />

      {/* ═══ 2. STATS ═══ */}
      <HomeStats />

      {/* ═══ 3. SERVICES ═══ */}
      <HomeServices services={servicePayload} />

      {/* ═══ 4. AI PRODUCTS ═══ */}
      <HomeProducts products={products} />

      {/* ═══ 5. FEATURED PRODUCT ═══ */}
      <HomeFeaturedProduct />

      {/* ═══ 6. SLOGAN MARQUEE ═══ */}
      <SloganMarquee />

      {/* ═══ 7. CASE STUDIES ═══ */}
      <CaseStudiesSection projects={projects} />

      {/* ═══ 8. TESTIMONIALS ═══ */}
      {showTestimonials && (
        <TestimonialsCarousel testimonials={testimonials} />
      )}

      {/* ═══ 9. HQ PHOTO STRIP ═══ */}
      <HQStrip />

      {/* ═══ 10. QUALITIES ═══ */}
      <QualitiesSection />

      {/* ═══ 11. TEAM ═══ */}
      <TeamSection team={team} />

      {/* ═══ 12. SLOGAN MARQUEE ═══ */}
      <SloganMarquee />

      {/* ═══ 13. CLOSING CTA ═══ */}
      <section className="section-centered theme-dark-section">
        <div className="container-pynex">
          <div className="closing-cta-inner">
            <Reveal>
              <p className="section-label">Product. Design. Technology.</p>
            </Reveal>

            <ScrollRevealText
              as="h2"
              text="Let's build something smarter."
              className="closing-cta-title-wrap"
              variant="expand"
            />

            <Reveal delay={0.2}>
              <p className="centered-subtitle">
                Tell us about the problem you&apos;re trying to solve.
                We&apos;ll reply within one business day.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="centered-actions">
                <Button href="/contact">Arrange a Meeting</Button>
                <Button href="/services" variant="secondary">
                  Explore services
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}