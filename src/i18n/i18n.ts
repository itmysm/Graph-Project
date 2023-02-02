import { createI18n } from 'vue-i18n'
import english from './locales/en.json'
import persian from './locales/fa.json'

export const i18n = createI18n({
  locale: 'english',
  legacy: false,
  globalInjection: true,
  messages: {
    english,
    persian
  }
})
