import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fa from './locales/fa.json'

export const i18n = createI18n({
  locale: 'fa',
  legacy: false,
  globalInjection: true,
  messages: {
    en,
    fa
  }
})
