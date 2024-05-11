import { ButtonLink, LinkStyle } from '@flush/ui/link';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckCircle, RefreshCwIcon } from 'lucide-react';

type ButtonLinkVariants = keyof typeof LinkStyle.variants;
type ButtonLinkSizes = keyof typeof LinkStyle.sizes;
const variants = Object.keys(LinkStyle.variants) as ButtonLinkVariants[];
const sizes = Object.keys(LinkStyle.sizes) as ButtonLinkSizes[];

const meta = {
  title: 'Component/Link/Default',
  component: ButtonLink,
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

    href: {
      description: 'The URL that the hyperlink points to',
      table: {
        category: 'Link',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
} satisfies Meta<typeof ButtonLink>;

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
    href: '#',
    leftIcon: undefined,
    rightIcon: undefined,
  },
  render: ({ children, className, classNames, leftIcon, rightIcon, href }) => {
    return (
      <div className='layout my-8'>
        {variants.map((variant) => (
          <div className='flex items-baseline space-x-2' key={variant}>
            <div className='w-[100px] text-sm text-slate-500'>{variant}</div>
            <div className='mb-4 flex items-center space-x-2'>
              <ButtonLink
                href={href}
                variant={variant}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                size='sm'
                className={className}
                classNames={classNames}
              >
                {children}
              </ButtonLink>
              <ButtonLink
                href={href}
                variant={variant}
                className={className}
                classNames={classNames}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
              >
                {children} - MD
              </ButtonLink>
              <ButtonLink
                href={href}
                variant={variant}
                size='lg'
                className={className}
                classNames={classNames}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
              >
                {children} - LG
              </ButtonLink>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
