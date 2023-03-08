import React, { createContext } from "react";

// Hooks
import { useLocalStorage } from "@hooks";

export const ThemePreferencesContext = createContext({});

export const ThemePreferencesProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const value = { theme, setTheme };

  return (
    <ThemePreferencesContext.Provider value={value}>
      {children}
    </ThemePreferencesContext.Provider>
  );
};

export default ThemePreferencesProvider;
