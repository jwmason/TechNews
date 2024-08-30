const axios = require('axios');
const News = require('../models/News');

// Controller function to fetch tech news and save to database
const getTechNews = async (req, res) => {
  try {
    // Fetch tech news from News API
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        category: 'technology',
        apiKey: process.env.NEWS_API_KEY,
      },
    });

    const articles = response.data.articles;

    // Save each article to MongoDB
    for (let article of articles) {
      const newArticle = new News({
        title: article.title,
        description: article.description,
        url: article.url,
        publishedAt: article.publishedAt,
        content: article.content,
      });
      await newArticle.save();
    }

    // Respond with success message
    res.status(200).json({ message: 'Tech news fetched and saved to database' });
  } catch (err) {
    // Handle and respond to errors
    res.status(500).json({ message: 'Failed to fetch tech news', error: err.message });
  }
};

// Controller function to retrieve saved news from the database
const getSavedNews = async (req, res) => {
  try {
    // Fetch all news articles from MongoDB, sorted by publication date
    const news = await News.find().sort({ publishedAt: -1 });
    res.status(200).json(news);
  } catch (err) {
    // Handle and respond to errors
    res.status(500).json({ message: 'Failed to retrieve news', error: err.message });
  }
};

module.exports = { getTechNews, getSavedNews };
