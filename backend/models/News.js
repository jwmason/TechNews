const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: {
    type: String,
    unique: true, // Ensures the URL field is unique
  },
  publishedAt: Date,
  content: String,
});

// Create a unique index on the URL field
newsSchema.index({ url: 1 }, { unique: true });

const News = mongoose.model('News', newsSchema);

module.exports = News;
