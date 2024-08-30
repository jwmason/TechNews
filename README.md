# Tech News App

## Project Overview
This project is a full-stack web application that fetches tech news from the News API, stores it in a MongoDB database, and displays it using a React frontend. The application demonstrates API integration, database management, and data presentation.

## Features
- Fetch tech news articles using the News API.
- Store news articles in MongoDB.
- Display the articles in an engaging and responsive React UI.

## Tech Stack
- **Frontend:** React, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose

## Setup Instructions
1. Clone the repository:
    ```bash
    git clone https://github.com/jwmason/Tech-News.git
    ```
2. Navigate to the project directory:
    ```bash
    cd tech-news-app
    ```
3. Set up the backend:
    - Navigate to the backend directory:
      ```bash
      cd backend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` file in the `backend` directory with the following content:
      ```
      MONGO_URI=your_mongo_connection_string
      NEWS_API_KEY=your_news_api_key
      PORT=your_port
      ```
    - Start the backend server:
      ```bash
      npm start
      ```

4. Set up the frontend:
    - Navigate to the frontend directory:
      ```bash
      cd frontend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Start the React app:
      ```bash
      npm start
      ```

5. Open your browser and go to `http://localhost:3000` to view the application.

