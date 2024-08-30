import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/technews';

// Fetch news from the backend
export const fetchNews = async (query) => {
  try {
    const response = await axios.get(API_URL, { params: { query } });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

// Fetch all saved news from the backend
export const fetchSavedNews = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/savednews');
    return response.data;
  } catch (error) {
    console.error('Error fetching saved news:', error);
    throw error;
  }
};
