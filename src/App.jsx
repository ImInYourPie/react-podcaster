import { RouterProvider } from "react-router-dom";
import router from "@pages";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useThemePreferences } from "@hooks";
import { ThemePreferencesProvider } from "@context";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1A73E8" },
    secondary: { main: "#3B3B3B" },
    text: { main: "#202124" },
    background: { default: "#fefefe" },
    surface: { default: "#FFFFFF" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#BB86FC" },
    secondary: { main: "#E1E1E1" },
    text: { main: "#EDEDED" },
    background: { default: "#121212" },
    surface: { default: "#1E1E1E" },
  },
});

const Base = () => {
  const { theme } = useThemePreferences("theme");

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <ThemePreferencesProvider>
      <Base />
    </ThemePreferencesProvider>
  );
};

export default App;
