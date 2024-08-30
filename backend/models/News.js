const mongoose = require('mongoose');

// Define the schema for news articles
const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true },
  publishedAt: { type: Date, required: true },
  content: { type: String },
});

// Create a model for the 'news' collection using the schema
const News = mongoose.model('News', newsSchema);

module.exports = News;
