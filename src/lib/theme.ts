// 1 is Dark and 0 is Light

import { Appearance } from "@/types/general";

let appearance: Appearance = {
  lightMode: false,
};

export default function themeHandler() {
  const selectedTheme = localStorage.getItem("appearance");
  const defaultSystemTheme = getDefaultSystemTheme();

  if (selectedTheme) {
    appearance = JSON.parse(selectedTheme);
  } else {
    setTheme(defaultSystemTheme);
  }

  return appearance.lightMode;
}

export const setTheme = (themeStatus: boolean) => {
  const newTheme = { lightMode: themeStatus };
  localStorage.setItem("appearance", JSON.stringify(newTheme));
  appearance = { lightMode: themeStatus };
};

const getDefaultSystemTheme = (): boolean => {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
};

const getTheme = (): object => {
  return appearance;
};
