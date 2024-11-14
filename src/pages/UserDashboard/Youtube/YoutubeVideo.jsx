import React, { useEffect, useState } from "react";

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "AIzaSyC7RaknLbIErFutAgNRGQ3QypspcX5yrOs"; // Replace with your YouTube API key
  const QUERY = "drug abuse dangers";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
            QUERY
          )}&key=${API_KEY}&type=video&maxResults=10`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        setVideos(data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [API_KEY]);

  if (loading) {
    return <div>Loading videos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="text-center">YouTube Videos on Drug Abuse Dangers</h1>
      <div className="row">
        {videos.map((video) => (
          <div key={video.id.videoId} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{video.snippet.title}</h5>
                <p className="card-text">{video.snippet.description}</p>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideos;
