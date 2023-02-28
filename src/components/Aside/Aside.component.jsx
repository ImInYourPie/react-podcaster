import React from "react";
import { Link } from "react-router-dom";

// MUI
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { usePodcast } from "@features/podcast";

const Aside = () => {
  const { podcast, loading } = usePodcast();

  if (loading) return <div>Loading...</div>;

  return (
    <Card>
      <CardMedia
        component="img"
        image={podcast.image}
        alt={`Cover image for ${podcast.title} podcast`}
        aria-label={`Cover image for ${""} podcast`}
      />
      <CardContent>
        <Typography gutterBottom variant="body1">
          {podcast?.title}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary">
          <i>by</i>: {podcast?.author}
        </Typography>

        <Box my={1}>
          <Divider />
        </Box>
        <Typography variant="subtitle1" color={"text.secondary"}>
          Description:
        </Typography>
        <Typography dangerouslySetInnerHTML={{ __html: podcast.description }} />
      </CardContent>
    </Card>
  );
};

export default Aside;