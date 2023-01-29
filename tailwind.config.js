/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.Vue",
  ],
  theme: {
    colors: {
      transparent: 'var(--color-transparent)',
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      background: 'var(--color-background)',

      primary: 'var(--color-primary)',
      'primary-content': 'var(--color-primary-content)',
      'primary-active': 'var(--color-primary-active)',

      secondary: 'var(--color-secondary)',
      'secondary-content': 'var(--color-secondary-content)',
      'secondary-active': 'var(--color-secondary-active)',

      info: 'var(--color-info)',
      'info-content': 'var(--color-info-content)',
      'info-active': 'var(--color-info-active)',

      neutral: 'var(--color-neutral)',
      'neutral-content': 'var(--color-neutral-content)',
      'neutral-active': 'var(--color-neutral-active)',

      bermuda: 'var(--color-bermuda)',
      error: 'var(--color-error)',
      warning: 'var(--color-warning)',
    },
    extend: {},
  },
  plugins: [],
}