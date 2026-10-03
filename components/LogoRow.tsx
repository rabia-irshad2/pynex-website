//app/components/LogoRow.tsx
'use client';

import Image from 'next/image';

export default function LogoRow({
  logos,
  speed = 45,
}: {
  logos: { src: string; alt: string }[];
  speed?: number;
}) {
  if (!logos.length) return null;

  const doubled = [...logos, ...logos];

  return (
    <div className="logo-row" aria-label="Trusted by">
      <div className="logo-row-track" style={{ animationDuration: `${speed}s` }}>
        {doubled.map((logo, i) => (
          <div key={`${logo.src}-${i}`} className="logo-row-item">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={64}
              className="logo-row-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}