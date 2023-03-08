import { useContext } from "react";

// Context
import { LoadingContext } from "@context";

// Hooks
import { useLocalStorage } from "@hooks";
import { useThemePreferences } from "@hooks/index";

const useHeader = () => {
  const { loading } = useContext(LoadingContext);
  const { theme, setTheme } = useThemePreferences();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { loading, toggleTheme };
};

export default useHeader;
