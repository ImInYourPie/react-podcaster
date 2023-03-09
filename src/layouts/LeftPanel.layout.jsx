import React from "react";
import { Outlet } from "react-router-dom";

// Components
import { Aside } from "@components";

// MUI
import { Grid } from "@mui/material";
import { useLoading } from "@hooks/index";
import { AsideSkeleton } from "@components/Aside";

const LeftPanel = () => {
  const { loading } = useLoading();

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        {loading ? <AsideSkeleton /> : <Aside />}
      </Grid>
      <Grid item xs={12} sm={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default LeftPanel;
