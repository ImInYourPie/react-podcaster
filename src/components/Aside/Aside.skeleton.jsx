import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  Skeleton,
} from "@mui/material";

const PodcastCardSkeleton = () => {
  return (
    <Card id={"aside"}>
      <CardContent>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={374}
          height={374}
        >
          <Skeleton variant={"rectangle"} width={"100%"} height={"100%"} />
        </Box>
        <Skeleton variant={"text"} width={"80%"} height={32} />

        <Typography
          id={"aside-podcast-author"}
          variant="subtitle1"
          color="text.secondary"
        >
          <Skeleton variant={"text"} width={"50%"} />
        </Typography>

        <Box my={1}>
          <Divider />
        </Box>
        <Typography variant="subtitle1" color={"text.secondary"}>
          <Skeleton variant={"text"} width={"30%"} />
        </Typography>
        <Typography>
          <Skeleton variant={"text"} width={"100%"} height={100} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PodcastCardSkeleton;
