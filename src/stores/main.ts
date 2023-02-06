import { defineStore } from 'pinia'
import { defaultTheme } from '../utils/appearance/getBrowserDefaults'
import { register } from '../utils/registerNewUser'

export const useMainStore = defineStore('main', {
  state: () => ({
    newUser: true,
    theme: '',
    language: '',
    assetsBaseURL: '',
    appearance: {} as any
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
      
      this.setAppearance()
    },

    setAssetsBaseURL() {
      const userInfo = JSON.parse(localStorage.getItem('userInfo') || "{ country_code: 'IR' }")

      if (userInfo.country_code == 'IR') {
        this.assetsBaseURL = ''
      } else {
        this.assetsBaseURL = '/'
      }
    },

    setAppearance() {
      const html = document.querySelector('html')
      const body = document.querySelector('body')
      const appearance = JSON.parse(localStorage.getItem('appearance') || "{}") 
    
      
      html?.setAttribute('data-theme', appearance.theme) // set theme
      html?.setAttribute('lang', appearance.language.code) // set lang
      body?.setAttribute('dir', appearance.language.dir) // set lang
    },


    changeLanguage(key: string) {
      const appearance = JSON.parse(localStorage.getItem('appearance') || '{}')
      const languages = JSON.parse(localStorage.getItem('available') || '{}').languages

      if (appearance?.language?.name !== languages[key].name) {
        appearance.language = languages[key]
        localStorage.setItem('appearance', JSON.stringify(appearance))

        this.setAppearance()
      }
    },
  },
})
