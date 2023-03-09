import React from "react";

// MUI
import { Box } from "@mui/material";

// Hooks
import { useLoading } from "@hooks";

// Feature
import {
  EpisodesList,
  Header,
  HeaderSkeleton,
  EpisodesListSkeleton,
} from "@features/podcast";

const Podcast = () => {
  const { loading } = useLoading();

  return (
    <Box>
      {loading ? <HeaderSkeleton /> : <Header />}
      {loading ? <EpisodesListSkeleton /> : <EpisodesList />}
    </Box>
  );
};

export default Podcast;
