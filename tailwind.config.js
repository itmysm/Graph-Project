/* eslint-disable quotes */
// const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./pages/*.vue",
    "./plugins/**/*.{js,ts}"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      // colors: {
      //   green: colors.emerald,
      //   yellow: colors.amber,
      //   purple: colors.violet,
      // },
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
        secondary: "#10ff132c",
        accent: "#eaeaea",
        neutral: "#8a8c98",
        'neutral-content': "#ffcd72",
        info: "#3f8cff",
        success: "#ff754c",
        warning: "#fecd72",
        error: "#F87272"
      },

      dark: {
        'base-100': '#0f0f0f',
        'base-200': '#fff',
        'base-300': '#fff',
        primary: "#6c5dd3",
        'primary-focus': "#3f8cff",
        'primary-content': "#10ff132c",
        secondary: "#1f2128",
        accent: "#37CDBE",
        neutral: "#efefef",
        'neutral-content': "#ffcd72",
        info: "#3f8cff",
        'info-content': "#cfc8ff",
        success: "#ffcd72",
        warning: "#ffcd72",
        error: "#F87272"
      }
    }],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light"
  }
}
