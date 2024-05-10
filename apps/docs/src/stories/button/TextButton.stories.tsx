import type { Meta, StoryObj } from '@storybook/react';
import { ButtonStyle, TextButton } from '@flush/ui/button';

type ButtonVariants = keyof typeof ButtonStyle.variants;
type ButtonSizes = keyof typeof ButtonStyle.sizes;
const variants = Object.keys(ButtonStyle.variants) as ButtonVariants[];
const sizes = Object.keys(ButtonStyle.sizes) as ButtonSizes[];

const meta = {
  title: 'Component/Button/Text',
  component: TextButton,
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
} satisfies Meta<typeof TextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    className: '',
    isLoading: false,
    disabled: false,
    children: 'Text Button',
  },
  render: ({ className, isLoading, disabled, children }) => {
    return (
      <div className='layout my-8'>
        {variants.map((variant) => (
          <div className='flex items-baseline space-x-2' key={variant}>
            <div className='w-[100px] text-sm text-slate-500'>{variant}</div>
            <div className='mb-4 flex items-center space-x-2'>
              <TextButton
                variant={variant}
                size='sm'
                className={className}
                isLoading={isLoading}
                disabled={disabled}
              >
                {children}
              </TextButton>
              <TextButton
                variant={variant}
                className={className}
                isLoading={isLoading}
                disabled={disabled}
              >
                {children}
              </TextButton>
              <TextButton
                variant={variant}
                size='lg'
                className={className}
                isLoading={isLoading}
                disabled={disabled}
              >
                {children}
              </TextButton>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
