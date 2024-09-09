import React, { useEffect, useState } from "react";
import axios from "axios";
import "./contact.css";
import ExtraPagesHeader from "./../../components/extraPagesHeader/ExtraPagesHeader";

import phone_outline from "../../icons/phone_outline.png";
import message_outline from "../../icons/message_outline.png";
import location_outline from "../../icons/location_outline.png";
import Info from "../../service/info";
import useFetch from "../../hooks/useFetch";
import defaultMap from "../../images/defaultMap.png"
import { useLocation } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
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
        "http://95.46.96.78:7777/api/v1/main/application-create/",
        data
      );
      setName("");
      setPhoneNumber("");
      setEmail("");
      setMessage("");
      setMessageGoal("");
      setFormErrors({});
      setPlaceholder({});
      setSuccessMessage("Xabar yuborildi!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      error.response.data.email
        ? setError(`Email xato kiritildi`)
        : setError(`Xabar yuborishda xatolik!`);
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
                  <p>{info.location ? info.location : "O'zbekiston"}</p>
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
            <img className="map" src={info.map_image ? info.map_image : defaultMap} alt="" />
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
                placeholder={
                  placeholder.phoneNumber || "Telefon raqamingizni kiriting"
                }
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
                <i class="fa-solid fa-spinner"></i>
              ) : error ? (
                error
              ) : successMessage ? (
                <i class="fa-solid fa-check"></i>
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
