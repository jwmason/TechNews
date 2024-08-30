// src/components/NewsItem.js
import React from 'react';

const NewsItem = ({ newsItem }) => {
  return (
    <li>
      <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
        <h2>{newsItem.title}</h2>
      </a>
      <p>{newsItem.description}</p>
      <p>{new Date(newsItem.publishedAt).toLocaleDateString()}</p>
    </li>
  );
};

export default NewsItem;
