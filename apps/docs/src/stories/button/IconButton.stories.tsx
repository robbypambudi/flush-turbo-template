import type { Meta, StoryObj } from '@storybook/react';
import { ButtonStyle, IconButton } from '@flush/ui/button';
import { CheckCircle } from 'lucide-react';

type ButtonVariants = keyof typeof ButtonStyle.variants;
type ButtonSizes = keyof typeof ButtonStyle.sizes;
const variants = Object.keys(ButtonStyle.variants) as ButtonVariants[];
const sizes = Object.keys(ButtonStyle.sizes) as ButtonSizes[];

const meta = {
  title: 'Component/Icon Button',
  component: IconButton,
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
    icon: {
      description: 'Icon to be rendered inside the button',
      table: {
        category: 'Icon',
        type: { summary: 'LucideIcon' },
        defaultValue: { summary: 'Icon' },
      },
      control: 'select',
      options: ['NULL', 'CheckCircle'],
      mapping: {
        NULL: undefined,
        CheckCircle: CheckCircle,
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
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
    icon: CheckCircle,
    isLoading: false,
    disabled: false,
  },
  render: ({ className, icon: Icon, isLoading, disabled }) => {
    return (
      <div className='layout my-8'>
        {variants.map((variant) => (
          <div className='flex items-baseline space-x-2' key={variant}>
            <div className='w-[100px] text-sm text-slate-500'>{variant}</div>
            <div className='mb-4 flex items-center space-x-2'>
              <IconButton
                variant={variant}
                size='sm'
                icon={Icon}
                className={className}
                isLoading={isLoading}
                disabled={disabled}
              />
              <IconButton
                icon={Icon}
                variant={variant}
                className={className}
                isLoading={isLoading}
                disabled={disabled}
              />
              <IconButton
                icon={Icon}
                variant={variant}
                size='lg'
                className={className}
                isLoading={isLoading}
                disabled={disabled}
              />
            </div>
          </div>
        ))}
      </div>
    );
  },
};
