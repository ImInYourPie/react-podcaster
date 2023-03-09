import React from "react";

// Components
import PodcastItemSkeleton from "./PodcastItem.skeleton";

// MUI
import { Box, Divider, Grid, Skeleton } from "@mui/material";

const PodcastListSkeleton = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Skeleton variant="text" width={"20%"} height={64} />
        <Skeleton width={"30%"} height={64} />
      </Box>
      <Box my={2}>
        <Divider />
      </Box>

      <Grid id={"podcast-list"} container spacing={2} sx={{ height: "50vh" }}>
        {new Array(24).fill({}).map((_, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <PodcastItemSkeleton />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PodcastListSkeleton;
