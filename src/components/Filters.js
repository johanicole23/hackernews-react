import React from 'react';
import { Button, ButtonGroup, ThemeProvider } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import RefreshIcon from '@mui/icons-material/Refresh';
import { theme } from '../styles/myGeneralTheme';
import personalizedStyles from '../styles/personalizedStyles';

const Filters = ({ onFilter }) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonGroup sx={{mb:'2rem'}}>
        <Button
          variant="contained"
          onClick={() => onFilter('normal')}
          sx={personalizedStyles.buttonFilter1}
        > <RefreshIcon /></Button>
        <Button
          variant="contained"
          onClick={() => onFilter('lessThanFive')}
          sx={personalizedStyles.buttonFilter2}
          startIcon={<FilterListIcon />}
        > Less than 5</Button>
        <Button
          variant="contained"
          onClick={() => onFilter('moreThanFive')}
          sx={personalizedStyles.buttonFilter3}
          startIcon={<FilterListIcon />}
        >More Than 5 </Button>

      </ButtonGroup>
    </ThemeProvider>

  );
};

export default Filters;
