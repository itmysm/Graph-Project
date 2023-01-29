import { defineStore } from 'pinia'
import { defaultTheme } from '@/utils/Appearance/getBrowserDefaults'

export const useMainStore = defineStore('main', {
  state: () => ({
    theme: '',
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
    }
  },
})
