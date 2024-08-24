import "./Comment.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import BlogArticle from "../../service/blog";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../ui/Loader";
import NotAvailable from "../../helpers/NotAvailable";
import { formatDate } from "../../utils/formatDate";
import axios, { all } from "axios";

function Comments({ comment, postId }) {
  const [subComments, setSubComments] = useState([]);
  const [subExtraComments, setExtraSubComments] = useState([]);
  const [showSubcomments, setShowsubcomments] = useState(false);
  const [showExtraSubcomments, setShowExtrasubcomments] = useState(false);

  const main_url = "http://95.46.96.78:7777/api/v1";

  const getSubComments = () => {
    axios
      .get(`${main_url}/main/comments/by-comment/${comment.id}/`)
      .then((response) => {
        setSubComments(response.data);
      })
      .catch(() => {
        throw new Error("Xatolik yuz berdi!");
      });
      setShowsubcomments(!showSubcomments)
      setShowExtrasubcomments(false);
    };
    
    const getExtraSubComments = (id) => {
      axios
      .get(`${main_url}/main/comments/by-comment/${id}/`)
      .then((response) => {
        setExtraSubComments(response.data);
      })
      .catch(() => {
        throw new Error("Xatolik yuz berdi!");
      });
      setShowExtrasubcomments(!showExtraSubcomments)
  };

  return (
    <div className="article-comments">
      <div className="title">
        {/* Izohlar ({comments && comments.results?.length}) */}
      </div>
      <div className="items">
        <div className="item">
          <div className="name">
            {comment.full_name}
            <div className="created-at">
              <span>{formatDate(comment.created_at)}</span>
            </div>
          </div>
          <div className="description">{comment.text}</div>
          <div className="actions">
            <button onClick={() => getSubComments(comment.id)}>
              Javob berish
            </button>
            <button onClick={() => getSubComments(comment.id)}>
              Barcha javoblarni ko'rish
            </button>
          </div>
        </div>
        <div className={`sub-comment ${showSubcomments ? 'show' : 'none'}`}>
          {subComments.results?.length > 0 &&
            subComments.results.map((subComment) => (
              <div>
                <div className="item" key={subComment.id}>
                  <div className="name">
                    {subComment.full_name}
                    <div className="created-at">
                      <span>{formatDate(subComment.created_at)}</span>
                    </div>
                  </div>
                  <div className="description">{subComment.text}</div>
                  <div className="actions">
                    <button onClick={() => getSubComments(subComment.id)}>
                      Javob berish
                    </button>
                    <button onClick={() => getExtraSubComments(subComment.id)}>
                      Barcha javoblarni ko'rish
                    </button>
                  </div>
                </div>
                <div className={`extra-sub-comments ${showExtraSubcomments ? 'show' : 'none'}`}>
                  {subExtraComments.results?.length > 0 &&
                    subExtraComments.results.map((subExtraComment) => (
                      <div className="item" key={subExtraComment.id}>
                        <div className="name">
                          {subExtraComment.full_name}
                          <div className="created-at">
                            <span>
                              {formatDate(subExtraComment.created_at)}
                            </span>
                          </div>
                        </div>
                        <div className="description">
                          {subExtraComment.text}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Comments;
