import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/charts.view.ts",
  ],
  theme: {
    colors: {
      transparent: "var(--color-transparent)",
      gray: "rgb(var(--color-gray) / <alpha-value>)",
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      info: "rgb(var(--color-info) / <alpha-value>)",
      active: "rgb(var(--color-active) / <alpha-value>)",
      error: "rgb(var(--color-error) / <alpha-value>)",
      warning: "rgb(var(--color-warning) / <alpha-value>)",
      success: "rgb(var(--color-success) / <alpha-value>)",
      contrast: "rgb(var(--color-contrast) / <alpha-value>)",
      "always-white": "rgb(var(--color-always-white) / <alpha-value>)",
    },
    screens: {
      xs: "570px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      animation: {
        wiggle: "wiggle 3.5s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-3px)" },
          "75%": { transform: "translateY(3px)" },
        },
      },
    },
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
            active: "rgb(var(--color-active) / <alpha-value>)",
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
            active: "rgb(var(--color-active) / <alpha-value>)",
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
