import React from "react";

// Components
import { Header } from "@components";

// Context
import { LoadingProvider } from "@context";

// MUI
import { Container, Box } from "@mui/material";

const Base = ({ children }) => {
  return (
    <LoadingProvider>
      <Header />
      <Container>
        <Box m={2}>{children}</Box>
      </Container>
    </LoadingProvider>
  );
};

export default Base;
