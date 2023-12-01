import "@/styles/global.css";
import "@/styles/animations.css";

import { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "../../ni18n.config";
import store from "../stores";
import Application from "@/layouts/Application";
import Default from "@/layouts/Default";

import { NextUIProvider } from "@nextui-org/react";
import { NEW_SETTINGS } from "@/stores/reducers/app";

const layouts = {
  App: Application,
  Default: Default,
};

function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || Default;

  useEffect(() => {
    if (localStorage) {
      const savedSettings = JSON.parse(localStorage.getItem('settings')) || getDefaultSettings()
      store.dispatch({ type: NEW_SETTINGS, payload: savedSettings })
    }
  }, [])

  return (
    <Layout>
      <NextUIProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </NextUIProvider>
    </Layout>
  );
}

function getDefaultSettings() {
  const settings = {
    theme: "dark",
    locale: "en",
    lang: "en"
  };

  localStorage.setItem('settings', JSON.stringify(settings))
  return settings;
}

export default appWithI18Next(App, ni18nConfig);
