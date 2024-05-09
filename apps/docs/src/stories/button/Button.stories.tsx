import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonStyle } from '@flush/ui/button';
import { CheckCircle, RefreshCwIcon } from 'lucide-react';

type ButtonVariants = keyof typeof ButtonStyle.variants;
type ButtonSizes = keyof typeof ButtonStyle.sizes;
const variants = Object.keys(ButtonStyle.variants) as ButtonVariants[];
const sizes = Object.keys(ButtonStyle.sizes) as ButtonSizes[];

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    variant: {
      description: 'Defines the visual style of the button',
      table: {
        type: { summary: variants.join('|') },
        defaultValue: { summary: 'default' },
      },
      control: 'select',
      options: variants,
    },
    size: {
      description: 'Defines the size of the button',
      table: {
        type: { summary: sizes.join('|') },
        defaultValue: { summary: 'md' },
      },
      control: 'select',
      options: sizes,
    },
    children: {
      description:
        'Children components, usually text or an icon, that will be rendered inside the button',
      table: {
        defaultValue: { summary: 'Button' },
      },
    },
    leftIcon: {
      description: 'Icon to be rendered on the left side of the button',
      table: {
        category: 'Icon',
        type: { summary: 'LucideIcon' },
        defaultValue: { summary: 'Icon' },
      },
      control: 'select',
      options: ['None', 'CheckCircle', 'RefreshCwIcon'],
      mapping: {
        None: undefined,
        CheckCircle: CheckCircle,
        RefreshCwIcon: RefreshCwIcon,
      },
    },

    rightIcon: {
      description: 'Icon to be rendered on the right side of the button',
      table: {
        category: 'Icon',
        type: { summary: 'LucideIcon' },
        defaultValue: { summary: 'Icon' },
      },
      control: 'select',
      options: ['None', 'CheckCircle', 'RefreshCwIcon'],
      mapping: {
        None: undefined,
        CheckCircle: CheckCircle,
        RefreshCwIcon: RefreshCwIcon,
      },
    },

    className: {
      description: 'Override or extend the styles applied to the component',
      control: 'text',
      table: {
        category: 'Override/extend',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    classNames: {
      description: 'Override or extend the styles applied to the icons',
      table: {
        category: 'Override/extend',
        type: { summary: 'object' },
        defaultValue: {
          summary: '{ leftIcon: string, rightIcon: string }',
        },
      },
      control: 'object',
    },

    isLoading: {
      description: 'Defines if the button is in a loading state',
      table: {
        category: 'State',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    disabled: {
      description: 'Defines if the button is disabled',
      table: {
        category: 'State',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Icon Button',
    className: '',
    classNames: {
      leftIcon: '',
      rightIcon: '',
    },
    leftIcon: undefined,
    rightIcon: undefined,
    isLoading: false,
    disabled: false,
  },
  render: ({
    children,
    className,
    classNames,
    leftIcon,
    rightIcon,
    isLoading,
    disabled,
  }) => {
    return (
      <div className='layout my-8'>
        {variants.map((variant) => (
          <div className='flex items-baseline space-x-2' key={variant}>
            <div className='w-[100px] text-sm text-slate-500'>{variant}</div>
            <div className='mb-4 flex items-center space-x-2'>
              <Button
                variant={variant}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                size='sm'
                className={className}
                classNames={classNames}
                isLoading={isLoading}
                disabled={disabled}
              >
                {children}
              </Button>
              <Button
                variant={variant}
                className={className}
                classNames={classNames}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                isLoading={isLoading}
                disabled={disabled}
              >
                {children} - MD
              </Button>
              <Button
                variant={variant}
                size='lg'
                className={className}
                classNames={classNames}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                isLoading={isLoading}
                disabled={disabled}
              >
                {children} - LG
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
