import React from "react";

// Components
import { Header } from "@components";

// MUI
import { Container, Box } from "@mui/material";

const Base = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>
        <Box m={2}>{children}</Box>
      </Container>
    </div>
  );
};

export default Base;
