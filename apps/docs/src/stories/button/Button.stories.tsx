import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonStyle } from '@flush/ui/button';

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
      // table: {
      //   defaultValue: {  },
      // },
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
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'My button',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    ...Primary.args,
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    ...Primary.args,
    variant: 'ghost',
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'lg',
  },
};

export const Medium: Story = {
  args: {
    ...Primary.args,
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'sm',
  },
};

export const All: Story = {
  render: () => {
    return (
      <>
        {variants.map((variant) => (
          <div className='flex items-baseline space-x-2' key={variant}>
            <div className='w-[100px] text-sm text-slate-500'>{variant}</div>
            <div className='mb-4 flex items-center space-x-2'>
              {sizes.map((size) => (
                <Button
                  variant={variant}
                  size={size}
                  key={`${variant}-${size}`}
                >
                  {variant} {size}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  },
};
