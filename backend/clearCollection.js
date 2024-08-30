const mongoose = require('mongoose');
const News = require('./models/News'); // Adjust the path to your News model

mongoose.connect('mongodb://localhost:27017/Cluster0');

async function clearCollection() {
  try {
    await News.deleteMany({});
    console.log('Collection cleared');
  } catch (err) {
    console.error('Error clearing collection:', err);
  } finally {
    mongoose.connection.close();
  }
}

clearCollection();
