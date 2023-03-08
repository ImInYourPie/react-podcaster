import React from "react";

// MUI
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

// Hooks
import { usePodcast } from "..";
import { useParams } from "react-router-dom";

const Episode = () => {
  const { episodeId } = useParams();
  const { episodes } = usePodcast();

  const selected = episodes.find((episode) => episode.id === episodeId);

  return (
    <Box mx={2}>
      <Card>
        <CardHeader
          id={"episode-title"}
          title={selected?.title}
          titleTypographyProps={{ variant: "h6" }}
        />
        <CardContent>
          <Typography
            id={"episode-description"}
            dangerouslySetInnerHTML={{ __html: selected?.description }}
          />
          <Box mt={1}>
            <audio
              id={"player"}
              className="audio-player"
              controls
              style={{ width: "100%" }}
            >
              <source src={selected?.episodeUrl} />
            </audio>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Episode;
