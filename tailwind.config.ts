// FILE: tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0C',
        panel: 'rgba(255, 255, 255, 0.04)',
        border: 'rgba(255, 255, 255, 0.08)',
        text: '#EDEDF1',
        muted: '#B5B6BD',
        accent: {
          DEFAULT: '#7C6BFF',
          hover: '#8F7FFF',
          light: '#9B8FFF',
        },
      },
      borderRadius: {
        card: '14px',
        pill: '9999px',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(0, 0, 0, 0.45)',
        glow: '0 0 20px rgba(124, 107, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #7C6BFF 0%, #5B8CFF 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(124, 107, 255, 0.1) 0%, rgba(91, 140, 255, 0.05) 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-sm': ['42px', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-lg': ['56px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2-sm': ['28px', { lineHeight: '1.2', fontWeight: '600' }],
        'h2-lg': ['36px', { lineHeight: '1.2', fontWeight: '600' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
