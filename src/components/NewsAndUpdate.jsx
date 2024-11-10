
import React, { useEffect, useState } from 'react';
import './newAndUpdates.css'

const NewsAndUpdates = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=drug+abuse&apiKey=a4aed603f5344cd1a600322de2a1e311&pageSize=20`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="news-container">
      <h2>Drug Abuse News And Articles</h2>
      <div className="news-grid">
        {articles.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          articles.map((article, index) => (
            <div className="news-tile" key={index}>
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="news-image" />
              )}
              <h3 className="news-title">{article.title}</h3>
              <p className="news-description">{article.description || 'No description available.'}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Read more</a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};





export default NewsAndUpdates;