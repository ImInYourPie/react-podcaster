import React from "react";

// Components
import EpisodeItem from "./EpisodeItem.component";

// Hooks
import { usePodcast } from "..";

// MUI
import { Card, Box } from "@mui/material";

const EpisodesList = () => {
  const { episodes } = usePodcast();
  return (
    <Box mx={2}>
      <Card>
        {episodes.map((episode) => (
          <EpisodeItem key={episode.id} episode={episode} />
        ))}
      </Card>
    </Box>
  );
};

export default EpisodesList;
