import { usePodcast } from "..";

// MUI
import { Box, Card, CardContent, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      display={"flex"}
      mx={2}
      mb={1}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box>
        <Typography variant="subtitle1" color={"text.secondary"}>
          Description
        </Typography>
      </Box>
      <Box display={"flex"} flexDirection={"row"}>
        <Typography variant="subtitle1" color={"text.secondary"} mx={2}>
          Date
        </Typography>
        <Typography variant="subtitle1" color={"text.secondary"}>
          Duration
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
