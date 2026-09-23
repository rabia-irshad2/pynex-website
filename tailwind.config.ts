import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0057FF',
        'accent-cyan': '#00C6FF',
        'bg-dark': '#000000',
        'main-text': '#0B1F44',
        'secondary-text': '#5B6577',
        'soft-bg': '#F6F9FF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'pynex-gradient': 'linear-gradient(135deg, #00C6FF, #0057FF)',
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
