'use client';

import { VariantProps, cva } from 'class-variance-authority';
import { BaseLink } from './base-link';
import { forwardRef } from 'react';
// eslint-disable-next-line no-redeclare
import { LinkStyle } from './style';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

const buttonLinkVariants = cva(LinkStyle.base, {
  variants: {
    variant: LinkStyle.variants,
    size: LinkStyle.sizes,
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type ButtonLinkProps = {
  href: string;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  classNames: {
    leftIcon?: string;
    rightIcon?: string;
  };
  children: React.ReactNode;
} & VariantProps<typeof buttonLinkVariants> &
  React.ComponentPropsWithRef<'a'>;

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      href,
      children,
      variant,
      size = 'md',
      className,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      classNames,
      ...props
    },
    ref,
  ) => {
    return (
      <BaseLink
        ref={ref}
        href={href}
        className={buttonLinkVariants({
          variant,
          size,
          className,
        })}
        {...props}
      >
        {LeftIcon && (
          <div
            className={clsx([
              size === 'lg' && 'mr-3',
              size === 'md' && 'mr-2',
              size === 'sm' && 'mr-1.5',
            ])}
          >
            <LeftIcon
              className={clsx('text-base', classNames.leftIcon)}
              size={size === 'lg' ? '1.5em' : size === 'sm' ? '0.9em' : '1.2em'}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div
            className={clsx([
              size === 'lg' && 'ml-3',
              size === 'md' && 'ml-2',
              size === 'sm' && 'ml-1.5',
            ])}
          >
            <RightIcon
              className={clsx('text-base', classNames.rightIcon)}
              size='1em'
            />
          </div>
        )}
      </BaseLink>
    );
  },
);

export { ButtonLink, LinkStyle };
export type { ButtonLinkProps };
