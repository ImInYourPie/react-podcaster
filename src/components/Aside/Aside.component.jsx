import React from "react";
import { Link as RouterLink } from "react-router-dom";

// MUI
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  Link,
} from "@mui/material";
import { usePodcast } from "@features/podcast";

const Aside = () => {
  const { podcast, loading } = usePodcast();

  if (loading) return <></>;

  return (
    <Card id={"aside"}>
      <RouterLink to={`/podcast/${podcast.id}`}>
        <CardMedia
          component="img"
          id={"aside-podcast-image"}
          image={podcast.image}
          alt={`Cover image for ${podcast.title} podcast`}
          aria-label={`Cover image for ${podcast.title} podcast`}
        />
      </RouterLink>
      <CardContent>
        <Link
          component={RouterLink}
          to={`/podcast/${podcast.id}`}
          underline={"hover"}
        >
          {podcast?.title}
        </Link>

        <Typography
          id={"aside-podcast-author"}
          variant="subtitle1"
          color="text.secondary"
        >
          <i>by</i>{" "}
          <Link
            component={RouterLink}
            to={`/podcast/${podcast.id}`}
            underline={"hover"}
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
        <Typography
          dangerouslySetInnerHTML={{ __html: podcast?.description }}
        />
      </CardContent>
    </Card>
  );
};

export default Aside;
