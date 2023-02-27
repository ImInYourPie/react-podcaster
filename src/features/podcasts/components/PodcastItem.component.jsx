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
    <Card>
      <Link
        to={`/podcast/${podcast.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
        aria-label={`Go to ${podcast.name} podcast page`}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={podcast.image}
            alt={`Cover image for ${podcast.name} podcast`}
            aria-label={`Cover image for ${podcast.name} podcast`}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1">
              {podcast.author}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {podcast.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default PodcastItem;
