import React, { useEffect, useState } from 'react';
import { fetchEntries } from './services/apiService';
import NewsTable from './components/NewsTable';
import Filters from './components/Filters';
import Loader from './components/Loader';

function App() {
  const [entries, setEntries] = useState({ normalEntries: [], lessThanFive: [], moreThanFive: [] });
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEntries = async () => {
      const data = await fetchEntries();
      if (data) {
        setEntries(data);
        setFilteredEntries(data.normalEntries);  // Default entries
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
          <Filters onFilter={handleFilter} />
          <NewsTable entries={filteredEntries} />
        </>
      )}
    </div>
  );
}

export default App;
