import "./postSection.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "./../../hooks/useFetch";
import BlogArticle from "../../service/blog";
import Loader from "../../ui/Loader";

function PostSection({ onCategorySelect }) {
  const {
    data: sections,
    loading,
    error,
  } = useFetch(BlogArticle.fetchArticleSection);
  const handleCategorySelect = (categoryId) => {
    if (onCategorySelect) {
      onCategorySelect(categoryId);
    }
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, handleCategorySelect]);

  return (
    <div className="post-section">
      <div className="title">Bo'limlar</div>
      <div className="items">
        {loading ? (
          <Loader />
        ) : error ? (
          <span>{error.message}</span>
        ) : sections ? (
          sections.results.map((item) => (
            <div
              key={item.id}
              className="item"
              onClick={() => handleCategorySelect(item.id)}
            >
              <div className="name">
                <i className="fa-solid fa-arrow-right"></i>
                <span>{item.name}</span>
              </div>
            </div>
          ))
        ) : (
          <p>Ma'lumot mavjud emas</p>
        )}
      </div>
    </div>
  );
}

export default PostSection;
