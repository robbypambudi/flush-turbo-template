'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@sppn/shared/lib';
import { forwardRef } from 'react';
import { LucideIcon, RefreshCwIcon } from 'lucide-react';

const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center rounded-md',
    'font-medium ring-offset-background transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    'focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  ),
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-500 text-white hover:bg-primary-600',
          'border border-primary-600',
          'active:bg-primary-700 active:border-primary-700',
          'focus-visible:ring-primary-400 focus-visible:border-primary-700',
          'disabled:bg-primary-400 disabled:border-primary-400',
        ],
        secondary: [
          'bg-secondary-600 text-white hover:bg-secondary-700',
          'border border-secondary-700',
          'active:bg-secondary-800 active:border-secondary-800',
          'focus-visible:ring-secondary-400 focus-visible:border-secondary-800',
          'disabled:bg-secondary-400 disabled:border-secondary-400',
        ],
        warning: [
          'bg-yellow-600 text-white hover:bg-yellow-700',
          'border border-yellow-700',
          'active:bg-yellow-800 active:border-yellow-800',
          'focus-visible:ring-yellow-400 focus-visible:border-yellow-800',
          'disabled:bg-yellow-400 disabled:border-yelllow-400',
        ],
        danger: [
          'bg-red-500 text-white hover:bg-red-600',
          'border border-red-600',
          'active:bg-red-700 active:border-red-700',
          'focus-visible:ring-red-400 focus-visible:border-red-700',
          'disabled:bg-red-400 disabled:border-red-400',
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
        base: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 text-sm',
        lg: 'h-11 rounded-md px-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base',
    },
  },
);

export type ButtonProps = {
  isLoading?: boolean;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  classNames?: {
    leftIcon?: string;
    rightIcon?: string;
  };
} & VariantProps<typeof buttonVariants> &
  React.ComponentPropsWithRef<'button'>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'base',
      isLoading,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      className,
      classNames,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn([
          buttonVariants({ variant, size, className }),
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
        ])}
        ref={ref}
        type='button'
        {...props}
      >
        {isLoading ? (
          <div
            className={cn(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': [
                  'primary',
                  'secondary',
                  'danger',
                  'warning',
                ].includes(variant || 'primary'),
                'text-primary-500': ['outline', 'ghost'].includes(
                  variant as string,
                ),
              },
            )}
          >
            <RefreshCwIcon className='animate-spin' />
          </div>
        ) : null}
        {LeftIcon ? (
          <div
            className={cn([
              size === 'lg' && 'mr-1',
              size === 'base' && 'mr-1',
              size === 'sm' && 'mr-1.5',
            ])}
          >
            <LeftIcon
              className={cn(
                [
                  size === 'base' && 'md:text-lg text-md',
                  size === 'sm' && 'md:text-md text-sm',
                ],
                classNames?.leftIcon,
              )}
              size='1em'
            />
          </div>
        ) : null}
        {children}
        {RightIcon ? (
          <div
            className={cn([
              size === 'lg' && 'ml-1',
              size === 'base' && 'ml-1',
              size === 'sm' && 'ml-1.5',
            ])}
          >
            <RightIcon
              className={cn(
                [
                  size === 'base' && 'text-md md:text-md',
                  size === 'sm' && 'md:text-md text-sm',
                ],
                classNames?.rightIcon,
              )}
              size='1em'
            />
          </div>
        ) : null}
      </button>
    );
  },
);

export default Button;
