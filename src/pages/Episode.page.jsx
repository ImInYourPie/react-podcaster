import React from "react";

// MUI
import { Box } from "@mui/material";

// Feature
import { Episode, usePodcast } from "@features/podcast";

const Podcast = () => {
  const { loading } = usePodcast();

  if (loading) return <></>;

  return (
    <Box>
      <Episode />
    </Box>
  );
};

export default Podcast;
