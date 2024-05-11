import { UnderlineLink } from '@flush/ui/link';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Component/Link/Underline',
  component: UnderlineLink,
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
  },
} satisfies Meta<typeof UnderlineLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Underline: Story = {
  args: {
    children: 'Icon Button',
    className: '',
    href: '#',
  },
} satisfies Story;
