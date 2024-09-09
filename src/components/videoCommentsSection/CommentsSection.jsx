import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Comment from "./Comment";
import Pagination from "./Pagination";

const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [pagination, setPagination] = useState({ next: null, previous: null });
  const [loadingComments, setLoadingComments] = useState(false);
  const [commentCount, setCommentCount] = useState("")

  const fetchComments = async (url) => {
    setLoadingComments(true);
    try {
      const response = await axios.get(url);
      setComments(response.data.results); // Adjust according to your API response structure
      setPagination({
        next: response.data.next,
        previous: response.data.previous,
      });
      setCommentCount(response.data.count)
    } catch (error) {
      console.error("Failed to load comments", error);
    } finally {
      setLoadingComments(false);
    }
  };

  useEffect(() => {
    fetchComments(`https://api.yusro-tour.uz/main/video-comments/by-video/${postId}/`);
  }, [postId]);

  return (
    <div className="comments-section"> 
      <h2>Izohlar: ({commentCount})</h2>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} postId={postId} />
      ))}
      {loadingComments && <p>Izohlar yuklanmoqda...</p>}
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
