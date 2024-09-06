import "./readArticle.css";
import { useParams } from "react-router-dom";
import BlogArticle from "./../../service/blog";
import ExtraPagesHeader from "./../extraPagesHeader/ExtraPagesHeader";
import useFetch from "./../../hooks/useFetch";
import { formatDate } from "../../utils/formatDate";
import PopularPosts from "../popularPosts/PopularPosts";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CommentsSection from "../commentsSection/CommentsSection";
import AnswerToQuestions from "../answerToQuestions/AnswerToQuestions";
import CommentForm from "../commentPost/CommentForm";

function ReadArticle() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

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
              {article?.post_slogan && (
                <div className="intro-text">
                  <i className="fa-solid fa-quote-right"></i>
                  <p>{article?.post_slogan}</p>
                  <span>Yusro Tour</span>
                </div>
              )}
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
          </div>
          <CommentsSection postId={id} />
          <CommentForm postId={id} />
        </div>
        <div className="blog-tags">
          <PopularPosts />
          <AnswerToQuestions />
        </div>
      </div>
    </div>
  );
}

export default ReadArticle;
