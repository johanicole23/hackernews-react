import axios from 'axios';

export const fetchEntries = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/entries');
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API", error);
    return null;
  }
};
