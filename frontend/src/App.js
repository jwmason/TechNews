import React, { useState, useEffect } from 'react';
import { fetchNews, fetchSavedNews } from './services/api';
import NewsList from './components/NewsList';

function App() {
  const [savedNews, setSavedNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10); // Number of articles per page

  useEffect(() => {
    const loadSavedNews = async () => {
      try {
        const data = await fetchSavedNews();
        setSavedNews(data);
      } catch (err) {
        console.error('Error fetching saved news:', err);
      }
    };
    loadSavedNews();
  }, []);

  const handleFetchNews = async () => {
    setLoading(true);
    try {
      const data = await fetchNews();
      console.log('Fetched news data:', data); // Check the data structure
      // Remove duplicates by title
      const uniqueData = Array.from(new Set(data.map(item => item.title)))
        .map(title => data.find(item => item.title === title));
      // Since news is no longer used, we simply log the uniqueData
      console.log('Unique news data:', uniqueData);
    } catch (err) {
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };

  // Calculate current articles based on page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = savedNews.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(savedNews.length / articlesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Tech News</h1>
        <button onClick={handleFetchNews} disabled={loading}>
          {loading ? 'Updating...' : 'Update News'}
        </button>
      </div>
      <NewsList news={currentArticles} />
      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
