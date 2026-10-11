//components/HQStrip.tsx
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import ScrollRevealText from '@/components/ScrollRevealText';

// Drop photos into public/images/inside/ and add filenames here.
// Leave empty to auto-hide the section.
const HQ_PHOTOS = [
  '/images/inside/workspace-1.jpg',
  '/images/inside/workspace-2.jpg',
  '/images/inside/workspace-3.jpg',
  '/images/inside/workspace-4.jpg',
  '/images/inside/workspace-5.jpg',
  '/images/inside/workspace-6.jpg',
];

export default function HQStrip() {
  // Only render if at least 2 photos exist AND at least one loads
  // (the browser will handle missing ones; we just need >=2 entries)
  if (HQ_PHOTOS.length < 2) return null;

  return (
    <section className="hq-strip theme-dark-section">
      <div className="container-pynex">
        <div className="hq-strip-header">
          <Reveal>
            <p className="section-label">Inside PYNEX</p>
          </Reveal>
          <ScrollRevealText
            as="h2"
            text="Step Inside The PYNEX HQ"
            className="hq-strip-title"
            variant="focus"
          />
        </div>
      </div>

      <div className="hq-strip-track">
        {HQ_PHOTOS.map((photo, i) => (
          <div className="hq-strip-photo" key={`${photo}-${i}`}>
            <Image
              src={photo}
              alt={`PYNEX workspace ${i + 1}`}
              fill
              sizes="(max-width: 768px) 60vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}