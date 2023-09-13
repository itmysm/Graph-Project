import { toggleTheme } from "@/utils/theme";
import { Switch } from "@nextui-org/switch";
import { useEffect, useRef, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitcher() {
  const settingsRef = useRef({});
  const [theme, setTheme] = useState(null)

  const handleThemeChange = () => {
    settingsRef.current = toggleTheme();
  };

  useEffect(() => {
    const defaults = JSON.parse(localStorage.getItem("settings"));
    settingsRef.current = defaults.theme || {}
    setTheme(settingsRef.current)
  }, []);

  return (
    theme !== undefined && (
      <div className="!fixed !bottom-3 left-4">
        <Switch
          defaultSelected
          className={`${theme === "dark"
            ? "[&>div]:bg-secondary-active"
            : "[&>div]:bg-primary"
            }`}
          onChange={handleThemeChange}
          checked={theme === "dark"}
          size="lg"
          startContent={<FiMoon style={{ color: "rgb(var(--color-white))" }} />}
          endContent={<FiSun style={{ color: "rgb(var(--color-yellow))" }} />}
        />
      </div>
    )
  );
}
