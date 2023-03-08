import { useContext } from "react";

// Context
import { ThemePreferencesContext } from "@context";

const useThemePreferences = () => useContext(ThemePreferencesContext);

export default useThemePreferences;
