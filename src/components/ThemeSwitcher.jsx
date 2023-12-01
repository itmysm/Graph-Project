import { NEW_SETTINGS } from "@/stores/reducers/app";
import { Switch } from "@nextui-org/switch";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

export default function ThemeSwitcher() {
  const savedTheme = useSelector((state) => state.settings);
  const dispatch = useDispatch()
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(savedTheme.theme)
  }, [savedTheme])

  const handleThemeChange = () => {
    dispatch({ type: NEW_SETTINGS, payload: { ...savedTheme, theme: theme == 'dark' ? 'light' : 'dark' } })
  };

  return theme && (
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
  );
}
