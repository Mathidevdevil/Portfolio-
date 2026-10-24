/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        action: {
          DEFAULT: 'var(--portfolio-accent-strong)',
          hover: 'var(--portfolio-action-hover)',
          pressed: 'var(--portfolio-action-pressed)',
        },
        link: 'var(--portfolio-accent)',
        portfolio: {
          background: 'var(--portfolio-bg)',
          alternate: 'var(--portfolio-bg-alt)',
          surface: 'var(--portfolio-surface)',
          border: 'var(--portfolio-border)',
          text: 'var(--portfolio-text)',
          muted: 'var(--portfolio-muted)',
          dim: 'var(--portfolio-dim)',
          focus: 'var(--portfolio-focus-ring)',
        },
      }
    },
  },
  plugins: [],
}
