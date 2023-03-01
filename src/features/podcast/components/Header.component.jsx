import React from "react";

// Hooks
import { usePodcast } from "..";

// MUI
import { Box, Card, CardContent, Typography } from "@mui/material";

const Header = () => {
  const { episodesCount } = usePodcast();

  return (
    <Box mx={2} mb={1}>
      <Card id={"header"}>
        <CardContent>
          <Typography id={"header-count"} variant="h6" color={"primary"}>
            Episodes: {episodesCount}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Header;
