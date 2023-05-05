import { i18n } from '@/i18n/i18n'
import { defineStore } from 'pinia'
import { register, setAppearance } from '../utils/registerNewUser'

export const useSettersStore = defineStore('setters', {
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
      console.log(this.newUser, localStorage.getItem('appearance'));
      if (this.newUser) {
        register()
      }
      
      setAppearance()
    },

    setAssetsBaseURL() {
      const userInfo = JSON.parse(localStorage.getItem('userInfo') || "{ country_code: 'IR' }")

      if (userInfo.country_code == 'IR') {
        this.assetsBaseURL = ''
      } else {
        this.assetsBaseURL = '/'
      }
    },

    changeLanguage(key: string) {
      const appearance = JSON.parse(localStorage.getItem('appearance') || '{}')
      const languages = JSON.parse(localStorage.getItem('available') || '{}').languages

      if (appearance?.language?.name !== languages[key].name) {
        appearance.language = languages[key]
        localStorage.setItem('appearance', JSON.stringify(appearance))
        i18n.global.locale.value = languages[key].name.toLowerCase()

        setAppearance()
      }
    },
  },
})
