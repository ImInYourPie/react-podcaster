import React from "react";

// Components
import PodcastItem from "./PodcastItem.component";

// MUI
import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import { usePodcasts } from "../hooks";

const PodcastList = () => {
  const { podcasts, search, loading, searchChange } = usePodcasts();

  const filteredPodcasts = podcasts.filter((podcast) => {
    const { name, author } = podcast;
    if (name.toLowerCase().includes(search.toLowerCase())) return podcast;
    if (author.toLowerCase().includes(search.toLowerCase())) return podcast;
  });

  const handleSearchChange = (e) => {
    const { value } = e.target;
    searchChange(value);
  };

  if (loading) return <></>;

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h5">{filteredPodcasts.length} podcasts</Typography>
        <TextField
          name="search"
          variant={"outlined"}
          onChange={handleSearchChange}
          value={search}
          margin={"dense"}
          size={"small"}
          color={"primary"}
          label={"Search..."}
        />
      </Box>
      <Box my={2}>
        <Divider />
      </Box>

      <Grid container spacing={2}>
        {filteredPodcasts.map((podcast) => (
          <Grid item xs={12} sm={6} md={3} key={podcast.id}>
            <PodcastItem podcast={podcast} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PodcastList;
