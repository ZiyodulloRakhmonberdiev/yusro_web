import React, { useState, useCallback, useEffect } from 'react';
import './PopularPosts.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from './../../ui/Loader';
import { formatDate } from '../../utils/formatDate';

const PopularPosts = ({ page, pageSize }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInitiated, setSearchInitiated] = useState(false);
  const navigate = useNavigate();

  // Fetch all articles to sort by views
  const fetchPopularArticles = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/post/articles/?page_size=10000`);
      const allArticles = response.data.results;
      const sortedArticles = allArticles.sort((a, b) => b.views - a.views).slice(0, 10);
      setPopularArticles(sortedArticles);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  // Search articles
  const handleSearch = useCallback(async () => {
    if (searchQuery.trim() === '') {
      resetSearch();
      return;
    }

    try {
      setLoading(true);
      setSearchInitiated(true); // Mark that a search has been initiated
      const response = await axios.get(`/post/articles/?search=${searchQuery}`);
      setSearchResults(response.data.results);
      setLoading(false);
    } catch (error) {
      setError('Search error:', error);
      setLoading(false);
    }
  }, [searchQuery]);

  // Reset search to display popular articles
  const resetSearch = () => {
    setSearchResults([]);
    setSearchInitiated(false);
  };

  useEffect(() => {
    fetchPopularArticles();
  }, [fetchPopularArticles]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      resetSearch();
    }
  }, [searchQuery]);

  const handleArticleClick = (id) => {
    navigate(`/article/${id}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <div className='popular-posts'>
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
          <div className="tile">Ommabop postlar</div>
          {error && <div className="error">{error}</div>}
          {searchInitiated && searchResults.length === 0 ? (
            <div className="no-results">Ma'lumot topilmadi</div>
          ) : (
            searchResults.length > 0 ? (
              searchResults.map((article) => (
                <div className="article-item item" key={article.id} onClick={() => handleArticleClick(article.id)}>
                  {article.image_path ? <img src={article.image_path} alt="" /> : <iframe src={article.video_url} title="Umra ziyorati: ko‘zga ko‘rinmaydigan jihatlar haqida 10 ta maslahat" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                  <div className="info">
                    <div className="name">{article.title}</div>
                    <span>{formatDate(article.created_at)}</span>
                  </div>
                </div>
              ))
            ) : (
              popularArticles.map((article) => (
                <div className="article-item item" key={article.id} onClick={() => handleArticleClick(article.id)}>
                  <img src={article.image_path} alt="" />
                  <div className="info">
                    <div className="name">{article.title}</div>
                    <span>{formatDate(article.created_at)}</span>
                  </div>
                </div>
              ))
            )
          )}
        </div>
      )}
    </div>
  );
};

export default PopularPosts;
