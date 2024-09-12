import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

const Filters = ({ onFilter }) => {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={() => onFilter('normal')}>Normal Entries</Button>
      <Button onClick={() => onFilter('lessThanFive')}>Less Than 5 Words</Button>
      <Button onClick={() => onFilter('moreThanFive')}>More Than 5 Words</Button>
    </ButtonGroup>
  );
};

export default Filters;
