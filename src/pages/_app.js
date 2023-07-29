import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { appWithI18Next } from 'ni18n';
import { ni18nConfig } from '../../ni18n.config';
import store from '@/stores';
import Application from '@/layouts/Application';
import Default from '@/layouts/Default';
import '../styles/globals.css';
import '../styles/animations.css';

const layouts = {
  App: Application,
  Default: Default,
};

function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || Default;

  // Fetch initial settings from local storage or set default settings
  const initialSettings =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('settings')) || getSettings()
      : getSettings();

  const [settings, setSettings] = useState(initialSettings);

  useEffect(() => {
    updateDocumentAttributes(settings);
    localStorage.setItem('settings', JSON.stringify(settings)); // Update settings in localStorage
  }, [settings]);

  const nextUITheme = createNextUITheme(settings.theme);

  return (
    <Layout>
      <Provider store={store}>
        <NextUIProvider theme={nextUITheme}>
          <Component {...pageProps} />
        </NextUIProvider>
      </Provider>
    </Layout>
  );
}

function updateDocumentAttributes(settings) {
  document.querySelector('body').setAttribute('dir', settings.locale === 'fa' ? 'rtl' : 'ltr');
  document.querySelector('html').setAttribute('data-theme', settings.theme);
}

function createNextUITheme(themeType) {
  return createTheme({
    type: themeType,
    theme: {
      colors: {
        // transparent: 'var(--color-transparent)',
        // white: 'rgb(var(--color-white) / <alpha-value>)',
        // black: 'rgb(var(--color-black) / <alpha-value>)',
        // gray: 'rgb(var(--color-gray) / <alpha-value>)',
        // yellow: 'rgb(var(--color-yellow) / <alpha-value>)',
        // blue: 'rgb(var(--color-blue) / <alpha-value>)',
        // indigo: 'rgb(var(--color-indigo) / <alpha-value>)',
        // purple: 'rgb(var(--color-purple) / <alpha-value>)',
        // green: 'rgb(var(--color-green) / <alpha-value>)',
        // red: 'rgb(var(--color-red) / <alpha-value>)',
        // teal: 'rgb(var(--color-teal) / <alpha-value>)',

        // primary: 'rgb(var(--color-primary) / <alpha-value>)',
        // 'primary-hover': 'rgb(var(--color-primary-hover) / <alpha-value>)',
        // 'primary-active': 'rgb(var(--color-primary-active) / <alpha-value>)',

        // secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        // 'secondary-hover': 'rgb(var(--color-secondary-hover) / <alpha-value>)',
        // 'secondary-active': 'rgb(var(--color-secondary-active) / <alpha-value>)',

        // info: 'rgb(var(--color-info) / <alpha-value>)',
        // 'info-hover': 'rgb(var(--color-info-hover) / <alpha-value>)',
        // 'info-active': 'rgb(var(--color-info-active) / <alpha-value>)',

        // error: 'rgb(var(--color-error) / <alpha-value>)',
        // warning: 'rgb(var(--color-warning) / <alpha-value>)',
        // success: 'rgb(var(--color-success) / <alpha-value>)',
      },
    },
  });
}

function getSettings() {
  const settings = {
    theme: 'dark',
    locale: 'en',
  };

  return settings;
}

export default appWithI18Next(App, ni18nConfig);
