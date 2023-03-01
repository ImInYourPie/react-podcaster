// @Deprecated

import React from "react";
import { Link } from "react-router-dom";

// MUI
import { Box, Typography } from "@mui/material";

const EpisodeItem = ({ episode }) => {
  return (
    <Box
      mx={2}
      my={1}
      display={"flex"}
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Link style={{ textDecoration: "none" }} to={`episode/${episode.id}`}>
        <Typography>{episode.title}</Typography>
      </Link>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <Typography variant="subtitle2" mx={2}>
          {episode.date}
        </Typography>
        <Typography variant="subtitle2" color={"text.secondary"}>
          {episode.duration}
        </Typography>
      </Box>
    </Box>
  );
};

export default EpisodeItem;
