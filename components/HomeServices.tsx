//components/HomeServices.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ScrollRevealText from '@/components/ScrollRevealText';
import { SERVICE_IMAGES } from '@/components/ServiceCard';
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

        <div className="home-services-list">
          {services.map((service, index) => {
            const image =
              SERVICE_IMAGES[service.slug] || SERVICE_IMAGES['ai-solutions'];
            const order = String(index + 1).padStart(2, '0');

            return (
              <Reveal key={service.slug} delay={index * 0.1}>
                <Link
                  href={`/services/${service.slug}`}
                  className="home-service-row"
                >
                  <div className="home-service-row-text">
                    <span className="home-service-row-eyebrow">
                      services / {order}
                    </span>
                    <h3 className="home-service-row-title">
                      {service.frontmatter.title}
                    </h3>
                    <p className="home-service-row-description">
                      {service.introduction ||
                        service.frontmatter.shortDescription}
                    </p>
                  </div>

                  <div className="home-service-row-visual">
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 100vw, 500px"
                      className="home-service-row-image"
                    />
                    <span className="home-service-row-arrow" aria-hidden="true">
                      <ArrowUpRight size={22} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}