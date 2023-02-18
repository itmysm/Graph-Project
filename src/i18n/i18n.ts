import { createI18n } from 'vue-i18n'
import english from './locales/en.json'
import russian from './locales/ru.json'

export const i18n = createI18n({
  locale: 'english',
  legacy: false,
  globalInjection: true,
  messages: {
    english,
    russian
  }
})

export const changeLocale = (newLocale: any) => {
  i18n.global.locale.value = newLocale
}

// #for adding new language, after adding locale file and importing it here you must go to utils/registerNewUser.ts and add language to availableLanguages variable!