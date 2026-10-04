// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#398DFF',
        'accent-cyan': '#63D9F2',
        'bg-dark': '#07111F',
        'main-text': '#F2F7FF',
        'secondary-text': '#AAB8CA',
        'soft-bg': '#0C1B2D',
      },
      fontFamily: {
        sans: ['"Geist Mono Variable"', '"Geist Mono"', 'monospace'],
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
      },
      backgroundImage: {
        'pynex-gradient': '#111F31',
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        'section-desktop': '96px',
        'section-phone': '64px',
      },
    },
  },
  plugins: [],
};

export default config;