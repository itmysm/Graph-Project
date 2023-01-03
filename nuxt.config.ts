import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  router: {
    base: '/Graph-Project/'
  },
  srcDir: 'src',
  modules: ['@nuxt/content',  '@pinia/nuxt',],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },

    transpile: ['echarts/core.d.ts']
  },

  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
  components: true,
  meta: {
    htmlAttrs: {
      lang: "en",
    },
    link: [
      {
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0',
        rel: 'stylesheet',
      }
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },

  vite: {
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
    }
  }
})