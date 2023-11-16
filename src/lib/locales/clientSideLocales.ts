import type { Locale, LocaleLabel } from "$/i18n.config";

const locales = {
  en: () => import("@/locales/en/translations.json").then((module) => module.default),
  de: () => import("@/locales/de/translations.json").then((module) => module.default),
  fa: () => import("@/locales/fa/translations.json").then((module) => module.default),
};

export const getClientSideLocales = async (locale: LocaleLabel) => {
  return locales[locale]();
};