// SearchModal.js
import React from "react";
import { formatDate } from "../../utils/formatDate";
import { useNavigate } from "react-router-dom";
import "./searchModal.css";

const SearchModal = ({ posts, onClose }) => {
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    onClose(); // Close the modal
    navigate(`/main/post/${postId}`);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <h2 className="search-result">Qidiruv natijalari</h2>
        <ul>
          {posts.length > 0 ? (
            posts.map((post) => (
              <li key={post.id} onClick={() => handlePostClick(post.id)} className="search-li">
                <img src={post.image} alt="" />
                <div>
                  <h3>{post.name}</h3>
                  <p>{formatDate(post.created_at)}</p>
                </div>
              </li>
            ))
          ) : (
            <p>Hech narsa topilmadi!</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchModal;
