const express = require('express');
const router = express.Router();
const { getTechNews, getSavedNews } = require('../controllers/newsController');

// Route to fetch and save tech news
router.get('/technews', getTechNews);

// Route to retrieve saved news from the database
router.get('/savednews', getSavedNews);

module.exports = router;
