import React from "react";

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
  useTheme,
  useMediaQuery,
  Skeleton,
} from "@mui/material";

const EpisodesListSkeleton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box mx={isMobile ? 0 : 2}>
      <TableContainer component={Card}>
        <Table aria-label={`Loading skeleton for podcast table`}>
          <TableHead>
            <TableRow data-testid={"table-header"}>
              <TableCell>Title</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody id={"episode-list"}>
            {new Array(10).fill({}).map((_, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell width={"70%"} component="th" scope="row">
                  <Skeleton width={"100%"} />
                </TableCell>
                <TableCell align="right">
                  <Skeleton />
                </TableCell>
                <TableCell align="right">
                  <Skeleton />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EpisodesListSkeleton;
