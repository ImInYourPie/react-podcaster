import React from "react";
import { Link } from "react-router-dom";

// MUI
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Typography,
  CircularProgress,
  IconButton,
} from "@mui/material";

// MUI Icons
import { LightModeRounded, DarkModeRounded } from "@mui/icons-material";

// Hooks
import useHeader from "./Header.hook";
import { useThemePreferences } from "@hooks";

const Header = () => {
  const { loading, toggleTheme } = useHeader();
  const { theme } = useThemePreferences();

  const handleButtonClick = () => {
    toggleTheme();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar data-testid="header" position="sticky" elevation={1}>
        <Container disableGutters>
          <Toolbar variant="dense">
            <Box
              display={"flex"}
              width={"100%"}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                id={"brand"}
                variant="h6"
                color="inherit"
                component={Link}
                to="/"
                sx={{ textDecoration: "none" }}
              >
                Podcaster
              </Typography>
              <Box display={"flex"} alignItems={"center"}>
                {loading && (
                  <CircularProgress
                    data-testid="loading-spinner"
                    size={"1.5rem"}
                    thickness={8}
                    sx={{ color: "#fff", marginRight: "8px" }}
                  />
                )}
                <IconButton
                  data-testid={"header-icon-button"}
                  onClick={handleButtonClick}
                  sx={{ color: "#fff" }}
                >
                  {theme === "dark" ? (
                    <DarkModeRounded data-testid={"dark-icon"} />
                  ) : (
                    <LightModeRounded data-testid={"light-icon"} />
                  )}
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
