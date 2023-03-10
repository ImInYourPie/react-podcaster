import React from "react";

// Components
import PodcastItem from "./PodcastItem.component";

// MUI
import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import { usePodcasts } from "../hooks";

const PodcastList = () => {
  const { podcasts, search, searchChange } = usePodcasts();

  const filteredPodcasts = podcasts.filter((podcast) => {
    const { name, author } = podcast;
    if (name.toLowerCase().includes(search.toLowerCase())) return podcast;
    if (author.toLowerCase().includes(search.toLowerCase())) return podcast;
  });

  const handleSearchChange = (e) => {
    const { value } = e.target;
    searchChange(value);
  };

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography id={"podcast-count"} variant="h5">
          {filteredPodcasts.length} podcasts
        </Typography>
        <TextField
          name="search"
          aria-label="Search bar"
          variant={"outlined"}
          onChange={handleSearchChange}
          value={search}
          margin={"dense"}
          size={"small"}
          color={"primary"}
          label={"Search"}
          placeholder={"Search for a podcast..."}
        />
      </Box>
      <Box my={2}>
        <Divider />
      </Box>

      <Grid id={"podcast-list"} container spacing={2}>
        {filteredPodcasts.length > 0 ? (
          filteredPodcasts.map((podcast) => (
            <Grid item xs={12} sm={6} md={2} key={podcast.id}>
              <PodcastItem className={"podcast-item"} podcast={podcast} />
            </Grid>
          ))
        ) : (
          <Box
            display={"flex"}
            width={"100vw"}
            height={"300px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            No results
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default PodcastList;
