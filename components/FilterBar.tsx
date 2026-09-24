'use client';

import { useState } from 'react';

export default function FilterBar({ options, onChange }: { options: string[]; onChange: (value: string) => void }) {
  const [selected, setSelected] = useState(options[0]);

  function select(value: string) {
    setSelected(value);
    onChange(value);
  }

  return (
    <div className="filter-bar" aria-label="Filter content">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => select(option)}
          aria-pressed={selected === option}
          className={selected === option ? 'filter-button filter-button-active' : 'filter-button'}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
