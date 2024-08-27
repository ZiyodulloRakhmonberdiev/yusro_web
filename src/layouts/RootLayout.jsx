import "./rootLayout.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import UiInput from "./../ui/UiInput";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "./../service/auth";
import {
  signInUserFailure,
  signInUserStart,
  signInUserSuccess,
} from "../features/auth/authSlice";
import Sidebar from "./../components/sidebar/Sidebar";
import ValidateForm from "../helpers/ValidateForm";

// import images
import logo from "../icons/logo_tour.png";
import logo2 from "../icons/logo_tour.png";
import phone_icon from "./images/phone_icon.png";
import mail_icon from "./images/mail_icon.png";
import mail_send from "./images/mail_send.png";

import layer1 from "./images/layer1.jpg";
import layer2 from "./images/layer2.jpg";
import layer3 from "./images/layer3.jpg";
import layer4 from "./images/layer4.jpg";
import layer5 from "./images/layer5.jpg";
import layer6 from "./images/layer6.jpg";

import humo from "./icons/humo.png";
import uzcard from "./icons/uzcard.png";
import mastercard from "./icons/mastercard.png";
import visa from "./icons/visa.png";

import phone from "./icons/phone.png";
import telegram from "./icons/telegram.png";
import message from "./icons/message.png";
import location from "./icons/location.png";

import telegram_icon from "../icons/telegram_icon.png";
import facebook_icon from "../icons/facebook_icon.png";
import instagram_icon from "../icons/instagram_icon.png";
import youtube_icon from "../icons/youtube_icon.png";

function RootLayout() {
  const [active, setActive] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [placeholder, setPlaceholder] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errors, placeholders } = ValidateForm({ phoneNumber });
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setPlaceholder(placeholders);
      setTimeout(() => setPlaceholder({}), 3000);
      return;
    }

    dispatch(signInUserStart());
    const user = { phone_number: phoneNumber };
    try {
      const response = await AuthService.newsletterCreate(user);
      dispatch(signInUserSuccess({ user: response.user, type: "newsletter" }));
      setPhoneNumber("");
      setFormErrors({});
      setPlaceholder({});
      setSuccessMessage("Muvaffaqiyatli!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      dispatch(
        signInUserFailure({
          error: error.response.data.errors,
          type: "newsletter",
        })
      );
    }
  };

  return (
    <div className="root">
      <Sidebar active={active} setActive={setActive} />
      <header>
        <section className="main-head container">
          <div className="social-media">
            <p>Ijtimoiy tarmoqlarimiz</p>
            <span></span>
            <a href="#">
              <img src={instagram_icon} alt="" />
            </a>
            <span></span>
            <a href="#">
              <img src={telegram_icon} alt="" />
            </a>
            <span></span>
            <a href="#">
              <img src={facebook_icon} alt="" />
            </a>
            <span></span>
            <a href="#">
              <img src={youtube_icon} alt="" />
            </a>
          </div>
          <div className="navbar">
            <Link to="/about-us">Biz haqimizda</Link>
            <Link to="">Hamkorlik</Link>
            <Link to="">Fikrlar</Link>
            <Link to="/umra">Umra</Link>
            <Link to="/haj">Haj</Link>
            <Link to="/contact">Aloqa</Link>
          </div>
        </section>
        <section className="container header-details">
          <Link className="logo main-logo">
            <img src={logo2} alt="" />
            <span></span>
          </Link>
          <div className="details">
            <div className="contacts">
              <Link className="logo">
                <img src={logo} alt="" />
              </Link>
              <div className="by-contact">
                <img src={phone_icon} alt="" />
                <div className="about">
                  <span>Hoziroq bizga qo'ng'iroq qiling</span>
                  <a href="tel:+998555002228">+998 55 500 22 28</a>
                </div>
              </div>
              <div className="by-contact">
                <img src={mail_icon} alt="" />
                <div className="about">
                  <span>Email manzilimiz</span>
                  <a href="mailto:admin@yusro.uz">admin@yusro.uz</a>
                </div>
              </div>
              <div className="search-wrapper">
                <div className="search">
                  <input type="text" placeholder="Qidirish" name="search" />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="hamburger-menu" onClick={() => setActive(!active)}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="navbar">
              <Link to="/" className="active">
                Bosh sahifa
              </Link>
              <Link to="/packages">Paketlar</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/video-content">Media</Link>
            </div>
          </div>
        </section>
      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <div className="container footer-top">
          <div className="footer-top-section container">
            <div className="about">
              <img src={mail_send} alt="mail-send" />
              <div className="info">
                <p>Yangi maqolalarga obuna bo'ling</p>
                <span>Eng so'ngi yangiliklar faqat bizda!</span>
              </div>
            </div>
            <form className="send-phoneNumber">
              {isLoading ? (
                <div className="success-message">
                  <h2>Yuborilmoqda...</h2>
                </div>
              ) : successMessage ? (
                <div className="success-message">
                  <h2>{successMessage}</h2>
                </div>
              ) : (
                <>
                  <UiInput
                    type="text"
                    state={phoneNumber}
                    setState={setPhoneNumber}
                    placeholder={
                      placeholder.phoneNumber || "Email yuboring"
                    }
                    hasError={!!formErrors.phoneNumber}
                  />
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="newslettersendButton"
                  >
                    <i className="fa-regular fa-paper-plane"></i>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
        <div className="main-footer">
          <div className="container">
            <div className="main-footer-details">
              <div className="logo">
                <img src={logo} alt="" />
                <div className="info">
                  <p>
                    Yusro turizm agentligi O‘zbekistondagi eng ishonchli, tezkor
                    va 7 yillik tajribaga ega kompaniyalardan biri hisoblanadi.
                    Biz sizga qulay va oson sayohat qilishni kafolat beramiz.
                  </p>
                  <div className="social-networks">
                    <a href="#">
                      <img src={instagram_icon} alt="" />
                    </a>
                    <span></span>
                    <a href="#">
                      <img src={telegram_icon} alt="" />
                    </a>
                    <span></span>
                    <a href="#">
                      <img src={facebook_icon} alt="" />
                    </a>
                    <span></span>
                    <a href="#">
                      <img src={youtube_icon} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="clip">
                <div className="title">Lavhalar</div>
                <div className="images">
                  <img src={layer1} alt="" />
                  <img src={layer2} alt="" />
                  <img src={layer3} alt="" />
                  <img src={layer4} alt="" />
                  <img src={layer5} alt="" />
                  <img src={layer6} alt="" />
                </div>
              </div>
              <div className="we-offer">
                <div className="title">Biz taklif qilamiz</div>
                <div className="lists">
                  <div className="list">
                    <i className="fa-solid fa-chevron-right"></i>
                    <span>Umra ziyorati</span>
                  </div>
                  <div className="list">
                    <i className="fa-solid fa-chevron-right"></i>
                    <span>Ichki turizm</span>
                  </div>
                  <div className="list">
                    <i className="fa-solid fa-chevron-right"></i>
                    <span>Tashqi turizm</span>
                  </div>
                </div>
              </div>
              <div className="footer-contact-us">
                <div className="title">Biz bilan bog'laning</div>
                <div className="details">
                  <div className="detail">
                    <img src={phone} alt="" />
                    <a href="tel:+998555002228">+998 55 500 22 28</a>
                  </div>
                  <div className="detail">
                    <img src={telegram} alt="" />
                    <a href="">yusro_admin</a>
                  </div>
                  <div className="detail">
                    <img src={message} alt="" />
                    <a href="mailto:admin@yusro.uz">admin@yusro.uz</a>
                  </div>
                  <div className="detail">
                    <img src={location} alt="" />
                    <span>Toshkent shahar, Ko'kcha masjidi ro'parasi</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="copyright">
                <i className="fa-regular fa-copyright"></i>
                <p>Copyrights 2024 Yusro.</p>
                <span>Barcha huquqlar himoyalangan</span>
              </div>
              <div className="payment">
                <span>Quyidagi to'lov usullari mavjud</span>
                <div className="methods">
                  <img src={humo} alt="" />
                  <img src={uzcard} alt="" />
                  <img src={visa} alt="" />
                  <img src={mastercard} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RootLayout;
