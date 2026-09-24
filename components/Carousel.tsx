'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export default function Carousel({ children }: { children: React.ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
    update();
    emblaApi.on('select', update);
    return () => {
      emblaApi.off('select', update);
    };
  }, [emblaApi]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') emblaApi?.scrollPrev();
      if (event.key === 'ArrowRight') emblaApi?.scrollNext();
    }
    if (emblaApi) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">{children}</div>
      </div>

      <div className="flex items-center gap-3 mt-6 justify-center">
        <button
          aria-label="Previous"
          onClick={scrollPrev}
          className="w-10 h-10 rounded-full border border-secondary-text/30 flex items-center justify-center hover:bg-soft-bg transition"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          aria-label="Next"
          onClick={scrollNext}
          className="w-10 h-10 rounded-full border border-secondary-text/30 flex items-center justify-center hover:bg-soft-bg transition"
        >
          <ChevronRight size={18} />
        </button>
        <span className="carousel-counter" aria-live="polite">
          {snapCount ? `${selectedIndex + 1} / ${snapCount}` : '1 / 1'}
        </span>
      </div>
    </div>
  );
}
