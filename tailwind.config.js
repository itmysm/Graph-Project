/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    colors: {
      transparent: 'var(--color-transparent)',
      white: 'rgb(var(--color-white) / <alpha-value>)',
      black: 'rgb(var(--color-black) / <alpha-value>)',
      gray: 'rgb(var(--color-gray) / <alpha-value>)',
      'gray-text': 'rgb(var(--color-gray-text) / <alpha-value>)',
      yellow: 'rgb(var(--color-yellow) / <alpha-value>)',
      blue: 'rgb(var(--color-blue) / <alpha-value>)',
      indigo: 'rgb(var(--color-indigo) / <alpha-value>)',
      purple: 'rgb(var(--color-purple) / <alpha-value>)',
      green: 'rgb(var(--color-green) / <alpha-value>)',
      red: 'rgb(var(--color-red) / <alpha-value>)',
      teal: 'rgb(var(--color-teal) / <alpha-value>)',

      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      'primary-hover': 'rgb(var(--color-primary-hover) / <alpha-value>)',
      'primary-active': 'rgb(var(--color-primary-active) / <alpha-value>)',

      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      'secondary-hover': 'rgb(var(--color-secondary-hover) / <alpha-value>)',
      'secondary-active': 'rgb(var(--color-secondary-active) / <alpha-value>)',

      info: 'rgb(var(--color-info) / <alpha-value>)',
      'info-hover': 'rgb(var(--color-info-hover) / <alpha-value>)',
      'info-active': 'rgb(var(--color-info-active) / <alpha-value>)',

      error: 'rgb(var(--color-error) / <alpha-value>)',
      warning: 'rgb(var(--color-warning) / <alpha-value>)',
      success: 'rgb(var(--color-success) / <alpha-value>)',
    },

    extend: {
      boxShadow: {
        'light': '0px 0px 70px 2px rgba(255,255,255,0.08)',
      }
    },

    plugins: [],
  }
}
