import { appWithI18Next, useSyncLanguage } from "ni18n";
import { ni18nConfig } from "../../ni18n.config";

import Application from '@/layouts/Application'
import Default from '@/layouts/Default'
import '@/styles/globals.css'

const layouts = {
  App: Application,
  Default: Default
}

function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || Default;
  const settings = getSettings()
  useSyncLanguage(settings.locale)
  configDirection(settings.locale)

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


function getSettings() {
  return {
    theme: 'dark',
    locale: 'fa',
  }
} // must be dynamic later

function configDirection(locale) {
  if (locale == 'fa') {
    document.querySelector('body').setAttribute('dir', 'rtl')
  } else {
    document.querySelector('body').setAttribute('dir', 'ltr')
  }
}

export default appWithI18Next(App, ni18nConfig)