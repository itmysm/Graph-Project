import "server-only";
import type { Locale } from "../../i18n.config";

const locales = {
  en: () => import("../locales/en/translations.json").then((module) => module.default),
  de: () => import("../locales/de/translations.json").then((module) => module.default),
};

export const getLocales = async (locale: Locale) => {
  return locales[locale]();
};
