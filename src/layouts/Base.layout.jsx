import React from "react";
import { Outlet } from "react-router-dom";

// Components
import { Header } from "@components";

// Context
import { LoadingProvider } from "@context";

// MUI
import { Container, Box } from "@mui/material";

const Base = () => {
  return (
    <LoadingProvider>
      <Header />
      <Container>
        <Box m={2}>
          <Outlet />
        </Box>
      </Container>
    </LoadingProvider>
  );
};

export default Base;
