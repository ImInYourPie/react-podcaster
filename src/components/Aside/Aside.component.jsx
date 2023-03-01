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

  if (loading) return <></>;

  return (
    <Card id={"aside"}>
      <CardMedia
        component="img"
        image={podcast.image}
        alt={`Cover image for ${podcast.title} podcast`}
        aria-label={`Cover image for ${""} podcast`}
      />
      <CardContent>
        <Link to={`/podcast/${podcast.id}`} style={{ textDecoration: "none" }}>
          <Typography id={"aside-podcast-title"} gutterBottom variant="body1">
            {podcast?.title}
          </Typography>
        </Link>

        <Typography
          id={"aside-podcast-author"}
          variant="subtitle1"
          color="text.secondary"
        >
          <i>by</i>{" "}
          <Link
            to={`/podcast/${podcast.id}`}
            style={{ textDecoration: "none" }}
          >
            {podcast?.author}
          </Link>
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
