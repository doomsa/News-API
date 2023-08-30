# News API Service

This API interacts with the GNews API to fetch articles and provides added features like caching for efficient data retrieval.

## Table of Contents
- [Installation](#installation)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
  - [Fetch News](#fetch-news)

## Installation

1. Clone the repository:
```
git clone [YOUR_REPOSITORY_LINK]
```

2. Navigate to the project directory:
```
cd path/to/directory
```

3. Install the required packages:
```
npm install
```

## Running the API

To start the server, run the following command:

```
node server.js
```

##### Your server should start on port 3000. You'll see the following message: 


## API Endpoints

### Fetch News

**Endpoint:** `/fetch-news/:n`

**Method:** `GET`

**Description:** Fetches N number of news articles.

**Parameters:**

- `n` (in path): Number of articles to fetch.

**Response:**

- If successful, you'll receive an array of news articles.
- On error, you'll receive an error message.

**Example:**

Request:

GET /fetch-news/5


Response:

```json
[
    {
            "title": "",
            "description": "",
            "content": "",
            "url": "",
            "image": "",
            "publishedAt": "",
            "source": {
                "name": "",
                "url": ""
            }
        }
  // ... more articles
]
```


