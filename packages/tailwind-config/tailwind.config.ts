import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/stories/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
        averta: ['AvertaStd', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#DDDEF9',
          //* Background
          100: '#C6C7F5',
          200: '#A9ABF0',
          //* Complement
          300: '#8C90EC',
          400: '#7074E7',
          //* Default
          500: '#5358E2',
          //* Hovered
          600: '#4549BC',
          //* Active
          700: '#373B97',
          800: '#2A2C71',
          900: '#1C1D4B',
        },
        secondary: {
          50: '#E0F7F6',
          //* Background
          100: '#CBF1F0',
          200: '#B1EAE8',
          //* Complement
          300: '#98E4E1',
          400: '#7EDDD9',
          //* Default
          500: '#64D6D2',
          //* Hovered
          600: '#53B2AF',
          //* Active
          700: '#438F8C',
          800: '#326B69',
          900: '#214746',
        },
        base: {
          50: '#DDECF9',
          //* Background
          100: '#C6DFF5',
          200: '#A9CFF0',
          //* Complement
          300: '#8CBFEC',
          400: '#70AFE7',
          //* Default
          500: '#539FE2',
          //* Hovered
          600: '#4584BC',
          //* Active
          700: '#376A97',
          800: '#2A5071',
          900: '#1C354B',
        },
        typo: {
          DEFAULT: '#1F1F1F',
          secondary: '#707070',
          tertiary: '#999CA0',
          icons: '#999CA0',
          divider: '#EBEBEB',
          outline: '#D9D9D9',
        },
        dark: '#222222',
        light: '#F5F5F5',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
