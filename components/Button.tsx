import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export default function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return (
    <Link href={href} className={className}>
      {children}
      <span className="arrow inline-flex items-center justify-center rounded-full bg-white/20 p-1">
        <ArrowRight size={14} />
      </span>
    </Link>
  );
}
