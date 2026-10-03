//app/components/Button.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
};

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'default',
}: ButtonProps) {
  const className = [
    variant === 'primary' ? 'btn-primary' : 'btn-secondary',
    size === 'large' ? 'btn-large' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Link href={href} className={className}>
      <span className="btn-label">{children}</span>
      <span className="arrow-swap" aria-hidden="true">
        <span className="arrow-disc arrow-disc-front">
          <ArrowRight size={14} />
        </span>
        <span className="arrow-disc arrow-disc-back">
          <ArrowRight size={14} />
        </span>
      </span>
    </Link>
  );
}