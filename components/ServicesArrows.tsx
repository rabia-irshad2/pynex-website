//app/components/ServicesArrows.tsx
'use client';

export default function ServicesArrows({
  targetId = 'services-scroll',
  step = 360,
}: {
  targetId?: string;
  step?: number;
}) {
  function scrollBy(delta: number) {
    const el = document.getElementById(targetId);
    if (el) el.scrollBy({ left: delta, behavior: 'smooth' });
  }

  return (
    <div className="services-arrows">
      <button
        type="button"
        className="services-arrow"
        aria-label="Previous services"
        onClick={() => scrollBy(-step)}
      >
        ←
      </button>
      <button
        type="button"
        className="services-arrow"
        aria-label="Next services"
        onClick={() => scrollBy(step)}
      >
        →
      </button>
    </div>
  );
}