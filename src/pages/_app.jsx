import "../styles/globals.css";
import "../styles/animations.css";

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "../../ni18n.config";
import store from "src/stores";
import Application from "../layouts/Application";
import Default from "../layouts/Default";

import { NextUIProvider } from "@nextui-org/react";

const layouts = {
  App: Application,
  Default: Default,
};

function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || Default;

  // Fetch initial settings from local storage or set default settings
  const initialSettings =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("settings")) || getSettings()
      : getSettings();

  const [settings, setSettings] = useState(initialSettings);

  useEffect(() => {
    updateDocumentAttributes(settings);
    localStorage.setItem("settings", JSON.stringify(settings)); // Update settings in localStorage
  }, [settings]);

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

function updateDocumentAttributes(settings) {
  document
    .querySelector("body")
    .setAttribute("dir", settings.locale === "fa" ? "rtl" : "ltr");
  document.querySelector("html").setAttribute("data-theme", settings.theme);
}

function getSettings() {
  const settings = {
    theme: "dark",
    locale: "en",
  };

  return settings;
}

export default appWithI18Next(App, ni18nConfig);
