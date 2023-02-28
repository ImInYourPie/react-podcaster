import React from "react";

// MUI
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

const Aside = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={""}
          alt={`Cover image for ${""} podcast`}
          aria-label={`Cover image for ${""} podcast`}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1">
            test
          </Typography>
          <Typography variant="body1" color="text.secondary">
            test
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Aside;
