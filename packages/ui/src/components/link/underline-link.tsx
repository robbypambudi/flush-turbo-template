'use client';

import { forwardRef } from 'react';
import { BaseLink, BaseLinkProps } from './base-link';
import { cn } from '../../types';

const UnderlineLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <BaseLink
        ref={ref}
        {...rest}
        className={cn(
          'animated-underline custom-link inline-flex items-center font-medium',
          'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          'border-b border-dotted border-dark hover:border-black/0',
          className,
        )}
      >
        {children}
      </BaseLink>
    );
  },
);

export { UnderlineLink };
export type { BaseLinkProps };
