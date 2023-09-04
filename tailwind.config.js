const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'Inter'],
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
  },
  darkMode: "class",
  plugins: [nextui({
    layout: {
      disabledOpacity: "0.3", // opacity-[0.3]
    },
    themes: {
      light: {
        colors: {
          transparent: 'var(--color-transparent)',
          white: '#FFFFFF', // Converted from rgb(255, 255, 255)
          black: '#000000', // Converted from rgb(0, 0, 0)
          gray: '#808080', // Converted from rgb(128, 128, 128)
          'gray-text': '#676D7E', // Converted from rgb(103, 109, 126)
          yellow: '#FBBF24', // Converted from rgb(251, 191, 36)
          blue: '#3B82F6', // Converted from rgb(59, 130, 246)
          indigo: '#6366F1', // Converted from rgb(99, 102, 241)
          purple: '#8B5CF6', // Converted from rgb(139, 92, 246)
          green: '#10B981', // Converted from rgb(16, 185, 129)
          red: '#EF4444', // Converted from rgb(239, 68, 68)
          teal: '#4EA286', // Converted from rgb(78, 162, 134)
          primary: '#16181D', // Converted from rgb(22, 24, 29)
          'primary-hover': '#22242A', // Converted from rgb(34, 36, 42)
          'primary-active': '#45494E', // Converted from rgb(69, 73, 84)
          secondary: '#FCFCFD', // Converted from rgb(252, 252, 253)
          'secondary-hover': '#EDEFF2', // Converted from rgb(237, 239, 242)
          'secondary-active': '#EBEBF0', // Converted from rgb(235, 235, 240)
          info: '#918CF2', // Converted from rgb(145, 140, 242)
          'info-hover': '#00BDFE', // Converted from rgb(0, 189, 254)
          'info-active': '#918CED', // Converted from rgb(145, 140, 237)
          error: '#EF4444', // Converted from rgb(239, 68, 68)
          warning: '#FDE047', // Converted from rgb(253, 224, 71)
          success: '#10B981', // Converted from rgb(16, 185, 129)
        },
      },
      dark: {
        colors: {
          transparent: 'var(--color-transparent)',
          white: '#FFFFFF', // Converted from rgb(255, 255, 255)
          black: '#312323', // Converted from rgb(49, 35, 35)
          gray: '#808080', // Converted from rgb(128, 128, 128)
          'gray-text': '#A3A2AB', // Converted from rgb(163, 162, 171)
          yellow: '#EDF593', // Converted from rgb(237, 245, 147)
          blue: '#3B82F6', // Converted from rgb(59, 130, 246)
          indigo: '#6366F1', // Converted from rgb(99, 102, 241)
          purple: '#8B5CF6', // Converted from rgb(139, 92, 246)
          green: '#10B981', // Converted from rgb(16, 185, 129)
          red: '#EF4444', // Converted from rgb(239, 68, 68)
          teal: '#61D1AC', // Converted from rgb(97, 209, 172)
          primary: '#E3E4E8', // Converted from rgb(227, 228, 232)
          'primary-hover': '#FFFFFF', // Converted from rgb(255, 255, 255)
          'primary-active': '#A1A4AA', // Converted from rgb(161, 164, 170)
          secondary: '#0E1015', // Converted from rgb(14, 16, 21)
          'secondary-hover': '#14171F', // Converted from rgb(20, 23, 31)
          'secondary-active': '#171A22', // Converted from rgb(23, 26, 34)
          info: '#918CF2', // Converted from rgb(145, 140, 242)
          'info-hover': '#00BDFE', // Converted from rgb(0, 189, 254)
          'info-active': '#918CED', // Converted from rgb(145, 140, 237)
          error: '#EF4444', // Converted from rgb(239, 68, 68)
          warning: '#FDE047', // Converted from rgb(253, 224, 71)
          success: '#10B981', // Converted from rgb(16, 185, 129)
        },
      },
    },
  }),
  ],
}