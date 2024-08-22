import "./readArticle.css";
import { Link, useLocation, useParams } from "react-router-dom";
import AnswerToQuestions from "./../answerToQuestions/AnswerToQuestions";
import BlogArticle from "./../../service/blog";
import ExtraPagesHeader from "./../extraPagesHeader/ExtraPagesHeader";
import useFetch from "./../../hooks/useFetch";
import { formatDate } from "../../utils/formatDate";
// import PopularPosts from '../popularPosts/PopularPosts';
import { useEffect, useState } from "react";
import Comments from "../comments/Comments";
import CommentPost from "../commentPost/CommentPost";
import axios from "axios";

function ReadArticle() {
  const { id } = useParams();
  
  const {
    data: article,
    loading,
    error,
  } = useFetch(() => BlogArticle.readArticle(id));

  const [copied, setCopied] = useState(false);
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Nusxalashda muammo yuz berdi", err));
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="read-article blog">
      <ExtraPagesHeader title={article.name} />
      <div className="container">
        <div className="article-info">
          <div className="item" key={article.id}>
            <div className="header-image">
              <img src={article.image} alt="" />
              <span className="created-date">
                {formatDate(article.created_at)}
              </span>
            </div>
            <div className="header-title">
              <div className="tags">
                <i className="fa-solid fa-tag"></i>
                {article.post_tag &&
                  article.post_tag?.map((tag) => (
                    <span className="tag" key={tag.id}>{tag.name}</span>
                  ))}
              </div>
              <div className="comments">
                <i className="fa-regular fa-comment"></i>
                {/* <span>{article.comments && article.comments.length}</span> */}
              </div>
            </div>
            <div className="info">
              <div className="title">{article.name}</div>
              <div className="intro-text">
                <i className="fa-solid fa-quote-right"></i>
                <p>{article.post_slogan}</p>
                <span>Yusro Tour</span>
              </div>
              <div className="description">{article.post_content}</div>
            </div>
            <div className="extra-info">
              {/* <div>
                                <span>Teglar:</span> {article.tags && article.tags.map(tag => <span key={tag.id}>{tag.name}</span>)}
                            </div> */}
              <p onClick={handleCopyLink}>
                <span>Bu postni ulashish</span>
                <i className="fa-solid fa-link"></i>
                {copied && <p className="copied">Nusxalandi</p>}
              </p>
            </div>
            {/* <Comments articleComments={article.comments && article.comments} loading={loading} error={error} /> */}
            {/* <CommentPost id={id}/> */}
          </div>
        </div>
        <div className="blog-tags">
          {/* <PopularPosts /> */}
          <AnswerToQuestions />
        </div>
      </div>
    </div>
  );
}

export default ReadArticle;
