const express = require('express');
const router = express.Router();
const { getTechNews, getSavedNews } = require('../controllers/newsController');

// Route to fetch tech news and save to database
router.get('/technews', getTechNews);

// Route to get saved news from database
router.get('/savednews', getSavedNews);

module.exports = router;
