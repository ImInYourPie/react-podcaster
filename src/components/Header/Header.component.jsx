import React from "react";

// MUI
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";

// MUI Icons
import { Link } from "react-router-dom";

// Hooks
import useHeader from "./Header.hook";

const Header = () => {
  const { loading } = useHeader();

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
              {loading && (
                <CircularProgress size={"1.5rem"} color="secondary" />
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
