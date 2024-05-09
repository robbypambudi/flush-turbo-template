'use client';

import Link from 'next/link';
import { forwardRef } from 'react';

type BaseLinkProps = {
  href: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
  className?: string;
} & React.ComponentPropsWithRef<'a'>;

const BaseLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(
  ({ href, children, openInNewTab, className, ...props }, ref) => {
    const isNewTab =
      openInNewTab !== undefined
        ? openInNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');
    if (!isNewTab) {
      return (
        <Link href={href} ref={ref} className={className} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
);

export { BaseLink };
export type { BaseLinkProps };
