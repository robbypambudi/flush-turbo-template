import { VariantProps, cva } from 'class-variance-authority';
import { ButtonStyle } from '.';
import { forwardRef } from 'react';
import { cn } from '../../types';

const textButtonVariants = cva(ButtonStyle.base, {
  variants: {
    variant: {
      primary: [
        'text-primary-500 hover:text-primary-600 active:text-primary-700',
        'focus-visible:ring-primary-400',
        'disabled:text-primary-400',
      ],
      secondary: [
        'text-secondary-500 hover:text-secondary-600 active:text-secondary-700',
        'focus-visible:ring-secondary-400',
        'disabled:text-secondary-400',
      ],
      warning: [
        'text-yellow-500 hover:text-yellow-600 active:text-yellow-700',
        'focus-visible:ring-yellow-400',
        'disabled:text-yellow-400',
      ],
      danger: [
        'text-red-500 hover:text-red-600 active:text-red-700',
        'focus-visible:ring-red-400',
        'disabled:text-red-400',
      ],
      outline: [
        'text-typo hover:text-light focus-visible:ring-primary-400',
        'disabled:text-typo-divider',
      ],
      ghost: [
        'text-primary-500 hover:text-primary-600 focus-visible:ring-primary-400',
        'disabled:text-primary-100',
      ],
    },
    size: ButtonStyle.sizes,
    isLoading: {
      true: 'cursor-wait disabled:cursor-disabled',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    isLoading: false,
  },
});

type TextButtonProps = {
  isLoading?: boolean;
  className?: string;
} & VariantProps<typeof textButtonVariants> &
  React.ComponentPropsWithRef<'button'>;

const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ isLoading, variant, size, className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          textButtonVariants({ variant, size, className, isLoading }),
        )}
        ref={ref}
        type='button'
        {...props}
      >
        {isLoading ? (
          <span className='animate-pulse'>Loading...</span>
        ) : (
          children
        )}
      </button>
    );
  },
);

export { TextButton };
export type { TextButtonProps };
