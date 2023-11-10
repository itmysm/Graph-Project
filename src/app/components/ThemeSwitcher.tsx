"use client";

import React, { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { FiMoon, FiSun } from "react-icons/fi";
import themeHandler, { setTheme } from "@/lib/theme";

export default function ThemeSwitcher() {
  const [theme, assignTheme] = useState(themeHandler());

  const onChangeTheme = (isLightMode: boolean) => {
    setTheme(isLightMode);
    document.querySelector("html")?.setAttribute("data-theme", isLightMode ? "light" : "dark");
  };

  useEffect(() => {
    onChangeTheme(theme);
  }, []);

  return (
    <Switch
      className="absolute bottom-4 left-4"
      defaultSelected={theme}
      size="lg"
      color="success"
      startContent={<FiSun />}
      endContent={<FiMoon />}
      onValueChange={onChangeTheme}
    ></Switch>
  );
}
