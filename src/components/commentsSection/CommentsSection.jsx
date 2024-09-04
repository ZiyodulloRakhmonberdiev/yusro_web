import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./Comment";
import Pagination from "./Pagination";
import "./styles.css";

const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [pagination, setPagination] = useState({ next: null, previous: null });
  const [loadingComments, setLoadingComments] = useState(false);

  const fetchComments = async (url) => {
    setLoadingComments(true);
    try {
      const response = await axios.get(url);
      setComments(response.data.results); // Adjust according to your API response structure
      setPagination({
        next: response.data.next,
        previous: response.data.previous,
      });
    } catch (error) {
      console.error("Failed to load comments", error);
    } finally {
      setLoadingComments(false);
    }
  };

  useEffect(() => {
    fetchComments(`http://95.46.96.78:7777/api/v1/main/comments/by-post/${postId}/`);
  }, [postId]);

  return (
    <div className="comments-section">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} postId={postId} />
      ))}
      {loadingComments && <p>Loading comments...</p>}
      <Pagination
        previous={pagination.previous}
        next={pagination.next}
        onPrevious={() => fetchComments(pagination.previous)}
        onNext={() => fetchComments(pagination.next)}
      />
    </div>
  );
};

export default CommentsSection;
