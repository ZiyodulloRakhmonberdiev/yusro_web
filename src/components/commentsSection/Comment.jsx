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
      fetchReplies(`http://95.46.96.78:7777/api/v1/main/comments/by-comment/${comment.id}/`);
    }
    setShowReplies(!showReplies);
  };

  return (
    <div className="comment">
      <div className="comment-author">{comment.full_name}</div>
      <div className="comment-content">{comment.text}</div>
      <button onClick={() => setShowReplyForm(!showReplyForm)}>
        Reply
      </button>
      <button onClick={handleShowReplies}>
        {showReplies ? "Hide Replies" : "Show Replies"}
      </button>
      {showReplyForm && <ReplyForm parentId={comment.id} postId={postId} />}
      {showReplies && (
        <div className="replies">
          {replies.map((reply) => (
            <Comment key={reply.id} comment={reply} postId={postId} />
          ))}
          {loadingReplies && <p>Loading replies...</p>}
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

