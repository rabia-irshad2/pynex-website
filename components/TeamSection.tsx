'use client';

import { useState } from 'react';
import SafeImage from '@/components/SafeImage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Member = {
  name: string;
  role?: string;
  bio?: string;
  photo?: string;
};

const GRADIENT_ORDER = [1, 2, 3, 4];

export default function TeamSection({ team }: { team: Member[] }) {
  const [active, setActive] = useState(0);

  if (!team || team.length === 0) return null;

  const isFirst = active === 0;
  const isLast = active === team.length - 1;

  const next = () => {
    if (!isLast) setActive((i) => i + 1);
  };
  
  const prev = () => {
    if (!isFirst) setActive((i) => i - 1);
  };

  return (
    <section className="et-team-section">
      <div className="et-team-inner">
        
        {/* LEFT SIDE: Heading & Label */}
        <div className="et-team-copy">
          <div className="et-section-label">
            <span className="et-section-dot" />
            TEAM
          </div>
          <h2 className="et-team-title">
            <span>THE PEOPLE BEHIND</span>
            <span>THE INTELLIGENCE</span>
          </h2>
        </div>

        {/* RIGHT SIDE: Stage Container */}
        <div className="et-team-carousel-container">
          <div className="et-team-cards-stage">
            {team.map((member, i) => {
              const gradient = GRADIENT_ORDER[i % 4];
              const initials = member.name
                .split(' ')
                .filter(Boolean)
                .map((p) => p[0])
                .slice(0, 2)
                .join('');
              
              const offset = i - active;
              let positionClass = 'is-future';
              if (offset === 0) positionClass = 'is-active';
              else if (offset === -1) positionClass = 'is-past';
              else if (offset < -1) positionClass = 'is-hidden-left';
              else positionClass = 'is-hidden-right';

              return (
                <article 
                  key={`${member.name}-${i}`} 
                  className={`et-team-card ${positionClass}`}
                  onClick={() => setActive(i)}
                >
                  <div className={`et-team-card-image et-team-gradient-${gradient}`}>
                    <div className="et-team-card-meta">
                      <span className="et-team-card-name">{member.name}</span>
                      {member.role && (
                        <span className="et-team-card-role">{member.role}</span>
                      )}
                    </div>
                    
                    {member.photo ? (
                      <SafeImage
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="(max-width: 900px) 100vw, 480px"
                        className="et-team-img"
                        fallback={<span className="et-team-initials">{initials}</span>}
                      />
                    ) : (
                      <span className="et-team-initials">{initials}</span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>

      {/* BOTTOM NAVIGATION CONTROLS */}
      <div className="et-team-controls-wrap">
        <div className="et-team-controls">
          <button 
            onClick={prev} 
            disabled={isFirst}
            aria-label="Previous member" 
            className="et-team-arrow"
          >
            <ChevronLeft size={18} />
          </button>
          
          <span className="et-team-counter">
            {active + 1} / {team.length}
          </span>
          
          <button 
            onClick={next} 
            disabled={isLast}
            aria-label="Next member" 
            className="et-team-arrow"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}