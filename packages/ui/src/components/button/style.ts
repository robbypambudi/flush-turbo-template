export const ButtonStyle = {
  base: [
    'inline-flex items-center justify-center rounded-md',
    'font-medium ring-offset-background transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    'focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  ],
  variants: {
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
  sizes: {
    sm: 'h-9 rounded-md px-2.5 text-sm',
    md: 'h-10 px-3 py-3',
    lg: 'h-11 rounded-md px-4 text-lg',
  },
  isLoading: {
    true: [
      'relative text-transparent transition-none hover:text-transparent cursor-wait disabled:cursor-disabled',
    ],
    false: [],
  },
};
