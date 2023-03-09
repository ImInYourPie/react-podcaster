import React from "react";
import { Link } from "react-router-dom";

// Hooks
import { usePodcast } from "..";

// MUI
import {
  Card,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const EpisodesList = () => {
  const { episodes, podcast } = usePodcast();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box mx={isMobile ? 0 : 2}>
      <TableContainer component={Card}>
        <Table aria-label={`Table of episodes from "${podcast.title}" podcast`}>
          <TableHead>
            <TableRow data-testid={"table-header"}>
              <TableCell>Title</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody id={"episode-list"}>
            {episodes.map((episode) => (
              <TableRow
                data-testid={"episode-row"}
                key={episode.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell data-testid={"row-title"} component="th" scope="row">
                  <Link
                    className={"episode-title"}
                    style={{ textDecoration: "none" }}
                    to={`episode/${episode.id}`}
                  >
                    <Typography>{episode.title}</Typography>
                  </Link>
                </TableCell>
                <TableCell data-testid={"row-date"} align="right">
                  {episode.date}
                </TableCell>
                <TableCell data-testid={"row-duration"} align="right">
                  {episode.duration}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EpisodesList;
