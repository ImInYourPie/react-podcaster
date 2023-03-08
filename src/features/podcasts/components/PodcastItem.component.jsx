import { Link } from "react-router-dom";

// MUI
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const PodcastItem = ({ podcast }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <Link
        to={`/podcast/${podcast.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
        aria-label={`Go to ${podcast.name} podcast page`}
      >
        <CardActionArea sx={{ height: "100%" }}>
          <CardMedia
            component="img"
            image={podcast.image}
            alt={`Cover image for ${podcast.name} podcast`}
            aria-label={`Cover image for ${podcast.name} podcast`}
            sx={{ objectFit: "cover", height: 173 }} // set aspect ratio for image
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              fontSize={"1rem"}
              gutterBottom
              variant="subtitle2"
              noWrap
            >
              {podcast.author}
            </Typography>
            <Typography
              className="podcast-name"
              variant="body2"
              color="text.secondary"
              fontSize={"0.8rem"}
              noWrap
            >
              {podcast.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default PodcastItem;
