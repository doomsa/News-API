const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');

const app = express();
const PORT = 3000;
const myCache = new NodeCache();

/**
 * Starts the Express server.
 *
 * @listens {PORT}
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/**
 * Fetches N number of news articles.
 *
 * @route GET /fetch-news/:n
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @param {number} req.params.n - Number of articles to fetch.
 * @returns {Object[]} Array of news articles or error message.
 */
app.get('/fetch-news/:n', async (req, res) => {
    const n = req.params.n;
    const cacheKey = `fetch-news-${n}`;
    
    // Check cache
    const cachedNews = myCache.get(cacheKey);
    if (cachedNews) return res.json(cachedNews);

    // Fetch from GNews API
    try {
        const response = await axios.get(`https://gnews.io/api/v4/search?q=example&lang=en&country=us&apikey=1b1653e89dc65b650aa588c35046d7e9&max=${n}`);  // Use correct endpoint
        myCache.set(cacheKey, response.data, 3600);  // Cache for 1 hour
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch news' });
    }
});
