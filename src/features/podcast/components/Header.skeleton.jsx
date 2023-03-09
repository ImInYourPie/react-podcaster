import React from "react";

// MUI
import {
  Box,
  Card,
  CardContent,
  Skeleton,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const HeaderSkeleton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box mx={isMobile ? 0 : 2} mb={1} mt={isMobile ? 2 : 0}>
      <Card id={"header"}>
        <CardContent sx={{ padding: "16px !important" }}>
          <Skeleton variant={"text"} width={"35%"} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default HeaderSkeleton;
