import React, { useState } from "react";
import axios from "axios";
import sec_pattern from "../../icons/sec_pattern.png";
import "./contactUs.css"; // Ensure you have appropriate styling

function ContactUs() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [placeholder, setPlaceholder] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    const errors = {};
    const placeholders = {};
    if (!name) {
      errors.name = "Ism kiritish shart!";
      placeholders.name = "Ism kiritish shart!";
    }
    if (!phoneNumber) {
      errors.phoneNumber = "Telefon kiritish shart!";
      placeholders.phoneNumber = "Telefon kiritish shart!";
    }
    if (!message) {
      errors.message = "Xabar kiritish shart!";
      placeholders.message = "Xabar kiritish shart!";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setPlaceholder(placeholders);
      setTimeout(() => setPlaceholder({}), 3000);
      return;
    }

    setIsLoading(true);
    const data = { full_name: name, telephone: phoneNumber, text: message };

    try {
      const response = await axios.post(
        "https://api.yusro-tour.uz/api/v1/main/application-create/",
        data
      );
      if (response.status === 201) {
        setName("");
        setPhoneNumber("");
        setMessage("");
        setFormErrors({});
        setPlaceholder({});
        setSuccessMessage("Muvaffaqiyatli yuborildi!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        throw new Error("Xatolik yuz berdi!");
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.errors || "Xatolik yuz berdi!";
      setFormErrors({ global: errorMessage });
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-us-section">
      <div className="wrapper">
        <img src={sec_pattern} alt="" />
        <div className="form-wrapper">
          {successMessage ? (
            <div className="success-message">
              <h2>{successMessage}</h2>
            </div>
          ) : formErrors.global ? (
            <div className="success-message">
              <h2>Xatolik yuz berdi. Qaytadan urinib ko'ring!</h2>
            </div>
          ) : (
            <>
              <h2 className="title">Hoziroq ro'yxatdan o'ting</h2>
              <p>va chegirmaga ega bo'ling</p>
              <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder={placeholder.name || "Ismingizni kiriting"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`input ${formErrors.name ? "error-input" : ""}`}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder={
                      placeholder.phoneNumber || "Telefon raqamingizni kiriting"
                    }
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className={`input ${
                      formErrors.phoneNumber ? "error-input" : ""
                    }`}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder={placeholder.message || "Xabarni kiriting"}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`textarea ${
                      formErrors.message ? "error-input" : ""
                    }`}
                  />
                </div>
                <button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <i class="fa-solid fa-spinner"></i>
                  ) : formErrors.global ? (
                    formErrors.global
                  ) : successMessage ? (
                    <i class="fa-solid fa-check"></i>
                  ) : (
                    "Yuborish"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
