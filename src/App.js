import React, { useEffect, useState } from 'react';
import { fetchEntries } from './services/apiService';
import { Box} from '@mui/material';
import NewsTable from './components/NewsTable';
import Filters from './components/Filters';
import Loader from './components/Loader';
import ResponsiveAppBar from './components/general/ResponsiveAppBar';
import personalizedStyles from './styles/personalizedStyles';

function App() {
  const [entries, setEntries] = useState({ normalEntries: [], lessThanFive: [], moreThanFive: [] });
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEntries = async () => {
      const data = await fetchEntries();
      if (data) {
        setEntries(data);
        setFilteredEntries(data.normalEntries);
      }
      setLoading(false);
    };

    getEntries();
  }, []);

  const handleFilter = (filterType) => {
    if (filterType === 'lessThanFive') {
      setFilteredEntries(entries.lessThanFive);
    } else if (filterType === 'moreThanFive') {
      setFilteredEntries(entries.moreThanFive);
    } else {
      setFilteredEntries(entries.normalEntries); // Default
    }
  };

  return (
    <div>
      {loading ? <Loader /> : (
        <>
          {/* <Filters onFilter={handleFilter} />
          <NewsTable entries={filteredEntries} /> */}
          <ResponsiveAppBar />
          <Box sx={personalizedStyles.appGeneralBox}>
            <Filters onFilter={handleFilter} />
            <NewsTable entries={filteredEntries} />
          </Box>
        </>
      )}
    </div>
  );
}

export default App;
