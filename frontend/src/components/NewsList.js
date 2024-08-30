import React from 'react';
import NewsItem from './NewsItem';
import './NewsList.css';

const NewsList = ({ news }) => {
  if (!news || news.length === 0) {
    return <p>No news articles available.</p>;
  }

  return (
    <div className="news-list">
      {news.map((article, index) => (
        <NewsItem
          key={index}
          title={article.title}
          description={article.description}
          url={article.url}
          imageUrl={article.urlToImage}
          source={article.source || {}}  // Provide a default empty object if source is undefined
        />
      ))}
    </div>
  );
};

export default NewsList;
