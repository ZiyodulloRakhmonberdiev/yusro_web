import React, { useState, useEffect } from "react";
import { formatDate } from "../../utils/formatDate";
import { useNavigate } from "react-router-dom";
import "./searchModal.css";

const SearchModal = ({
  posts,
  onClose,
  handleSearchSubmit,
  handleSearchChange,
  searchTerm,
  isSearching,
}) => {
  const [loading, setLoading] = useState(false); // Yuklanish holati
  const [success, setSuccess] = useState(false); // Qidiruv muvaffaqiyatli tugagan holat
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    if (window.location.pathname.includes("/main/post/")) {
      navigate(`/main/post/${postId}`);
      window.location.reload(); // Agar hozirgi sahifa /main/post/ sahifasi bo'lsa, sahifani qayta yuklang
    } else {
      onClose(); // Modalni yopish
      navigate(`/main/post/${postId}`); // Yangi postga o'tish
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  // Qidiruv yuborilganda
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true); // Yuklanishni boshlash

    await handleSearchSubmit(e); // Qidiruvni yuborish

    setLoading(false); // Yuklanishni to'xtatish
    setSuccess(true); // Qidiruv muvaffaqiyatli tugadi

    // 3 soniyadan so'ng qayta yuklash holatiga qaytarish
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h2 className="search-result">Qidiruv natijalari</h2>

        {/* Qidiruv formasi */}
        <form className="search-modal-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Qidirish"
            value={searchTerm}
            onChange={handleSearchChange}
            name="search"
          />
          <button type="submit" className="submit-button">
            {/* Dinamik icon almashtirish */}
            {loading ? (
              <i className="fa-solid fa-spinner fa-spin"></i> // Yuklanayotgan paytda spinner
            ) : (
              <i className="fa-solid fa-magnifying-glass"></i> // Standart holat
            )}
          </button>
        </form>

        {/* Natijalar yoki 'Hech narsa topilmadi' */}
        {isSearching && (
          <ul className="results">
            {posts.length > 0 ? (
              posts.map((post) => (
                <li
                  key={post.id}
                  onClick={() => handlePostClick(post.id)}
                  className="search-li"
                >
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
        )}
      </div>
    </div>
  );
};

export default SearchModal;
