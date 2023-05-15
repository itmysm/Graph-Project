import { appWithI18Next, useSyncLanguage } from "ni18n";
import { ni18nConfig } from "../../ni18n.config";
import { useEffect, useState } from 'react';

import Application from '@/layouts/Application'
import Default from '@/layouts/Default'
import '../styles/globals.css'

const layouts = {
  App: Application,
  Default: Default
}

function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || Default;
  const settings = getSettings()
  useSyncLanguage(settings.locale)

  const [dir, setDir] = useState(settings.locale === 'fa' ? 'rtl' : 'ltr');
  const theme = settings.theme

  useEffect(() => {
    document.querySelector('body').setAttribute('dir', dir);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [dir, theme])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


function getSettings() {
  return {
    theme: 'dark',
    locale: 'en',
  }
} // must be dynamic later

export default appWithI18Next(App, ni18nConfig)