import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import personalizedStyles from '../styles/personalizedStyles';

const NewsTable = ({ entries }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="news table">
        <TableHead>
          <TableRow>
            <TableCell sx={personalizedStyles.tableTitle}>Title</TableCell>
            <TableCell sx={personalizedStyles.tableTitle} align="right">Points</TableCell>
            <TableCell sx={personalizedStyles.tableTitle} align="right">Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.entryId}>
              <TableCell sx={personalizedStyles.tableEntries} component="th" scope="row">
              <strong>{entry.entryId}.</strong>&nbsp;{entry.entryTitle}
              </TableCell>
              <TableCell sx={personalizedStyles.tableEntries} align="right">{entry.entryPoints}</TableCell>
              <TableCell sx={personalizedStyles.tableEntries} align="right">{entry.entryComments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewsTable;
