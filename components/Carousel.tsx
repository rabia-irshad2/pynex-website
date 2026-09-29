//app/components/Carousel.tsx
'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

type CarouselProps = {
  children: React.ReactNode;
  loop?: boolean;
  label?: string;
};

export default function Carousel({ children, loop = false, label = 'Content carousel' }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    setSnapCount(emblaApi.scrollSnapList().length);
    update();
    emblaApi.on('select', update);
    return () => {
      emblaApi.off('select', update);
    };
  }, [emblaApi]);

  const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      emblaApi?.scrollPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      emblaApi?.scrollNext();
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div
        className="overflow-hidden"
        ref={emblaRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div className="flex gap-6">{children}</div>
      </div>

      <div className="flex items-center gap-3 mt-6 justify-center">
        <button
          aria-label="Previous"
          onClick={scrollPrev}
          disabled={!loop && !canScrollPrev}
          className="w-10 h-10 rounded-full border border-secondary-text/30 flex items-center justify-center hover:bg-soft-bg transition disabled:opacity-35 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-blue"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          aria-label="Next"
          onClick={scrollNext}
          disabled={!loop && !canScrollNext}
          className="w-10 h-10 rounded-full border border-secondary-text/30 flex items-center justify-center hover:bg-soft-bg transition disabled:opacity-35 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-blue"
        >
          <ChevronRight size={18} />
        </button>
        <span className="carousel-counter" aria-live="polite">
          {snapCount ? `${String(selectedIndex + 1).padStart(2, '0')} / ${String(snapCount).padStart(2, '0')}` : '01 / 01'}
        </span>
      </div>
    </div>
  );
}
