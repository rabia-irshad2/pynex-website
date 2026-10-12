//components/HomeServices.tsx
import Reveal from '@/components/Reveal';
import ScrollRevealText from '@/components/ScrollRevealText';
import ServiceFlipCard from '@/components/ServiceFlipCard';
import type { ServiceFrontmatter } from '@/lib/content';

type Service = {
  slug: string;
  frontmatter: ServiceFrontmatter;
  introduction: string;
};

export default function HomeServices({ services }: { services: Service[] }) {
  return (
    <section className="home-services theme-dark-section">
      <div className="container-pynex">
        <div className="home-services-header">
          <Reveal>
            <p className="section-label">services</p>
          </Reveal>
          <ScrollRevealText
            as="h2"
            text="Explore Our Complete Technology Services"
            className="home-services-title"
            variant="focus"
          />
        </div>

        <div className="home-services-grid">
          {services.map((service, index) => {
            return (
              <Reveal key={service.slug} delay={index * 0.1}>
                <ServiceFlipCard
                  service={service.frontmatter}
                  introduction={service.introduction || service.frontmatter.shortDescription}
                  details={[]}
                  order={index + 1}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
