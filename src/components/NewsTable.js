import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const NewsTable = ({ entries }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="news table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Points</TableCell>
            <TableCell align="right">Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.entryId}>
              <TableCell component="th" scope="row">
                {entry.entryTitle}
              </TableCell>
              <TableCell align="right">{entry.entryPoints}</TableCell>
              <TableCell align="right">{entry.entryComments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewsTable;
