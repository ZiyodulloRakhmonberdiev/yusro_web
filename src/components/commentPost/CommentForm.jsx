// import React, { useState } from "react";
// import axios from "axios";
// import "./commentForm.css"; // Import the CSS file

// const CommentForm = ({ postId }) => {
//   const [fullName, setFullName] = useState("");
//   const [text, setText] = useState("");
//   const [email, setEmail] = useState("");
//   const [formErrors, setFormErrors] = useState({});
//   const [placeholders, setPlaceholders] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");
//   const [error, setError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validate = () => {
//     const errors = {};
//     const placeholders = {};
//     if (!fullName) {
//       errors.fullName = "Ism talab qilinadi!";
//       placeholders.fullName = "Ism talab qilinadi!";
//     }
//     if (!text) {
//       errors.text = "Izoh talab qilinadi!";
//       placeholders.text = "Izoh talab qilinadi!";
//     }
//     return { errors, placeholders };
//   };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { errors, placeholders } = validate();
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       setPlaceholders(placeholders);
//       setTimeout(() => setPlaceholders({}), 3000);
//       return;
//     }

//     setIsSubmitting(true);
//     const data = {
//       post: postId,
//       full_name: fullName,
//       text,
//       email,
//     };

//     try {
//       await axios.post(
//         "http://95.46.96.78:7777/api/v1/main/comment-create/",
//         data
//       );
//       setFullName("");
//       setText("");
//       setEmail("");
//       setFormErrors({});
//       setPlaceholders({});
//       setSuccessMessage("Xabar yuborildi!");
//       setTimeout(() => {
//         setSuccessMessage("");
//       }, 3000);
//     } catch (error) {
//       error.response.data.email
//         ? setError(`Email xato kiritildi!`)
//         : setError(`Xabar yuborishda xatolik!`);
//       setTimeout(() => {
//         setError("");
//       }, 3000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form className="comment-form" onSubmit={handleSubmit}>
//       <h2>Izohingizni qoldiring</h2>
//       <p>
//         Sizning emailingiz ko'rsatilmaydi. Talab qilinadigan joylar belgilangan
//         *
//       </p>
//       <div className="form-group">
//         <input
//           type="text"
//           id="fullName"
//           placeholder={placeholders.fullName || "Ismingizni kiriting*"}
//           value={fullName}
//           onChange={(e) => setFullName(e.target.value)}
//           className={formErrors.fullName ? "error-input" : ""}
//         />
//         <input
//           type="email"
//           id="email"
//           placeholder={placeholders.email || "Emailingizni kiriting"}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className={formErrors.email ? "error-input" : ""}
//         />
//       </div>

//       <div className="form-group">
//         <textarea
//           id="text"
//           placeholder={placeholders.text || "Xabaringizni kiriting*"}
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           className={formErrors.text ? "error-input" : ""}
//         />
//       </div>

//       <button type="submit" disabled={isSubmitting}>
//         {isSubmitting ? (
//           <i className="fa-solid fa-spinner"></i>
//         ) : error ? (
//           error
//         ) : successMessage ? (
//           <i className="fa-solid fa-check"></i>
//         ) : (
//           "Yuborish"
//         )}
//       </button>
//       {successMessage && <p className="success-message">{successMessage}</p>}
//     </form>
//   );
// };

// export default CommentForm;


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./commentForm.css"; // Import the CSS file

const CommentForm = ({ postId }) => {
  const [fullName, setFullName] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [placeholders, setPlaceholders] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load the name from localStorage when the component mounts
  useEffect(() => {
    const savedName = localStorage.getItem("fullName");
    const savedEmail = localStorage.getItem("email");
    if (savedName) {
      setFullName(savedName);
    }
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const validate = () => {
    const errors = {};
    const placeholders = {};
    if (!fullName) {
      errors.fullName = "Ism talab qilinadi!";
      placeholders.fullName = "Ism talab qilinadi!";
    }
    if (!text) {
      errors.text = "Izoh talab qilinadi!";
      placeholders.text = "Izoh talab qilinadi!";
    }
    return { errors, placeholders };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errors, placeholders } = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setPlaceholders(placeholders);
      setTimeout(() => setPlaceholders({}), 3000);
      return;
    }

    setIsSubmitting(true);
    const data = {
      post: postId,
      full_name: fullName,
      text,
      email,
    };

    try {
      await axios.post(
        "http://95.46.96.78:7777/api/v1/main/comment-create/",
        data
      );
      // Save the user's name to localStorage
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("email", email);

      // setFullName("");
      setText("");
      setEmail("");
      setFormErrors({});
      setPlaceholders({});
      setSuccessMessage("Xabar yuborildi!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      error.response.data.email
        ? setError(`Email xato kiritildi!`)
        : setError(`Xabar yuborishda xatolik!`);
      setTimeout(() => {
        setError("");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h2>Izohingizni qoldiring</h2>
      <p>
        Sizning emailingiz ko'rsatilmaydi. Talab qilinadigan joylar belgilangan
        *
      </p>
      <div className="form-group">
        <input
          type="text"
          id="fullName"
          placeholder={placeholders.fullName || "Ismingizni kiriting*"}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={formErrors.fullName ? "error-input" : ""}
        />
        <input
          type="email"
          id="email"
          placeholder={placeholders.email || "Emailingizni kiriting"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={formErrors.email ? "error-input" : ""}
        />
      </div>

      <div className="form-group">
        <textarea
          id="text"
          placeholder={placeholders.text || "Xabaringizni kiriting*"}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={formErrors.text ? "error-input" : ""}
        />
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
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
    </form>
  );
};

export default CommentForm;
