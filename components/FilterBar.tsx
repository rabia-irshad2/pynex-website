'use client';

import { useRef, useState } from 'react';
import { ButtonLabel } from '@/components/Button';

export default function Tabs({ options, onChange }: { options: string[]; onChange: (value: string) => void }) {
  const [selected, setSelected] = useState(options[0]);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function select(value: string) {
    setSelected(value);
    onChange(value);
  }

  return (
    <div className="filter-bar" role="tablist" aria-label="Filter content">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          role="tab"
          onClick={() => select(option)}
          aria-selected={selected === option}
          tabIndex={selected === option ? 0 : -1}
          ref={(node) => { tabRefs.current[options.indexOf(option)] = node; }}
          onKeyDown={(event) => {
            if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
            event.preventDefault();
            const step = event.key === 'ArrowRight' ? 1 : -1;
            const next = (options.indexOf(option) + step + options.length) % options.length;
            select(options[next]);
            tabRefs.current[next]?.focus();
          }}
          className={selected === option ? 'filter-button filter-button-active' : 'filter-button'}
        >
          <ButtonLabel>{option}</ButtonLabel>
        </button>
      ))}
    </div>
  );
}
