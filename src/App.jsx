import { RouterProvider } from "react-router-dom";
import router from "@pages";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useThemePreferences } from "@hooks";
import { ThemePreferencesProvider } from "@context";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#fff",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#303030",
    },
  },
});

const Base = () => {
  const { theme } = useThemePreferences("theme");
  console.log("🚀 ~ file: App.jsx:39 ~ Base ~ theme:", theme);

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
