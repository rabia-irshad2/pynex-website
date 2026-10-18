import Link from 'next/link';
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  target?: string;
  rel?: string;
  'aria-label'?: string;
  'aria-busy'?: boolean;
};

export default function AnimatedButton({
  children, href, variant = 'primary', className = '', onClick,
  type = 'button', disabled = false, target, rel, ...ariaProps
}: Props) {
  const classes = `animated-button btn btn-${variant} ${className}`.trim();
  const label = (
    <span className="animated-button-window">
      <span className="animated-button-track">
        <span className="animated-button-label">{children}</span>
        <span className="animated-button-label" aria-hidden="true">{children}</span>
      </span>
    </span>
  );

  if (href) {
    return <Link href={href} className={classes} onClick={onClick as MouseEventHandler<HTMLAnchorElement>} target={target} rel={rel} {...ariaProps}>{label}</Link>;
  }
  return <button type={type} className={classes} onClick={onClick as MouseEventHandler<HTMLButtonElement>} disabled={disabled} {...ariaProps}>{label}</button>;
}
