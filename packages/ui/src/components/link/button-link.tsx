'use client';

import { VariantProps, cva } from 'class-variance-authority';
import { BaseLink } from './base-link';
import { forwardRef } from 'react';

const buttonLinkVariants = cva(
  [
    'inline-flex items-center justify-center rounded-lg font-medium',
    'focus:outline-none focus-visible:ring',
    'shadow-sm',
    'disabled:pointer-events-none disabled:opacity-50',
    'transition-colors duration-100',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-500 text-white hover:bg-primary-600',
          'active:bg-primary-700',
          'focus-visible:ring-primary-400',
          'border border-primary-600',
          'disabled:bg-primary-400',
        ],
        secondary: [
          'bg-secondary-500 text-white hover:bg-secondary-600',
          'active:bg-secondary-700',
          'focus-visible:ring-secondary-400',
          'border border-secondary-600',
          'disabled:bg-secondary-400',
        ],
        outline: [
          'text-typo',
          'border border-gray-300',
          'active:bg-typo-divider disabled:bg-typo-divider',
          'hover:bg-light focus-visible:ring-primary-400',
        ],
        ghost: [
          'text-primary-500',
          'shadow-none',
          'hover:bg-primary-50 focus-visible:ring-primary-400',
          'active:bg-primary-100 disabled:bg-primary-100',
        ],
      },
      size: {
        lg: ['min-h-[3rem] px-3.5 md:min-h-[2.75rem] md:px-3', 'text-base'],
        md: [
          'min-h-[2.5rem] px-3 md:min-h-[2.25rem] md:px-2.5',
          'md:text-base sm:text-sm',
        ],
        sm: [
          'min-h-[2rem] px-2 md:min-h-[1.75rem] md:px-1.5',
          'md:text-sm text-xs',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
} & VariantProps<typeof buttonLinkVariants> &
  React.ComponentPropsWithRef<'a'>;

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ href, children, variant, size, className, ...props }, ref) => {
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
        {children}
      </BaseLink>
    );
  },
);

export { ButtonLink };
