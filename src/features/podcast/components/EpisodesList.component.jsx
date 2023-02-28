import React from "react";

// Components
import EpisodeItem from "./EpisodeItem.component";
import SubHeader from "./SubHeader.component";

// Hooks
import { usePodcast } from "..";

// MUI
import { Card, Box, CardContent, CardHeader } from "@mui/material";

const EpisodesList = () => {
  const { episodes } = usePodcast();

  return (
    <Box mx={2}>
      <Card>
        <CardContent>
          <SubHeader />

          {episodes.map((episode) => (
            <EpisodeItem key={episode.id} episode={episode} />
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default EpisodesList;
