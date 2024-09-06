import "./articleList.css";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import NotAvailable from "../../helpers/NotAvailable";
import { v4 as uuidv4 } from "uuid";

// Function to truncate the description of the article
const truncateDescription = (description, limit) => {
  const words = description.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return description;
};

const ArticleList = ({ articles }) => {
  return (
    <div className="article-lists">
      <div className="items">
        {articles?.length > 0 ? (
          articles.map((article) => (
            <div className="item" key={uuidv4()}>
              <div className="header-image">
                <img src={article.image} alt={article.name || "Article"} />
              </div>
              <div className="header-title">
                <div className="tags">
                  <i className="fa-solid fa-tag"></i>
                  {article.post_tag &&
                    article.post_tag.map((tag) => (
                      <span key={uuidv4()}>{tag.name}</span>
                    ))}
                </div>
              </div>
              <div className="info">
                <div className="title">{article.name}</div>
                <div className="description">
                  {truncateDescription(article.post_content, 50)}
                </div>
                <Link to={`/main/post/${article.id}`}>
                  To'liq maqolani o'qish{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <span className="created-date">
                  {formatDate(article.created_at)}
                </span>
              </div>
            </div>
          ))
        ) : (
          <NotAvailable name="Ma'lumot mavjud emas" />
        )}
      </div>
    </div>
  );
};

export default ArticleList;
