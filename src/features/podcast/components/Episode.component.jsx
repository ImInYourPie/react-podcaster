import React from "react";

// MUI
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

// Hooks
import { usePodcast } from "..";
import { useParams } from "react-router-dom";

const Episode = () => {
  const { episodeId } = useParams();
  const { episodes, loading } = usePodcast();

  const selected = episodes.find(
    (episode) => episode.id === parseInt(episodeId)
  );

  return (
    <Box mx={2}>
      <Card>
        <CardHeader
          title={selected?.title}
          titleTypographyProps={{ variant: "h6" }}
        />
        <CardContent>
          <Typography
            dangerouslySetInnerHTML={{ __html: selected?.description }}
          />
          <Box mt={1}>
            <audio className="audio-player" controls style={{ width: "100%" }}>
              <source
                src={selected?.episodeUrl}
                type={`${selected?.contentType}/${selected?.fileExtension}`}
              />
            </audio>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Episode;
