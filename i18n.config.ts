export const i18n = {
  defaultLocale: "en",
  locales: [
    { label: "en", title: "English", dir: "ltr" },
    { label: "fa", title: "فارسی", dir: "rtl" },
  ],
} as const;

export type Locale = (typeof i18n)["locales"][number];
export type LocaleLabel = "en" | "fa";
