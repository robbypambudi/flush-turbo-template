import { VariantProps, cva } from 'class-variance-authority';
import { ButtonStyle, buttonVariants } from '.';
import { Loader2Icon, LucideIcon } from 'lucide-react';
import { forwardRef } from 'react';
import { cn } from '../../types';
import clsx from 'clsx';

const iconButtonVariants = cva(ButtonStyle.base, {
  variants: {
    variant: ButtonStyle.variants,
    size: ButtonStyle.sizes,
    isLoading: ButtonStyle.isLoading,
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    isLoading: false,
  },
});

type IconButtonProps = {
  isLoading?: boolean;
  icon: LucideIcon;
  iconClassName?: string;
  className: string;
} & VariantProps<typeof iconButtonVariants> &
  Omit<React.ComponentPropsWithRef<'button'>, 'children'>;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      isLoading,
      icon: Icon,
      iconClassName,
      className,
      variant,
      size,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className, isLoading }))}
        ref={ref}
        disabled={disabled}
        type='button'
        {...props}
      >
        {isLoading ? (
          <div
            className={clsx(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': [
                  'primary',
                  'secondary',
                  'warning',
                  'danger',
                ].includes(variant || 'primary'),
              },
              {
                'text-primary-500': ['outline', 'ghost'].includes(
                  variant as string,
                ),
              },
            )}
          >
            <Loader2Icon
              className='animate-spin'
              size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20}
            />
          </div>
        ) : null}
        {Icon ? (
          <Icon
            className={cn(iconClassName)}
            size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20}
          />
        ) : null}
      </button>
    );
  },
);

export { IconButton };
export type { IconButtonProps };
