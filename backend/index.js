const express = require('express');
const app = express();
const connectDB = require('./config/db');
const newsRoutes = require('./routes/newsRoutes');
const cors = require('cors');

// Load environment variables from .env file
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

// Use news routes
app.use('/api', newsRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
