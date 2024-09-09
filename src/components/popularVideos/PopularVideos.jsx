import React, { useState, useCallback, useEffect } from "react";
import "./PopularVideos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";
import { formatDate } from "../../utils/formatDate";

const PopularVideos = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [popularVideos, setPopularVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInitiated, setSearchInitiated] = useState(false);
  const navigate = useNavigate();

  // Fetch all Videos to sort by views
  const fetchPopularVideos = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get("/main/video/?page_size=10000");
      const allVideos = response.data.results;
      setPopularVideos(allVideos);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Search articles
  const handleSearch = useCallback(async () => {
    if (searchQuery.trim() === "") {
      resetSearch();
      return;
    }

    try {
      setLoading(true);
      setSearchInitiated(true); // Mark that a search has been initiated
      const response = await axios.get(`/main/video/?search=${searchQuery}`);
      setSearchResults(response.data.results);
    } catch (error) {
      setError("Search error: " + error.message);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  // Reset search to display popular articles
  const resetSearch = () => {
    setSearchResults([]);
    setSearchInitiated(false);
  };

  useEffect(() => {
    fetchPopularVideos();
  }, [fetchPopularVideos]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      resetSearch();
    }
  }, [searchQuery]);

  const handleArticleClick = (id) => {
    navigate(`/main/video/${id}/`);
    window.location.reload();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <div className="popular-posts">
      <div className="search-post">
        <input
          type="text"
          placeholder="Kalit so'zni kiriting..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <i className="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="items">
          <div className="tile">Ommabop videolar</div>
          {error && <div className="error">{error}</div>}
          {searchInitiated && searchResults.length === 0 ? (
            <div className="no-results">Ma'lumot topilmadi</div>
          ) : (
            (searchResults.length > 0 ? searchResults : popularVideos).map(
              (article) => (
                <div
                  className="article-item item"
                  key={article.id}
                  onClick={() => handleArticleClick(article.id)}
                >
                  {article.image ? (
                    <img src={article.image} alt="" />
                  ) : (
                    <iframe
                      src={article.video}
                      title={article.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  )}
                  <div className="info">
                    <div className="name">{truncateText(article.name, 40)}</div>
                    <span>{formatDate(article.created_at)}</span>
                  </div>
                </div>
              )
            )
          )}
        </div>
      )}
    </div>
  );
};

export default PopularVideos;
