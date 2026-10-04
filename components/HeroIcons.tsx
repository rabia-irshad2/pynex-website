//app/components/HeroIcons.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface TechIcon {
  id: string;
  src: string;
  label: string;
  angle: number; // degrees, position around the ring
  ring: 'inner' | 'outer';
  category: string;
  proficiency: string;
  description: string;
}

// Inner ring — core, tighter orbit, spins clockwise.
// Outer ring — supporting stack, wider orbit, spins counter-clockwise.
const ICONS: TechIcon[] = [
  {
    id: 'react',
    src: 'https://cdn.simpleicons.org/react/61DAFB',
    label: 'React',
    angle: -45,
    ring: 'inner',
    category: 'Frontend Library',
    proficiency: 'Advanced (95%)',
    description:
      'Component-driven architecture, custom hooks, concurrent features, and server components for lightning-fast UIs.',
  },
  {
    id: 'js',
    src: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    label: 'JavaScript',
    angle: 45,
    ring: 'inner',
    category: 'Core Language',
    proficiency: 'Expert (98%)',
    description:
      'Modern ESNext syntax, DOM manipulation, asynchronous programming, event loops, and full-stack runtime mastery.',
  },
  {
    id: 'typescript',
    src: 'https://cdn.simpleicons.org/typescript/3178C6',
    label: 'TypeScript',
    angle: 135,
    ring: 'inner',
    category: 'Typed Language',
    proficiency: 'Expert (95%)',
    description:
      'Static typing, advanced generics, conditional types, and maintaining bulletproof codebases at enterprise scale.',
  },
  {
    id: 'node',
    src: 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
    label: 'Node.js',
    angle: 225,
    ring: 'inner',
    category: 'Backend Runtime',
    proficiency: 'Expert (90%)',
    description:
      'Building scalable asynchronous microservices, RESTful and GraphQL APIs, and high-performance server architectures.',
  },
  {
    id: 'python',
    src: 'https://cdn.simpleicons.org/python/3776AB',
    label: 'Python',
    angle: 0,
    ring: 'outer',
    category: 'Language / AI',
    proficiency: 'Advanced (88%)',
    description:
      'Data engineering, backend scripting with FastAPI/Django, and AI/ML model integration pipelines.',
  },
  {
    id: 'docker',
    src: 'https://cdn.simpleicons.org/docker/2496ED',
    label: 'Docker',
    angle: 90,
    ring: 'outer',
    category: 'DevOps / Containers',
    proficiency: 'Advanced (85%)',
    description:
      'Containerizing applications for consistent multi-environment deployments, local development parity, and security.',
  },
  {
    id: 'kubernetes',
    src: 'https://cdn.simpleicons.org/kubernetes/326CE5',
    label: 'Kubernetes',
    angle: 180,
    ring: 'outer',
    category: 'Orchestration',
    proficiency: 'Intermediate (78%)',
    description:
      'Cluster management, automated scaling, ingress controllers, deployments, and fault-tolerant cloud infrastructures.',
  },
  {
    id: 'graphql',
    src: 'https://cdn.simpleicons.org/graphql/E10098',
    label: 'GraphQL',
    angle: 270,
    ring: 'outer',
    category: 'API Query Language',
    proficiency: 'Advanced (90%)',
    description:
      'Optimized client-server data fetching, precise schemas, resolvers, caching layers, and Apollo ecosystem tools.',
  },
];

const RING_DURATION: Record<'inner' | 'outer', number> = {
  inner: 34,
  outer: 52,
};

export default function HeroIcons() {
  const [selectedIcon, setSelectedIcon] = useState<TechIcon | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [burstId, setBurstId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const paused = Boolean(hoveredId) || Boolean(selectedIcon);

  function handleIconClick(icon: TechIcon) {
    setBurstId(icon.id);
    setSelectedIcon(icon);
  }

  return (
    <>
      <div className="hero-orbit" aria-hidden="false">
        <div className="hero-orbit-ring hero-orbit-ring-inner" aria-hidden="true" />
        <div className="hero-orbit-ring hero-orbit-ring-outer" aria-hidden="true" />

        {ICONS.map((icon, i) => (
          <div
            key={icon.id}
            className="hero-orbit-slot"
            style={{ transform: `rotate(${icon.angle}deg)` }}
          >
            <div
              className={`hero-orbit-spin hero-orbit-spin-${icon.ring} ${
                paused ? 'is-paused' : ''
              }`}
              style={
                reduceMotion
                  ? undefined
                  : { animationDuration: `${RING_DURATION[icon.ring]}s` }
              }
            >
              <div className={`hero-orbit-translate hero-orbit-translate-${icon.ring}`}>
                <div
                  className={`hero-orbit-counter hero-orbit-counter-${icon.ring} ${
                    paused ? 'is-paused' : ''
                  }`}
                  style={
                    reduceMotion
                      ? undefined
                      : { animationDuration: `${RING_DURATION[icon.ring]}s` }
                  }
                >
                  <motion.button
                    type="button"
                    className={`hero-orbit-icon hero-orbit-icon-${icon.ring}`}
                    aria-label={`View details about ${icon.label}`}
                    onClick={() => handleIconClick(icon)}
                    onMouseEnter={() => setHoveredId(icon.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onFocus={() => setHoveredId(icon.id)}
                    onBlur={() => setHoveredId(null)}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: reduceMotion ? 0 : 0.3 + i * 0.08,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    whileHover={{ scale: 1.18 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.span
                      className="hero-orbit-icon-spin"
                      animate={{ rotate: burstId === icon.id ? 360 : 0 }}
                      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                      onAnimationComplete={() => {
                        if (burstId === icon.id) setBurstId(null);
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={icon.src}
                        alt={icon.label}
                        width={icon.ring === 'inner' ? 68 : 56}
                        height={icon.ring === 'inner' ? 68 : 56}
                        draggable={false}
                      />
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Click popup modal */}
      <AnimatePresence>
        {selectedIcon && (
          <div className="hero-modal-backdrop" onClick={() => setSelectedIcon(null)}>
            <motion.div
              className="hero-modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            >
              <button
                className="hero-modal-close"
                onClick={() => setSelectedIcon(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="hero-modal-header">
                <div className="hero-modal-icon-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={selectedIcon.src} alt={selectedIcon.label} />
                </div>
                <div>
                  <span className="hero-modal-category">{selectedIcon.category}</span>
                  <h3 className="hero-modal-title">{selectedIcon.label}</h3>
                </div>
              </div>

              <p className="hero-modal-desc">{selectedIcon.description}</p>

              <div className="hero-modal-footer">
                <div className="hero-modal-stat">
                  <span className="stat-label">Proficiency Level</span>
                  <span className="stat-value">{selectedIcon.proficiency}</span>
                </div>
                <div className="hero-modal-action">
                  <span className="hero-pulse-dot" />
                  <span>Active Production Stack</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
