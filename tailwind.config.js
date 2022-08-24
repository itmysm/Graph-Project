/* eslint-disable quotes */
// const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/components/**/*.{vue,js}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/pages/*.vue",
    "./src/plugins/**/*.{js,ts}"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 2s linear infinite',
        alertCame: 'alertCame 1s ease-out both',
        alertOut: 'alertOut .5s ease-in both'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' }
        },
        alertCame: {
          '0%': { transform: 'translate(500px)' },
          '90%': { transform: 'translate(-10px)' },
          '100%': { transform: 'translate(0px)' }
        },
        alertOut: {
          '0%': { transform: 'translate(0px)' },
          '10%': { transform: 'translate(-10px)' },
          '100%': { transform: 'translate(500px)' }
        }
      }
    },

    fontFamily: {
      sans: ["Inter", 'Work Sans'],
      serif: ['Inter', 'Work Sans']
    }
  },
  plugins: [require('daisyui')],
  variants: {
    extend: {}
  },

  daisyui: {
    styled: true,
    themes: [{
      light: {
        'base-100': '#fff',
        'base-200': '#6c5dd3',
        'base-300': '#3f8cff',
        primary: "#6c5dd3",
        'primary-focus': "#3f8cff",
        'primary-content': "#6c5dd3",
        secondary: "#11142d",
        accent: "#eaeaea",
        neutral: "#6c6d80",
        'neutral-content': "#ffcd72",
        info: "#3f8cff",
        success: "#ff754c",
        warning: "#fecd72",
        error: "#F87272"
      },

      darkness: {
        'base-100': '#1f2128',
        'base-200': '#fff',
        'base-300': '#fff',
        primary: "#6c5dd3",
        'primary-focus': "#3f8cff",
        'primary-content': "#10132c",
        secondary: "#1f2128",
        accent: "#33343b",
        neutral: "#87888c",
        'neutral-content': "#ffcd72",
        info: "#cfc8ff",
        'info-content': "#000",
        success: "#ffcd72",
        warning: "#ffcd72",
        error: "#F87272"
      }
    }],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: ""
  }
}
