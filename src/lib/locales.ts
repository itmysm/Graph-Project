import "server-only";
import type { Locale, LocaleLabel } from "../../i18n.config";

const locales = {
  en: () => import("../locales/en/translations.json").then((module) => module.default),
  fa: () => import("../locales/fa/translations.json").then((module) => module.default),
};

export const getLocales = async (locale: LocaleLabel) => {
  return locales[locale]();
};
