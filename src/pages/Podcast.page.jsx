import React from "react";

// MUI
import { Box } from "@mui/material";

// Feature
import { EpisodesList, Header } from "@features/podcast";

const Podcast = () => {
  return (
    <Box>
      <Header />
      <EpisodesList />
    </Box>
  );
};

export default Podcast;
