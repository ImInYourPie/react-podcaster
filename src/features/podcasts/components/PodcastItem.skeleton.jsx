// MUI
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Skeleton,
} from "@mui/material";

const PodcastItemSkeleton = () => {
  return (
    <Card sx={{ height: "100%" }}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        height={173}
      >
        <Skeleton variant={"rectangle"} width={"100%"} height={"100%"} />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </CardContent>
    </Card>
  );
};

export default PodcastItemSkeleton;
