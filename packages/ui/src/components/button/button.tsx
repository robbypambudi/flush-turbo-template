'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { LucideIcon, RefreshCwIcon } from 'lucide-react';
import { cn } from '../../types/helper';
import { ButtonStyle } from './style';

const buttonVariants = cva(ButtonStyle.base, {
  variants: {
    variant: ButtonStyle.variants,
    size: ButtonStyle.sizes,
    isLoading: ButtonStyle.isLoading,
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

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
      size = 'md',
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
          buttonVariants({ variant, size, className, isLoading }),
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
              size === 'lg' && 'mr-2.5',
              size === 'md' && 'mr-2',
              size === 'sm' && 'mr-1.5',
            ])}
          >
            <LeftIcon
              className={cn(
                [
                  size === 'lg' && 'md:text-xl text-lg',
                  size === 'md' && 'md:text-lg text-md',
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
              size === 'lg' && 'ml-2.5',
              size === 'md' && 'ml-2',
              size === 'sm' && 'ml-1.5',
            ])}
          >
            <RightIcon
              className={cn(
                [
                  size === 'lg' && 'md:text-xl text-lg',
                  size === 'md' && 'md:text-lg text-md',
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

export { Button, buttonVariants, ButtonStyle };
