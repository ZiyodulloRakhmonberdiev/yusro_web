import "./readArticle.css";
import { useParams } from "react-router-dom";
import BlogArticle from "./../../service/blog";
import ExtraPagesHeader from "./../extraPagesHeader/ExtraPagesHeader";
import useFetch from "./../../hooks/useFetch";
import { formatDate } from "../../utils/formatDate";
import PopularPosts from "../popularPosts/PopularPosts";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function ReadArticle() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [totalComments, setTotalComments] = useState(0);
  const [subComments, setSubComments] = useState({});
  const [loading, setLoading] = useState(false);
  const [replyForm, setReplyForm] = useState({ visible: false, parentId: null });
  const [formData, setFormData] = useState({ name: "", text: "" });

  const {
    data: article,
    loading: articleLoading,
    error,
  } = useFetch(() => BlogArticle.readArticle(id));

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Nusxalashda muammo yuz berdi", err));
  };

  const fetchComments = async (pageNum) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://95.46.96.78:7777/api/v1/main/comments/by-post/${id}/`,
        {
          params: { page: pageNum, limit: 5 },
        }
      );
      setComments((prevComments) =>
        pageNum === 1
          ? response.data.results
          : [...prevComments, ...response.data.results]
      );
      setTotalComments(response.data.total);
    } catch (error) {
      console.error("Izohlarni olishda xato yuz berdi!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments(page);
  }, [id, page]);

  const handleShowReplies = async (commentId) => {
    if (subComments[commentId]) {
      setSubComments((prev) => {
        const updated = { ...prev };
        delete updated[commentId];
        return updated;
      });
      return;
    }

    try {
      const response = await axios.get(
        `http://95.46.96.78:7777/api/v1/main/comments/by-comment/${commentId}/`
      );
      setSubComments((prev) => ({
        ...prev,
        [commentId]: response.data.results || [],
      }));
    } catch (error) {
      console.error("Javob izohlarni olishda xato yuz berdi!");
    }
  };

  const handleLoadMore = () => {
    if (comments.length < totalComments) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleReplyClick = (parentId) => {
    setReplyForm((prev) => ({
      visible: prev.parentId !== parentId ? true : !prev.visible,
      parentId: parentId,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, text } = formData;

    if (!name || !text) return;

    try {
      await axios.post(
        `http://95.46.96.78:7777/api/v1/main/comment-create/`,
        {
          post: id,
          parent: replyForm.parentId,
          full_name: name,
          text: text,
        }
      );

      // Clear form data
      setFormData({ name: "", text: "" });
      setReplyForm({ visible: false, parentId: null });

      // Refresh comments
      fetchComments(page);
    } catch (error) {
      console.error("Izoh yuborishda xato yuz berdi!");
    }
  };

  const renderComments = (comments) => {
    return comments.map((comment) => (
      <div className="comment" key={uuidv4()}>
        <div className="comment-author">
          <strong>{comment.full_name}</strong>
        </div>
        <div className="comment-content">
          <p>{comment.text}</p>
          <span className="comment-date">{formatDate(comment.created_at)}</span>
          <button onClick={() => handleShowReplies(comment.id)}>
            {subComments[comment.id] ? "Yashirish" : "Javoblarni ko'rsatish"}
          </button>
          <button onClick={() => handleReplyClick(comment.id)}>
            {replyForm.visible && replyForm.parentId === comment.id ? "Bekor qilish" : "Javob berish"}
          </button>
          {replyForm.visible && replyForm.parentId === comment.id && (
            <form className="reply-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Foydalanuvchi ismi"
                value={formData.name}
                onChange={handleChange}
              />
              <textarea
                name="text"
                placeholder="Izoh matni"
                value={formData.text}
                onChange={handleChange}
              />
              <button type="submit">Yuborish</button>
            </form>
          )}
          {subComments[comment.id] && subComments[comment.id].length > 0 && (
            <div className="sub-comments">
              {subComments[comment.id].map((subComment) => (
                <div className="sub-comment" key={uuidv4()}>
                  <div className="comment-author">
                    <strong>{subComment.full_name}</strong>
                  </div>
                  <div className="comment-content">
                    <p>{subComment.text}</p>
                    <span className="comment-date">
                      {formatDate(subComment.created_at)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className="read-article blog">
      <ExtraPagesHeader title={article?.name} />
      <div className="container">
        <div className="article-info">
          <div className="item" key={article?.id}>
            <div className="header-image">
              <img src={article?.image} alt="" />
              <span className="created-date">
                {formatDate(article?.created_at)}
              </span>
            </div>
            <div className="header-title">
              <div className="tags">
                <i className="fa-solid fa-tag"></i>
                {article?.post_tag?.map((tag) => (
                  <span className="tag" key={uuidv4()}>
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="info">
              <div className="title">{article?.name}</div>
              <div className="intro-text">
                <i className="fa-solid fa-quote-right"></i>
                <p>{article?.post_slogan}</p>
                <span>Yusro Tour</span>
              </div>
              <div className="description">{article?.post_content}</div>
            </div>
            <div className="extra-info">
              <div>
                <span>Teglar:</span>{" "}
                {article?.post_tag?.map((tag) => (
                  <span className="tag" key={uuidv4()}>
                    {tag.name}
                  </span>
                ))}
              </div>
              <p onClick={handleCopyLink}>
                <span>Bu postni ulashish</span>
                <i className="fa-solid fa-link"></i>
                {copied && <p className="copied">Nusxalandi</p>}
              </p>
            </div>
            {comments.length > 0 && (
              <div className="comments-section">
                <h2 className="comments-main">Izohlar: ({comments.length})</h2>
                {renderComments(comments)}
                {comments.length < totalComments && (
                  <button onClick={handleLoadMore} disabled={loading}>
                    {loading ? "Yuklanmoqda..." : "Yana izohlar yuklash"}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="blog-tags">
          <PopularPosts />
        </div>
      </div>
    </div>
  );
}

export default ReadArticle;
