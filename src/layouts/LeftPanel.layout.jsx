import React from "react";
import { Outlet } from "react-router-dom";

// Components
import { Aside } from "@components";

// MUI
import { Grid } from "@mui/material";

const LeftPanel = () => {
  return (
    <Grid container>
      <Grid items xs={4}>
        <Aside />
      </Grid>
      <Grid items xs={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default LeftPanel;
