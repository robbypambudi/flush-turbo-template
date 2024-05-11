'use client';

import { VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { BaseLink, BaseLinkProps } from './base-link';
// eslint-disable-next-line no-redeclare
import { LinkStyle } from './style';
import { cn } from '../../types';

const textLinkVariants = cva(LinkStyle.base, {
  variants: {
    variant: {
      primary: [
        'text-primary-500 hover:text-primary-600 active:text-primary-700',
        'focus-visible:ring-primary-400',
        '!shadow-none',
      ],
      secondary: [
        'text-secondary-500 hover:text-secondary-600 active:text-secondary-700',
        'focus-visible:ring-secondary-400',
        '!shadow-none',
      ],
      danger: [
        'text-red-500 hover:text-red-600 active:text-red-700',
        'focus-visible:ring-red-400',
        '!shadow-none',
      ],
      warning: [
        'text-amber-500 hover:text-amber-600 active:text-amber-700',
        'focus-visible:ring-amber-400',
        '!shadow-none',
      ],
    },
    size: LinkStyle.sizes,
  },
  defaultVariants: { variant: 'primary', size: 'md' },
});

type TextLinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
} & VariantProps<typeof textLinkVariants> &
  BaseLinkProps;

const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ children, className, href, variant = 'primary', ...props }) => {
    return (
      <BaseLink
        className={cn(textLinkVariants({ variant, className }))}
        href={href}
        {...props}
      >
        {children}
      </BaseLink>
    );
  },
);

export { TextLink };
export type { TextLinkProps };
