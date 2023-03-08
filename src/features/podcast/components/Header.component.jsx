import React from "react";

// Hooks
import { usePodcast } from "..";

// MUI
import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Header = () => {
  const { episodesCount } = usePodcast();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box mx={isMobile ? 0 : 2} mb={1} mt={isMobile ? 2 : 0}>
      <Card id={"header"}>
        <CardContent sx={{ padding: "16px !important" }}>
          <Typography id={"header-count"} variant="h6" color={"primary"}>
            Episodes: {episodesCount}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Header;
