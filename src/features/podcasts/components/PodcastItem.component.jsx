import React from "react";
import PropTypes from "prop-types";

// MUI
import { Card, CardContent, Typography } from "@mui/material";

const PodcastItem = ({ podcast, ...rest }) => {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography variant="h5" color="text.primary">
          {podcast.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {podcast.author}
        </Typography>
      </CardContent>
    </Card>
  );
};

PodcastItem.propTypes = {
  podcast: PropTypes.object.isRequired,
};

export default PodcastItem;
