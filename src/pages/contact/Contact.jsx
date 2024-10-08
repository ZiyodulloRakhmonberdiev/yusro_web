import "./contact.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ExtraPagesHeader from "./../../components/extraPagesHeader/ExtraPagesHeader";

import phone_outline from "../../icons/phone_outline.png";
import message_outline from "../../icons/message_outline.png";
import location_outline from "../../icons/location_outline.png";
import Info from "../../service/info";
import useFetch from "../../hooks/useFetch";
import defaultMap from "../../images/image-default-post.jpg";
import { useLocation } from "react-router-dom";

function Contact() {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem("phoneNumber") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [message, setMessage] = useState("");
  const [messageGoal, setMessageGoal] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [placeholder, setPlaceholder] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { data: info } = useFetch(Info.getInfo);

  const validateForm = () => {
    const errors = {};
    const placeholders = {};
    if (!name) {
      errors.name = "Ism maydoni talab qilinadi.";
      placeholders.name = "Ism maydoni talab qilinadi.";
    }
    if (!phoneNumber) {
      errors.phoneNumber = "Telefon raqami maydoni talab qilinadi.";
      placeholders.phoneNumber = "Telefon raqami talab qilinadi.";
    }
    if (!messageGoal) {
      errors.messageGoal = "Xabar maqsadi maydoni talab qilinadi.";
      placeholders.messageGoal = "Xabar maqsadi maydoni talab qilinadi.";
    }
    if (!message) {
      errors.message = "Xabar maydoni talab qilinadi.";
      placeholders.message = "Xabar maydoni talab qilinadi.";
    }
    return { errors, placeholders };
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Formdagi ma'lumotlarni saqlash
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("email", email);
  }, [name, phoneNumber, email]);

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
      telephone: phoneNumber,
      email,
      text: `Xabar maqsadi: ${messageGoal}\n\nXabar mazmuni: ${message}`,
    };

    try {
      await axios.post(
        "https://api.yusro-tour.uz/api/v1/main/application-create/",
        data
      );
      // Faqat kerakli ma'lumotlarni saqlash
      localStorage.removeItem("messageGoal");
      localStorage.removeItem("message");

      setSuccessMessage("Xabar yuborildi!");
      setMessage("");
      setMessageGoal("");
      setFormErrors({});
      setPlaceholder({});
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      setError(error.response?.data?.email ? "Email xato kiritildi" : "Xabar yuborishda xatolik!");
      // Xato holatida barcha ma'lumotlarni inputlarga qaytarish
      setMessage(localStorage.getItem("message") || "");
      setMessageGoal(localStorage.getItem("messageGoal") || "");
      setTimeout(() => {
        setError("");
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <ExtraPagesHeader title="Bizga bog'laning" />

      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="title">
              <p>Biz bilan aloqada bo'ling</p>
            </div>
            <div className="details">
              <div className="detail">
                <img src={location_outline} alt="" />
                <div className="about">
                  <span>Bizning manzil</span>
                  <p>{info.location || "O'zbekiston"}</p>
                </div>
              </div>
              <div className="detail">
                <img src={phone_outline} alt="" />
                <div className="about">
                  <span>24/7 aloqada</span>
                  <a href={info.telephone ? `tel:${info.telephone}` : ""}>
                    {info.telephone ? info.telephone : ""}
                  </a>
                </div>
              </div>
              <div className="detail">
                <img src={message_outline} alt="" />
                <div className="about">
                  <span>Bizga xabar qoldiring</span>
                  <a href={info.email ? `mailto:${info.email}` : ""}>
                    {info.email ? info.email : ""}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="map-container">
            <img
              className="map"
              src={info.map_image || defaultMap}
              alt=""
            />
          </div>
        </div>
        <div className="contact-form">
          <h2>Bizga xabar yuboring</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder={placeholder.name || "Ismingizni kiriting"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={formErrors.name ? "error-input" : ""}
              />
              <input
                type="email"
                placeholder={placeholder.email || "Emailingni kiriting"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={formErrors.email ? "error-input" : ""}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder={placeholder.phoneNumber || "Telefon raqamingizni kiriting"}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={formErrors.phoneNumber ? "error-input" : ""}
              />
              <input
                type="text"
                placeholder={placeholder.messageGoal || "Xabarning maqsadi"}
                value={messageGoal}
                onChange={(e) => setMessageGoal(e.target.value)}
                className={formErrors.messageGoal ? "error-input" : ""}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder={placeholder.message || "Xabaringizni kiriting"}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={formErrors.message ? "error-input" : ""}
              ></textarea>
            </div>
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
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
