const defaultTheme = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const systemInfo = () => {
  return { 
    platform: window.navigator?.userAgentData?.platform, 
    isMobile: window.navigator?.userAgentData?.mobile 
  }
}

const userIsOnline = () => {
  return window.navigator.onLine
}

const defaultLanguage = (): string => {
  return window.navigator.language
}

const allDefault = () => {
  return {
    theme: defaultTheme(),
    system: systemInfo(),
    userStatus: userIsOnline(),
    lang: defaultLanguage()
  }
}

export { defaultTheme, userIsOnline, systemInfo, allDefault, defaultLanguage}