import React from "react";

// MUI
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const EpisodeSkeleton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box mx={isMobile ? 0 : 2}>
      <Card>
        <CardContent>
          <Skeleton variant="text" height={82} width={"80%"} />

          {new Array(6).fill({}).map((_, index) => (
            <Skeleton
              key={index}
              variant="text"
              width={index === 5 ? "70%" : "100%"}
            />
          ))}
          <Box mt={1}>
            <Skeleton width={"100%"} height={64} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EpisodeSkeleton;
