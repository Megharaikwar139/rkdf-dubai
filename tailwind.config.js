/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--color-canvas)',
        cloud: 'var(--color-cloud)',
        sand: 'var(--color-sand)',
        apricot: 'var(--color-apricot)',
        sky: 'var(--color-sky)',
        mint: 'var(--color-mint)',
        ink: 'var(--color-ink)',
        'ink-55': 'var(--color-ink-55)',
        terracotta: 'var(--color-terracotta)',
        focus: 'var(--color-focus)',
      },
      borderRadius: {
        'pill': '999px',
        'card': '28px',
        'tile': '20px',
        'input': '14px',
        'mask': '32px',
        'arch': '999px 999px 28px 28px',
        'arch-sm': '999px 999px 16px 16px',
        'arch-lg': '999px 999px 36px 36px',
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(80, 60, 40, 0.05)',
        'md': '0 12px 32px rgba(80, 60, 40, 0.07)',
        'lg': '0 32px 64px rgba(80, 60, 40, 0.09)',
        'dock': '0 16px 40px rgba(80, 60, 40, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
      },
      fontFamily: {
        sans: ['"Outfit"', '"General Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        arabic: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
      }
    },
  },
  plugins: [],
}
