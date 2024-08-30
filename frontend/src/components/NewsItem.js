import React from 'react';
import './NewsItem.css';

const NewsItem = ({ title, description, url, imageUrl, source }) => {
  return (
    <div className="news-item">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="news-item-image" />
      )}
      <div className="news-item-content">
        <h3 className="news-item-title">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="news-item-description">{description}</p>
        {source && source.name && (
          <p className="news-item-source">Source: {source.name}</p>
        )}
      </div>
    </div>
  );
};

export default NewsItem;
