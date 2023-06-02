import { appWithI18Next, useSyncLanguage } from "ni18n";
import { ni18nConfig } from "../../ni18n.config";
import { useEffect, useState } from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
import store from "@/stores";

import Application from '@/layouts/Application'
import Default from '@/layouts/Default'
import '../styles/globals.css'

const layouts = {
  App: Application,
  Default: Default
}

function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || Default;

  const [settings, setSettings] = useState({})

  useEffect(() => {
    const defaults = JSON.parse(localStorage.getItem('settings')) || getSettings()
    setSettings(defaults)
  }, [])

  console.log(settings.locale);
  useSyncLanguage('en')

  const [dir, setDir] = useState(settings.locale === 'fa' ? 'rtl' : 'ltr');
  const theme = settings.theme

  useEffect(() => {
    document.querySelector('body').setAttribute('dir', dir);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [dir, theme])

  const nextUITheme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
      colors: {
        transparent: 'var(--color-transparent)',
        white: 'rgb(var(--color-white) / <alpha-value>)',
        black: 'rgb(var(--color-black) / <alpha-value>)',
        gray: 'rgb(var(--color-gray) / <alpha-value>)',
        yellow: 'rgb(var(--color-yellow) / <alpha-value>)',
        blue: 'rgb(var(--color-blue) / <alpha-value>)',
        indigo: 'rgb(var(--color-indigo) / <alpha-value>)',
        purple: 'rgb(var(--color-purple) / <alpha-value>)',
        green: 'rgb(var(--color-green) / <alpha-value>)',
        red: 'rgb(var(--color-red) / <alpha-value>)',
        teal: 'rgb(var(--color-teal) / <alpha-value>)',

        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-hover': 'rgb(var(--color-primary-hover) / <alpha-value>)',
        'primary-active': 'rgb(var(--color-primary-active) / <alpha-value>)',

        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'secondary-hover': 'rgb(var(--color-secondary-hover) / <alpha-value>)',
        'secondary-active': 'rgb(var(--color-secondary-active) / <alpha-value>)',

        info: 'rgb(var(--color-info) / <alpha-value>)',
        'info-hover': 'rgb(var(--color-info-hover) / <alpha-value>)',
        'info-active': 'rgb(var(--color-info-active) / <alpha-value>)',

        error: 'rgb(var(--color-error) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
      }
    }
  })

  return (
    <Layout>
      <Provider store={store}>
        <NextUIProvider theme={nextUITheme}>
          <Component {...pageProps} />
        </NextUIProvider>
      </Provider>
    </Layout>
  )
}

function getSettings() {
  const settings = {
    theme: 'dark',
    locale: 'en',
  }

  localStorage.setItem('settings', JSON.stringify(settings))
  return settings
} // must be dynamic later

export default appWithI18Next(App, ni18nConfig)