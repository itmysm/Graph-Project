import { toggleTheme } from '@/utils/theme';
import { Switch } from "@nextui-org/react";
import { useEffect, useRef } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeSwitcher() {
  const settingsRef = useRef({});

  const handleThemeChange = () => {
    settingsRef.current = toggleTheme();
  };

  useEffect(() => {
    const defaults = JSON.parse(localStorage.getItem('settings'));
    settingsRef.current = defaults || {};
  }, []);

  const { theme } = settingsRef.current;

  return (
    theme !== undefined && (
      <Switch
        className={`absolute bottom-6 left-4 ${theme === "dark" ? "[&>div]:bg-secondary-active" : "[&>div]:bg-primary"}`}
        onChange={handleThemeChange}
        checked={theme === "dark"}
        size="xl"
        iconOn={<FiMoon style={{ color: "rgb(var(--color-primary))" }} />}
        iconOff={<FiSun style={{ color: "rgb(var(--color-yellow))" }} />}
      />
    )
  );
}
