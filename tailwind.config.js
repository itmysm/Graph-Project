/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/**/**/*.{vue,js,ts,jsx,tsx}",
    
  ],
  theme: {
    colors: {
      transparent: 'var(--color-transparent)',
      white: 'rgb(var(--color-white) / <alpha-value>)',
      black: 'rgb(var(--color-black) / <alpha-value>)',
      background: 'rgb(var(--color-background) / <alpha-value>)',
      def: 'rgb(var(--color-def) / <alpha-value>)',
      main: 'rgb(var(--color-main) / <alpha-value>)',

      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      'primary-content': 'rgb(var(--color-primary-content) / <alpha-value>)',
      'primary-active': 'rgb(var(--color-primary-active) / <alpha-value>)',

      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      'secondary-content': 'rgb(var(--color-secondary-content) / <alpha-value>)var(--color-secondary-content)',
      'secondary-active': 'rgb(var(--color-secondary-active) / <alpha-value>)',

      info: 'rgb(var(--color-info) / <alpha-value>)',
      'info-content': 'rgb(var(--color-info-content) / <alpha-value>)',
      'info-active': 'rgb(var(--color-info-active) / <alpha-value>)',

      neutral: 'rgb(var(--color-neutral) / <alpha-value>)',
      'neutral-content': 'rgb(var(--color-neutral-content) / <alpha-value>)',
      'neutral-active': 'rgb(var(--color-neutral-active) / <alpha-value>)',

      bermuda: 'rgb(var(--color-bermuda) / <alpha-value>)',
      error: 'rgb(var(--color-error) / <alpha-value>)',
      warning: 'rgb(var(--color-warning) / <alpha-value>)',
    },
    extend: {},
  },
  plugins: [],
}