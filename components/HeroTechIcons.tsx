//components/HeroTechIcons.tsx
'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

type TechIcon = {
  id: string;
  label: string;
  src: string;
  left: string;
  top: string;
  size: number;
  delay: number;
  rotate: number;
};

const ICONS: TechIcon[] = [
  // Left column (3 icons)
  { id: 'react',      label: 'React',      src: 'https://cdn.simpleicons.org/react/61DAFB',      left: '7%',  top: '28%', size: 62, delay: 0,    rotate: -8 },
  { id: 'python',     label: 'Python',     src: 'https://cdn.simpleicons.org/python/3776AB',     left: '5%',  top: '52%', size: 66, delay: 0.15, rotate: 6  },
  { id: 'docker',     label: 'Docker',     src: 'https://cdn.simpleicons.org/docker/2496ED',     left: '8%',  top: '76%', size: 60, delay: 0.3,  rotate: -4 },

  // Right column (3 icons — mirrored vertical positions)
  { id: 'typescript', label: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript/3178C6', left: '86%', top: '28%', size: 62, delay: 0.45, rotate: 10 },
  { id: 'node',       label: 'Node.js',    src: 'https://cdn.simpleicons.org/nodedotjs/5FA04E',  left: '88%', top: '52%', size: 66, delay: 0.6,  rotate: -6 },
  { id: 'kubernetes', label: 'Kubernetes', src: 'https://cdn.simpleicons.org/kubernetes/326CE5', left: '86%', top: '76%', size: 60, delay: 0.75, rotate: 8  },
];

export default function HeroTechIcons() {
  return (
    <div className="hero-tech-icons" aria-hidden="true">
      {ICONS.map((icon, i) => (
        <TechChip key={icon.id} icon={icon} index={i} />
      ))}
    </div>
  );
}

function TechChip({ icon, index }: { icon: TechIcon; index: number }) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="hero-tech-chip"
      style={{
        position: 'absolute',
        left: icon.left,
        top: icon.top,
        width: icon.size,
        height: icon.size,
        marginLeft: -icon.size / 2,
        marginTop: -icon.size / 2,
      }}
      initial={reduce ? false : { opacity: 0, scale: 0.5, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 240,
        damping: 20,
        delay: 0.6 + index * 0.08,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="hero-tech-chip-inner"
        animate={
          reduce
            ? undefined
            : {
                y: [-5, 5, -5],
                rotate: [icon.rotate - 4, icon.rotate + 4, icon.rotate - 4],
              }
        }
        transition={{
          duration: 6 + index * 0.4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.4,
        }}
      >
        <div className="hero-tech-chip-icon">
          <Image
            src={icon.src}
            alt=""
            width={icon.size}
            height={icon.size}
            draggable={false}
            unoptimized
          />
        </div>

        {/* Tooltip reveals on hover */}
        <motion.span
          className="hero-tech-chip-label"
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            y: hovered ? 0 : 4,
          }}
          transition={{ duration: 0.2 }}
        >
          {icon.label}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}