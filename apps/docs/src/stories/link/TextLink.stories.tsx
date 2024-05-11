import { TextLink } from '@flush/ui/link';
import { type ExtractProps } from '@flush/ui/types';

import type { Meta, StoryObj } from '@storybook/react';

type TextButtonLinkVariants = ExtractProps<typeof TextLink>['variant'];
type TextButtonLinkSizes = ExtractProps<typeof TextLink>['size'];
const variants = [
  'primary',
  'secondary',
  'danger',
  'warning',
] as TextButtonLinkVariants[];
const sizes = ['sm', 'md', 'lg'] as TextButtonLinkSizes[];

const meta = {
  title: 'Component/Link/Text',
  component: TextLink,
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
} satisfies Meta<typeof TextLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    variant: 'primary',
    children: 'Icon Button',
    className: '',

    href: '#',
  },
  render: ({ children, className, href }) => {
    return (
      <div className='layout my-8'>
        {variants.map((variant) => (
          <div className='flex items-baseline space-x-2' key={variant}>
            <div className='w-[100px] text-sm text-slate-500'>{variant}</div>
            <div className='mb-4 flex items-center space-x-2'>
              <TextLink
                href={href}
                variant={variant}
                size='sm'
                className={className}
              >
                {children}
              </TextLink>
              <TextLink href={href} variant={variant}>
                {children} - MD
              </TextLink>
              <TextLink
                href={href}
                variant={variant}
                size='lg'
                className={className}
              >
                {children} - LG
              </TextLink>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
