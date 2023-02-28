import React from "react";

// MUI
import { Box } from "@mui/material";

// Feature
import { EpisodesList, Header, usePodcast } from "@features/podcast";

const Podcast = () => {
  const { loading } = usePodcast();

  if (loading) return <></>;

  return (
    <Box>
      <Header />
      <EpisodesList />
    </Box>
  );
};

export default Podcast;
