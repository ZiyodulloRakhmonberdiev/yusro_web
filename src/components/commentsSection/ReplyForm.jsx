import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const ReplyForm = ({ parentId, postId }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [placeholder, setPlaceholder] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const errors = {};
    const placeholders = {};
    if (!name) {
      errors.name = "Ism maydoni talab qilinadi.";
      placeholders.name = "Ism maydoni talab qilinadi.";
    }
    if (!text) {
      errors.text = "Izoh maydoni talab qilinadi.";
      placeholders.text = "Izoh maydoni talab qilinadi.";
    }
    return { errors, placeholders };
  };

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errors, placeholders } = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setPlaceholder(placeholders);
      setTimeout(() => setPlaceholder({}), 3000);
      return;
    }

    setIsLoading(true);
    const data = {
      full_name: name,
      text,
      post: postId,
      parent: parentId,
    };

    try {
      await axios.post(
        "https://api.yusro-tour.uz/main/comment-create/",
        data
      );

      // Save the user's name to localStorage
      localStorage.setItem("name", name);

      // setName("");
      setText("");
      setFormErrors({});
      setPlaceholder({});
      setSuccessMessage("Izoh yuborildi!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      setError("Izoh yuborishda xatolik!");
      setTimeout(() => {
        setError("");
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="reply-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder.name || "Ism"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={formErrors.name ? "error-input" : ""}
      />
      <textarea
        placeholder={placeholder.text || "Izoh"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={formErrors.text ? "error-input" : ""}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? (
          <i className="fa-solid fa-spinner"></i>
        ) : error ? (
          error
        ) : successMessage ? (
          <i className="fa-solid fa-check"></i>
        ) : (
          "Yuborish"
        )}
      </button>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default ReplyForm;
