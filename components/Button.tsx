import Link from 'next/link';
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

export function ButtonLabel({ children }: { children: ReactNode }) {
  return (
    <span className="btn-swap">
      <span className="btn-swap-front">{children}</span>
      <span className="btn-swap-back" aria-hidden="true">{children}</span>
    </span>
  );
}

type CommonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'large' | 'small';
  className?: string;
  'aria-busy'?: boolean;
  'aria-label'?: string;
  target?: string;
  rel?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  type?: never;
  disabled?: never;
};

type NativeButtonProps = CommonProps & {
  href?: undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
};

type ButtonProps = LinkButtonProps | NativeButtonProps;

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  target,
  rel,
  ...accessibilityProps
}: ButtonProps) {
  const classes = [
    'btn',
    `btn-${variant}`,
    size === 'large' ? 'btn-large' : '',
    size === 'small' ? 'btn-small' : '',
    className,
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick as MouseEventHandler<HTMLAnchorElement>} target={target} rel={rel} {...accessibilityProps}>
        <ButtonLabel>{children}</ButtonLabel>
      </Link>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick as MouseEventHandler<HTMLButtonElement>} disabled={disabled} {...accessibilityProps}>
      <ButtonLabel>{children}</ButtonLabel>
    </button>
  );
}