import "./blog.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./../../ui/Loader";
import ArticleList from "./../../components/articleList/ArticleList";
import PopularPosts from "./../../components/popularPosts/PopularPosts";
import AnswerToQuestions from "./../../components/answerToQuestions/AnswerToQuestions";
import PostSection from "./../../components/postSection/PostSection";
import PostTags from "./../../components/postTags/PostTags";
import ExtraPagesHeader from "./../../components/extraPagesHeader/ExtraPagesHeader";
import Pagination from "./../../helpers/Pagination";
import NotAvailable from "./../../helpers/NotAvailable";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categoryId, setCategoryId] = useState(null);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const fetchPosts = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const data = response.data;
      setPosts(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
    } catch (err) {
      setError("Xatolik yuz berdi! Iltimos, keyinroq tashrif buyuring");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const url = categoryId
      ? `https://api.yusro-tour.uz/api/v1/main/post/by-category/${categoryId}/?page=1&page_size=10`
      : "https://api.yusro-tour.uz/api/v1/main/post/?page=1&page_size=10";
    fetchPosts(url);
  }, [categoryId]);

  const handleNextPage = () => {
    if (nextPage) {
      fetchPosts(nextPage);
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      fetchPosts(prevPage);
    }
  };

  const handleCategorySelect = (selectedCategoryId) => {
    setCategoryId(selectedCategoryId);
  };

  return (
    <div className="blog">
      <ExtraPagesHeader title="Maqolalar" />
      <div className="container">
        {loading ? (
          <Loader />
        ) : error ? (
          <NotAvailable name={error} />
        ) : (
          <div className="posts">
            {posts?.length > 0 ? (
              <div className="blog-pagination">
                <ArticleList articles={posts} />
                <Pagination
                  previous={prevPage}
                  next={nextPage}
                  onPrevious={handlePrevPage}
                  onNext={handleNextPage}
                />
              </div>
            ) : (
              <NotAvailable name="Ma'lumot mavjud emas" />
            )}
          </div>
        )}
        <div className="blog-tags">
          <PopularPosts />
          <AnswerToQuestions />
          <PostSection onCategorySelect={handleCategorySelect} />
          <PostTags />
        </div>
      </div>
    </div>
  );
};

export default Blog;
