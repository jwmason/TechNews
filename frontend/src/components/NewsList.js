// src/components/NewsList.js
import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
  return (
    <div>
      {news.length === 0 ? (
        <p>No news available.</p>
      ) : (
        <ul>
          {news.map((item) => (
            <NewsItem key={item.url} newsItem={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsList;
