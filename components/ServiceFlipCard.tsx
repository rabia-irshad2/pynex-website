'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { SERVICE_IMAGES } from './ServiceCard';
import type { ServiceFrontmatter } from '@/lib/content';

export default function ServiceFlipCard({
  service,
  introduction,
  details,
  order,
}: {
  service: ServiceFrontmatter;
  introduction: string;
  details: string[];
  order: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const image = SERVICE_IMAGES[service.slug] || SERVICE_IMAGES['ai-solutions'];

  return (
    <article className={`home-service-flip-card${flipped ? ' is-flipped' : ''}`}>
      <div className="home-service-flip-inner">
        <div className="home-service-face home-service-front">
          <Image
            src={image}
            alt={`${service.title} service`}
            fill
            sizes="(max-width: 700px) 100vw, 33vw"
            className="home-service-image"
          />
          <div className="home-service-shade" aria-hidden="true" />
          <div className="home-service-illustration" aria-hidden="true">
            <span>{service.icon}</span>
          </div>
          <div className="home-service-front-copy">
            <span className="home-service-eyebrow">SERVICE / {String(order).padStart(2, '0')}</span>
            <h3>{service.title}</h3>
          </div>
          <button
            type="button"
            className="home-service-flip-button"
            aria-label={`Show details for ${service.title}`}
            aria-pressed={flipped}
            onClick={() => setFlipped((value) => !value)}
          >
            <RotateCcw size={17} aria-hidden="true" />
          </button>
        </div>

        <div className="home-service-face home-service-back">
          <div className="home-service-back-top">
            <span className="home-service-eyebrow">WHAT WE DO / {String(order).padStart(2, '0')}</span>
            <button
              type="button"
              className="home-service-flip-button home-service-flip-button-dark"
              aria-label={`Show image for ${service.title}`}
              aria-pressed={flipped}
              onClick={() => setFlipped((value) => !value)}
            >
              <RotateCcw size={17} aria-hidden="true" />
            </button>
          </div>
          <h3>{service.title}</h3>
          <p className="home-service-description">{introduction || service.shortDescription}</p>
          <ul>
            {details.slice(0, 4).map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
          <Link href={`/services/${service.slug}`} className="home-service-learn-link">
            Learn more <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}