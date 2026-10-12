import type { ReactNode } from 'react';

export default function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <article className={`pynex-card ${className}`.trim()}>{children}</article>;
}
