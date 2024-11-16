import React, { useState, useEffect } from "react";
import axios from "axios";

function TopStoriesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async (query) => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=63287f29ebc94d35ad6457cdb1531712`
      );
      setArticles(response.data.articles);
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>Top Stories</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopStoriesPage;
