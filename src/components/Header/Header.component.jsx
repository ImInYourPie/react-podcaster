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
      <AppBar position="sticky" elevation={0}>
        <Container disableGutters>
          <Toolbar variant="dense">
            <Typography
              variant="h6"
              color="inherit"
              component={Link}
              to="/"
              sx={{ flexGrow: 1 }}
            >
              Podcaster
            </Typography>
            {loading && <CircularProgress size={"1.5rem"} color="secondary" />}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
