import React from "react";

// MUI
import { Box } from "@mui/material";

// Feature
import { Episode, EpisodeSkeleton } from "@features/podcast";

// Hooks
import { useLoading } from "@hooks/index";

const Podcast = () => {
  const { loading } = useLoading();

  return <Box>{loading ? <EpisodeSkeleton /> : <Episode />}</Box>;
};

export default Podcast;
