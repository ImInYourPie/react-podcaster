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
} from "@mui/material";

const EpisodesList = () => {
  const { episodes, podcast } = usePodcast();
  console.log(episodes.length);

  return (
    <Box mx={2}>
      <TableContainer component={Card}>
        <Table aria-label={`Table of episodes from "${podcast.title}" podcast`}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodes.map((episode) => (
              <TableRow
                key={episode.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`episode/${episode.id}`}
                  >
                    <Typography>{episode.title}</Typography>
                  </Link>
                </TableCell>
                <TableCell align="right">{episode.date}</TableCell>
                <TableCell align="right">{episode.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EpisodesList;
