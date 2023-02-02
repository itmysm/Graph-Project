import { defineStore } from 'pinia'
import { defaultTheme } from '@/utils/appearance/getBrowserDefaults'
import { register } from '@/utils/registerNewUser'

export const useMainStore = defineStore('main', {
  state: () => ({
    newUser: true,
    theme: '',
    language: '',
    assetsBaseURL: ''
  }),

  getters: {
    getTheme: (state) => state.theme,
  },

  actions: {
    registerUser() {
      this.newUser = localStorage.getItem('appearance') == null ? true : false

      if (this.newUser) {
        register()
      }
    },

    setTheme() {
      const appearance = localStorage.getItem('appearance')

      if (appearance) {
        this.theme = JSON.parse(appearance).theme
      } else {
        this.theme = 'default'
      }

      this.setThemeInDOM()
    },

    setAssetsBaseURL() {
      console.log('2')
      const userInfo = JSON.parse(localStorage.getItem('userInfo') || "{ country_code: 'IR' }")
      
      if (userInfo.country_code == 'IR') {
        this.assetsBaseURL = ''
      } else {
        this.assetsBaseURL = '/'
      }
    },

    setLanguage() {
      const appearance = localStorage.getItem('appearance')

      if (appearance) {
        this.language = JSON.parse(appearance).language
      } else {
        this.theme = 'en' // set as default language
      }
    },

    setThemeInDOM() {
      const defaultThemeBrowser = defaultTheme() // this line get default theme system

      document.querySelector('body')?.setAttribute('data-theme',
        this.theme === 'default' ? defaultThemeBrowser : this.theme)
    }
  },
})
