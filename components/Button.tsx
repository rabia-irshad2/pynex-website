import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import AnimatedButton from '@/components/AnimatedButton';

export function ButtonLabel({ children }: { children: ReactNode }) {
  return (
    <span className="animated-button-window">
      <span className="animated-button-track">
        <span className="animated-button-label">{children}</span>
        <span className="animated-button-label" aria-hidden="true">{children}</span>
      </span>
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

  return <AnimatedButton href={href} className={classes} variant={variant} type={type} onClick={onClick} disabled={disabled} target={target} rel={rel} {...accessibilityProps}>{children}</AnimatedButton>;
}
