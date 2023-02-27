import React from "react";

// Components
import PodcastItem from "./PodcastItem.component";

// MUI
import { Box, Grid } from "@mui/material";
import { usePodcasts } from "../hooks";

const PodcastList = ({}) => {
  const { podcasts } = usePodcasts();

  return (
    <Grid container spacing={2}>
      {podcasts.map((podcast) => (
        <Grid item xs={12} sm={6} md={3} key={podcast.id}>
          <PodcastItem podcast={podcast} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PodcastList;
