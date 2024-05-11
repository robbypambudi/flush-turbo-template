import { ArrowLink } from '@flush/ui/link';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Component/Link/Arrow',
  component: ArrowLink,
  argTypes: {
    children: {
      description:
        'Children components, usually text or an icon, that will be rendered inside the button',
      table: {
        defaultValue: { summary: 'Button' },
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
    href: {
      description: 'The URL that the hyperlink points to',
      table: {
        category: 'Link',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    direction: {
      description: 'The direction of the arrow',
      table: {
        category: 'Arrow',
        type: { summary: 'left | right' },
        defaultValue: { summary: 'right' },
      },
      control: 'select',
      options: ['left', 'right'],
    },
  },
} satisfies Meta<typeof ArrowLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Arrow: Story = {
  args: {
    children: 'Icon Button',
    className: '',
    href: '#',
    direction: 'right',
  },
} satisfies Story;
