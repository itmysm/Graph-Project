import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  buildModules: [],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
  components: true,
  meta: {
    htmlAttrs: {
      lang: "en",
    },
    link: [
      {
        href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined',
        rel: 'stylesheet',
      }
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
})