import React, { useState, useEffect } from 'react';
import { fetchNews, fetchSavedNews } from './services/api';
import NewsList from './components/NewsList';

function App() {
  const [news, setNews] = useState([]);
  const [savedNews, setSavedNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch saved news on initial render
  useEffect(() => {
    const loadSavedNews = async () => {
      try {
        const data = await fetchSavedNews();
        setSavedNews(data);
      } catch (err) {
        setError('Error fetching saved news');
      }
    };
    loadSavedNews();
  }, []);

  // Fetch and update news
  const handleFetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNews();
      // Remove duplicates
      const uniqueData = Array.from(new Set(data.map(item => item.title)))
        .map(title => data.find(item => item.title === title));
      setNews(uniqueData);
    } catch (err) {
      setError('Error fetching news');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Tech News</h1>
      <button onClick={handleFetchNews} disabled={loading}>
        {loading ? 'Fetching...' : 'Fetch News'}
      </button>
      {error && <p>{error}</p>}
      <NewsList news={news} />
      <h2>Saved News</h2>
      <NewsList news={savedNews} />
    </div>
  );
}

export default App;
