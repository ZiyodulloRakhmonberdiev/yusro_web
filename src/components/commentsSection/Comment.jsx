import React, { useState } from "react";
import ReplyForm from "./ReplyForm";
import axios from "axios";
import Pagination from "./Pagination";
import "./styles.css";

const Comment = ({ comment, postId }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState([]);
  const [pagination, setPagination] = useState({ next: null, previous: null });
  const [loadingReplies, setLoadingReplies] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  const fetchReplies = async (url) => {
    setLoadingReplies(true);
    try {
      const response = await axios.get(url);
      setReplies(response.data.results); // Adjust according to your API response structure
      setPagination({
        next: response.data.next,
        previous: response.data.previous,
      });
    } catch (error) {
      console.error("Failed to load replies", error);
    } finally {
      setLoadingReplies(false);
    }
  };

  const handleShowReplies = () => {
    if (!showReplies && !replies.length) {
      fetchReplies(
        `http://95.46.96.78:7777/api/v1/main/comments/by-comment/${comment.id}/`
      );
    }
    setShowReplies(!showReplies);
  };

  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  return (
    <div className="comment">
      <div className="comment-author">{comment.full_name}</div>
      <div className="comment-content">
        {showFullText ? (
          comment.text
        ) : (
          <>
            {comment.text.length > 500
              ? `${comment.text.substring(0, 500)}...`
              : comment.text}
            {comment.text.length > 500 && (
              <button onClick={toggleText} className="read-more-button">
                {showFullText ? "Kamroq" : "Davomi"}
              </button>
            )}
          </>
        )}
        </div>
      <div className="buttons">
        <button
          onClick={() => setShowReplyForm(!showReplyForm)}
          className="reply-button"
        >
          <i className="fa-solid fa-reply"></i>
          <span>Javob berish</span>
        </button>
        <button onClick={handleShowReplies} className="show-replies-button">
          {showReplies ? "Javoblarni yashirish" : "Javoblarni ko'rsatish"}
        </button>
      </div>
      {showReplyForm && <ReplyForm parentId={comment.id} postId={postId} />}
      {showReplies && (
        <div className="replies">
          {replies.length > 0 ? (
            replies.map((reply) => (
              <Comment key={reply.id} comment={reply} postId={postId} />
            ))
          ) : (
            <div>
              {loadingReplies ? (
                <p>Javoblar yuklanmoqda...</p>
              ) : (
                <p>Javoblar yo'q</p>
              )}
            </div>
          )}
          <Pagination
            previous={pagination.previous}
            next={pagination.next}
            onPrevious={() => fetchReplies(pagination.previous)}
            onNext={() => fetchReplies(pagination.next)}
          />
        </div>
      )}
    </div>
  );
};

export default Comment;
