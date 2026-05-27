import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces & backgrounds
        cream: '#F7F5F2',
        'card-hover': '#F0EDE8',
        sidebar: '#F0EDE8',
        // Gold accent — primary brand color
        gold: {
          DEFAULT: '#C9A84C',
          hover: '#B8962E',
          dark: '#B8962E',       // backward-compat alias
          pressed: '#9E7E22',
          light: '#FBF5E6',
          accessible: '#8A6A1E', // WCAG AA on cream and white
        },
        // Text colors
        ink: '#1E1D1B',
        secondary: '#6B6560',
        muted: '#6B6560',
        faint: '#A09890',
        disabled: '#BFB8B0',
        // Borders
        border: {
          DEFAULT: '#E5E0D5',
          subtle: '#CCC5B5',
        },
        // Semantic
        success: {
          DEFAULT: '#2D6A4F',
          subtle: '#EEF6F1',
        },
        error: {
          DEFAULT: '#B03A2E',
          subtle: '#FDECEA',
        },
        warning: {
          DEFAULT: '#9E6722',
          subtle: '#FEF6E7',
        },
      },
      fontFamily: {
        sans:  ['var(--font-sans)',  'system-ui', 'sans-serif'],
        mono:  ['var(--font-mono)',  'ui-monospace', 'monospace'],
        // Alias serif → sans so existing font-serif classes render Geist Sans
        serif: ['var(--font-sans)',  'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card:  '16px',
        btn:   '12px',
        input: '12px',
      },
      boxShadow: {
        card:       '0 1px 3px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08)',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        brand: '150ms',
      },
    },
  },
  plugins: [],
}

export default config
