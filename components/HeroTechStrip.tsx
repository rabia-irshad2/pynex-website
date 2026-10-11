//components/HeroTechStrip.tsx
'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const TECH = [
  { id: 'react',      label: 'React',      src: 'https://cdn.simpleicons.org/react/61DAFB' },
  { id: 'typescript', label: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { id: 'node',       label: 'Node.js',    src: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
  { id: 'python',     label: 'Python',     src: 'https://cdn.simpleicons.org/python/3776AB' },
  { id: 'docker',     label: 'Docker',     src: 'https://cdn.simpleicons.org/docker/2496ED' },
  { id: 'kubernetes', label: 'Kubernetes', src: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
];

export default function HeroTechStrip() {
  const reduce = useReducedMotion();

  return (
    <div className="hero-tech-strip" aria-label="Technologies we work with">
      <p className="hero-tech-strip-label">Built with modern technology</p>

      <div className="hero-tech-strip-row">
        {TECH.map((tech, i) => (
          <motion.div
            key={tech.id}
            className="hero-tech-strip-item"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.9 + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={tech.src}
              alt={tech.label}
              width={40}
              height={40}
              draggable={false}
              unoptimized
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}