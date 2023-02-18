import { defaultTheme, defaultLanguage } from "./appearance/getBrowserDefaults"

const availableThemes = [{ name: 'dark' }, { name: 'light' }]
const availableLanguages = [
  { name: 'English', code: 'en', dir: 'ltr' ,flag: '' },
  { name: 'Russian', code: 'ru', dir: 'ltr', flag: '' }
]

const register = async () => {
  const appearance = {
    theme: defaultTheme(),
    language: checkDefaultLanguageIsSupported(),
  }

  const availableOptions = {
    themes: availableThemes,
    languages: availableLanguages,
  }
  
  localStorage.setItem('appearance', JSON.stringify(appearance))
  localStorage.setItem('available', JSON.stringify(availableOptions))
}


function checkDefaultLanguageIsSupported() {
  
  return availableLanguages.find((lang) => {
    if (lang.code === defaultLanguage().split('-')[0]) return lang
  }) || availableLanguages[0] // if default lang is unsupported select english

  /* This function checks whether the default language of the system is supported by the program or not,
   for example, the Japanese language is not supported by the program,
   so the function selects a supported language (English) arbitrarily. 
   */
}

export { register }