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
        cream: '#F5F3EE',
        gold: {
          DEFAULT: '#B8962E',
          dark: '#9A7E26',
          light: '#D4B04A',
          accessible: '#7A5C00', // WCAG AA on white and cream (#F5F3EE)
        },
        ink: '#1A1A1A',
        muted: '#6B6B6B',
        border: '#E5E0D5',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
