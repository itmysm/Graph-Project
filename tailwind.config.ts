import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "var(--color-transparent)",
      gray: "rgb(var(--color-gray) / <alpha-value>)",
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      info: "rgb(var(--color-info) / <alpha-value>)",
      error: "rgb(var(--color-error) / <alpha-value>)",
      warning: "rgb(var(--color-warning) / <alpha-value>)",
      success: "rgb(var(--color-success) / <alpha-value>)",
      contrast: "rgb(var(--color-contrast) / <alpha-value>)",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            gray: "rgb(var(--color-gray) / <alpha-value>)",
            primary: "rgb(var(--color-primary) / <alpha-value>)",
            secondary: "rgb(var(--color-secondary) / <alpha-value>)",
            info: "rgb(var(--color-info) / <alpha-value>)",
            error: "rgb(var(--color-error) / <alpha-value>)",
            warning: "rgb(var(--color-warning) / <alpha-value>)",
            success: "rgb(var(--color-success) / <alpha-value>)",
            contrast: "rgb(var(--color-contrast) / <alpha-value>)",
          },
        },
        dark: {
          colors: {
            gray: "rgb(var(--color-gray) / <alpha-value>)",
            primary: "rgb(var(--color-primary) / <alpha-value>)",
            secondary: "rgb(var(--color-secondary) / <alpha-value>)",
            info: "rgb(var(--color-info) / <alpha-value>)",
            error: "rgb(var(--color-error) / <alpha-value>)",
            warning: "rgb(var(--color-warning) / <alpha-value>)",
            success: "rgb(var(--color-success) / <alpha-value>)",
            contrast: "rgb(var(--color-contrast) / <alpha-value>)",
          },
        },
      },
    }),
  ],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(transparent|white|black|gray|gray-text|yellow|blue|indigo|purple|green|red|teal|primary|primary-hover|primary-active|secondary|secondary-hover|secondary-active|info|info-hover|info-active|error|warning|success)/,
    },
  ],
};
export default config;
