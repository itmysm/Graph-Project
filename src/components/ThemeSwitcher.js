import { toggleTheme } from '@/utils/theme';

import { Switch } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeSwitcher() {
  const [settings, setSettings] = useState({})

  const handelThemeChange = () => {
    setSettings(toggleTheme())
  }

  useEffect(() => {
    const defaults = JSON.parse(localStorage.getItem('settings'))
    setSettings(defaults)
  }, [])

  return (
    settings?.theme != undefined &&
    <>
      <Switch
        className={`fixed bottom-6 left-4 ${settings.theme == "dark"
          ? " [&>div]:bg-secondary-active"
          : "[&>div]:bg-primary"
          }`}
        onChange={handelThemeChange}
        checked={settings.theme == "dark" ? true : false}
        size="xl"
        iconOn={<FiMoon style={{ color: "rgb(var(--color-primary))" }} />}
        iconOff={<FiSun style={{ color: "rgb(var(--color-yellow))" }} />}
      />
    </>
  );
}
