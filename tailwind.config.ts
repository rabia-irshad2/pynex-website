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
        'primary-blue': '#0B1F44',
        'accent-cyan': '#00C6FF',
        'bg-dark': '#0B1F44',
        'main-text': '#ffffff',
        'secondary-text': '#5B6577',
        'soft-bg': '#0B1F44',
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'Arial', 'sans-serif'],
        display: ['var(--font-bebas-neue)', 'Impact', 'sans-serif'],
      },
      backgroundImage: {
        'pynex-gradient': 'linear-gradient(135deg, #00C6FF, #0B1F44)',
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
