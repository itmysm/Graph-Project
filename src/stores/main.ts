import { defineStore } from 'pinia'
import { defaultTheme } from '@/utils/appearance/getBrowserDefaults'

export const useMainStore = defineStore('main', {
  state: () => ({
    theme: '',
    assetsBaseURL: ''
  }),

  getters: {
    getTheme: (state) => state.theme,
  },

  actions: {
    setTheme() {
      const appearance = localStorage.getItem('appearance')

      if (appearance) {
        this.theme = JSON.parse(appearance).theme
      } else {
        this.theme = 'default'
      }

      this.setThemeInDOM()
    },

    setThemeInDOM() {
      const defaultThemeBrowser = defaultTheme() // this line get default theme system

      document.querySelector('body')?.setAttribute('data-theme',
        this.theme === 'default' ? defaultThemeBrowser : this.theme)
    },

    setAssetsBaseURL() {
      console.log('2')
      const userInfo = JSON.parse(localStorage.getItem('userInfo') || "{ country_code: 'IR' }")
      
      if (userInfo.country_code == 'IR') {
        this.assetsBaseURL = ''
      } else {
        this.assetsBaseURL = '/'
      }
    }
  },
})
