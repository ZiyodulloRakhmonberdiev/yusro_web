import "./rootLayout.css";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
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
import axios from "axios";
import useFetch from "../hooks/useFetch";
import Info from "../service/info";

function RootLayout() {
  const [active, setActive] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});
    if (!email) {
      setFormErrors({ email: "Email kiritilishi shart" });
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        "http://95.46.96.78:7777/api/v1/main/subscriber-create/",
        { email }
      );
      setSuccessMessage("Muvaffaqiyatli yuborildi!");
      setEmail("");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      error.response.data.email
      ? setFormErrors({ email: "Email xato kiritildi!" })
      : setFormErrors({ email: "Xatolik yuz berdi!" });
      
      setEmail("");
      
      setTimeout(() => {
        setFormErrors({});
      }, 3000);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const { data: info } = useFetch(Info.getInfo);

  return (
    <div className="root">
      <Sidebar active={active} setActive={setActive} />
      <header>
        <section className="main-head container">
          <div className="social-media">
            <p>Ijtimoiy tarmoqlarimiz</p>
            <span></span>
            <a href={info.instagram ? info.instagram : "/"} target="_blank">
              <img src={instagram_icon} alt="" />
            </a>
            <span></span>
            <a href={info.telegram ? info.telegram : "/"} target="_blank">
              <img src={telegram_icon} alt="" />
            </a>
            <span></span>
            <a href={info.facebook ? info.facebook : "/"} target="_blank">
              <img src={facebook_icon} alt="" />
            </a>
            <span></span>
            <a href={info.youtube ? info.youtube : "/"} target="_blank">
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
                  <a href={info.telephone ? `tel:${info.telephone}` : ""}>
                    {info.telephone ? info.telephone : ""}
                  </a>
                </div>
              </div>
              <div className="by-contact">
                <img src={mail_icon} alt="" />
                <div className="about">
                  <span>Email manzilimiz</span>
                  <a href={info.email ? `mailto:${info.email}` : ""}>
                    {info.email ? info.email : ""}
                  </a>
                </div>
              </div>
              <div className="search-wrapper">
                <div className="search">
                  <input type="text" placeholder="Qidirish" name="search" />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div
                  className="hamburger-menu"
                  onClick={() => setActive(!active)}
                >
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
            {successMessage ? (
              <h1>{successMessage}</h1>
            ) : formErrors.email ? (
              <h1>{formErrors.email}</h1>
            ) : (
              <>
                <div className="about">
                  <img src={mail_send} alt="mail-send" />
                  <div className="info">
                    <p>Yangi maqolalarga obuna bo'ling</p>
                    <span>Eng so'ngi yangiliklar faqat bizda!</span>
                  </div>
                </div>
                <form className="send-phoneNumber" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={
                      formErrors.email ||
                      successMessage ||
                      "Email manzilingizni kiriting"
                    }
                    className={
                      formErrors.email
                        ? "input-error"
                        : successMessage
                        ? "input-success"
                        : ""
                    }
                  />
                  <button type="submit" disabled={loading} className="newslettersendButton">
                    {loading ? (
                      <i className="fa-solid fa-spinner"></i>
                    ) : (
                      <i className="fa-regular fa-paper-plane"></i>
                    )}
                  </button>
                </form>
              </>
            )}
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
                    va {info.expeirence ? info.expeirence : "uzoq"} yillik
                    tajribaga ega kompaniyalardan biri hisoblanadi. Biz sizga
                    qulay va oson sayohat qilishni kafolat beramiz.
                  </p>
                  <div className="social-networks">
                    <a
                      href={info.instagram ? info.instagram : "/"}
                      target="_blank"
                    >
                      <img src={instagram_icon} alt="" />
                    </a>
                    <span></span>
                    <a
                      href={info.telegram ? info.telegram : "/"}
                      target="_blank"
                    >
                      <img src={telegram_icon} alt="" />
                    </a>
                    <span></span>
                    <a
                      href={info.facebook ? info.facebook : "/"}
                      target="_blank"
                    >
                      <img src={facebook_icon} alt="" />
                    </a>
                    <span></span>
                    <a href={info.youtube ? info.youtube : ""} target="_blank">
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
                    <a href={info.telephone ? `tel:${info.telephone}` : ""}>
                      {info.telephone ? info.telephone : ""}
                    </a>
                  </div>
                  <div className="detail">
                    <img src={telegram} alt="" />
                    <a href={info.telegram_admin ? info.telegram_admin : ""}>
                      Yusro Admin
                    </a>
                  </div>
                  <div className="detail">
                    <img src={message} alt="" />
                    <a href={info.email ? `mailto:${info.email}` : ""}>
                      {info.email ? info.email : ""}
                    </a>
                  </div>
                  <div className="detail">
                    <img src={location} alt="" />
                    <span>{info.location ? info.location : "O'zbekiston"}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="copyright">
                <i className="fa-regular fa-copyright"></i>
                <p>Copyrights {new Date().getFullYear()} Yusro.</p>
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

// import "./rootLayout.css";
// import { Link, Outlet } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import Sidebar from "./../components/sidebar/Sidebar";
// import useFetch from "../hooks/useFetch";
// import Info from "../service/info";

// import logo from "../icons/logo_tour.png";
// import logo2 from "../icons/logo_tour.png";
// import phone_icon from "./images/phone_icon.png";
// import mail_icon from "./images/mail_icon.png";
// import mail_send from "./images/mail_send.png";
// import layer1 from "./images/layer1.jpg";
// import layer2 from "./images/layer2.jpg";
// import layer3 from "./images/layer3.jpg";
// import layer4 from "./images/layer4.jpg";
// import layer5 from "./images/layer5.jpg";
// import layer6 from "./images/layer6.jpg";
// import humo from "./icons/humo.png";
// import uzcard from "./icons/uzcard.png";
// import mastercard from "./icons/mastercard.png";
// import visa from "./icons/visa.png";
// import phone from "./icons/phone.png";
// import telegram from "./icons/telegram.png";
// import message from "./icons/message.png";
// import location from "./icons/location.png";
// import telegram_icon from "../icons/telegram_icon.png";
// import facebook_icon from "../icons/facebook_icon.png";
// import instagram_icon from "../icons/instagram_icon.png";
// import youtube_icon from "../icons/youtube_icon.png";

// function RootLayout() {
//   const [active, setActive] = useState(false);
//   const [email, setEmail] = useState("");
//   const [formErrors, setFormErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormErrors({});
//     if (!email) {
//       setFormErrors({ email: "Email kiritilishi shart" });
//       return;
//     }

//     try {
//       await axios.post(
//         "http://95.46.96.78:7777/api/v1/main/subscriber-create/",
//         { email }
//       );
//       setSuccessMessage("Muvaffaqiyatli!");
//       setEmail("");
//       setTimeout(() => {
//         setSuccessMessage("");
//       }, 3000);
//     } catch (error) {
//       setFormErrors({ email: "Emailni yuborishda xatolik yuz berdi" });
//     }
//   };

//   const { data: info } = useFetch(Info.getInfo);

//   return (
//     <div className="root">
//       <Sidebar active={active} setActive={setActive} />
//       <header>
//         <section className="main-head container">
//           <div className="social-media">
//             <p>Ijtimoiy tarmoqlarimiz</p>
//             <span></span>
//             <a href={info?.instagram || "/"} target="_blank">
//               <img src={instagram_icon} alt="" />
//             </a>
//             <span></span>
//             <a href={info?.telegram || "/"} target="_blank">
//               <img src={telegram_icon} alt="" />
//             </a>
//             <span></span>
//             <a href={info?.facebook || "/"} target="_blank">
//               <img src={facebook_icon} alt="" />
//             </a>
//             <span></span>
//             <a href={info?.youtube || "/"} target="_blank">
//               <img src={youtube_icon} alt="" />
//             </a>
//           </div>
//           <div className="navbar">
//             <Link to="/about-us">Biz haqimizda</Link>
//             <Link to="#">Hamkorlik</Link>
//             <Link to="#">Fikrlar</Link>
//             <Link to="/umra">Umra</Link>
//             <Link to="/haj">Haj</Link>
//             <Link to="/contact">Aloqa</Link>
//           </div>
//         </section>
//         <section className="container header-details">
//           <Link to="/" className="logo main-logo">
//             <img src={logo2} alt="" />
//             <span></span>
//           </Link>
//           <div className="details">
//             <div className="contacts">
//               <Link className="logo">
//                 <img src={logo} alt="" />
//               </Link>
//               <div className="by-contact">
//                 <img src={phone_icon} alt="" />
//                 <div className="about">
//                   <span>Hoziroq bizga qo'ng'iroq qiling</span>
//                   <a href={info?.telephone ? `tel:${info.telephone}` : ""}>
//                     {info?.telephone || ""}
//                   </a>
//                 </div>
//               </div>
//               <div className="by-contact">
//                 <img src={mail_icon} alt="" />
//                 <div className="about">
//                   <span>Email manzilimiz</span>
//                   <a href={info?.email ? `mailto:${info.email}` : ""}>
//                     {info?.email || ""}
//                   </a>
//                 </div>
//               </div>
//               <div className="search-wrapper">
//                 <div className="search">
//                   <input type="text" placeholder="Qidirish" name="search" />
//                   <i className="fa-solid fa-magnifying-glass"></i>
//                 </div>
//                 <div
//                   className="hamburger-menu"
//                   onClick={() => setActive(!active)}
//                 >
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </div>
//               </div>
//             </div>
//             <div className="navbar">
//               <Link to="/" className="active">
//                 Bosh sahifa
//               </Link>
//               <Link to="/packages">Paketlar</Link>
//               <Link to="/blog">Blog</Link>
//               <Link to="/video-content">Media</Link>
//             </div>
//           </div>
//         </section>
//       </header>

//       <main>
//         <Outlet />
//       </main>

//       <footer>
//         <div className="container footer-top">
//           <div className="footer-top-section container">
//             <div className="about">
//               <img src={mail_send} alt="mail-send" />
//               <div className="info">
//                 <p>Yangi maqolalarga obuna bo'ling</p>
//                 <span>Eng so'ngi yangiliklar faqat bizda!</span>
//               </div>
//             </div>
//             <form className="send-email" onSubmit={handleSubmit}>
//               {successMessage ? (
//                 <div className="success-message">
//                   <h2>{successMessage}</h2>
//                 </div>
//               ) : (
//                 <>
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Email manzilingizni kiriting"
//                     className={formErrors.email ? "input-error" : ""}
//                   />
//                   <button type="submit" className="newslettersendButton">
//                     <i className="fa-regular fa-paper-plane"></i>
//                   </button>
//                   {formErrors.email && (
//                     <div className="error-message">{formErrors.email}</div>
//                   )}
//                 </>
//               )}
//             </form>
//           </div>
//         </div>
//         <div className="main-footer">
//           <div className="container">
//             <div className="main-footer-details">
//               <div className="logo">
//                 <img src={logo} alt="" />
//                 <div className="info">
//                   <p>
//                     Yusro turizm agentligi O‘zbekistondagi eng ishonchli,
//                     tezkor va {info?.experience || "ko'p"} yillik tajribaga ega kompaniyalardan biri
//                     hisoblanadi. Biz sizga qulay va oson sayohat qilishni
//                     kafolat beramiz.
//                   </p>
//                   <div className="social-networks">
//                     <a href={info?.instagram || "/"} target="_blank">
//                       <img src={instagram_icon} alt="" />
//                     </a>
//                     <span></span>
//                     <a href={info?.telegram || "/"} target="_blank">
//                       <img src={telegram_icon} alt="" />
//                     </a>
//                     <span></span>
//                     <a href={info?.facebook || "/"} target="_blank">
//                       <img src={facebook_icon} alt="" />
//                     </a>
//                     <span></span>
//                     <a href={info?.youtube || "/"} target="_blank">
//                       <img src={youtube_icon} alt="" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="clip">
//                 <div className="title">Lavhalar</div>
//                 <div className="images">
//                   <img src={layer1} alt="" />
//                   <img src={layer2} alt="" />
//                   <img src={layer3} alt="" />
//                   <img src={layer4} alt="" />
//                   <img src={layer5} alt="" />
//                   <img src={layer6} alt="" />
//                 </div>
//               </div>
//               <div className="we-offer">
//                 <div className="title">Biz taklif qilamiz</div>
//                 <div className="lists">
//                   <div className="list">
//                     <i className="fa-solid fa-chevron-right"></i>
//                     <span>Umra ziyorati</span>
//                   </div>
//                   <div className="list">
//                     <i className="fa-solid fa-chevron-right"></i>
//                     <span>Haj ziyorati</span>
//                   </div>
//                   <div className="list">
//                     <i className="fa-solid fa-chevron-right"></i>
//                     <span>Turistik sayohatlar</span>
//                   </div>
//                   <div className="list">
//                     <i className="fa-solid fa-chevron-right"></i>
//                     <span>Shahar bo'ylab ekskursiyalar</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="contacts">
//                 <div className="title">Biz bilan aloqa</div>
//                 <div className="info">
//                   <div className="list">
//                     <img src={location} alt="" />
//                     <span>{info?.address || ""}</span>
//                   </div>
//                   <div className="list">
//                     <img src={phone} alt="" />
//                     <a href={info?.telephone ? `tel:${info.telephone}` : ""}>
//                       {info?.telephone || ""}
//                     </a>
//                   </div>
//                   <div className="list">
//                     <img src={telegram} alt="" />
//                     <a href={info?.telegram || "/"} target="_blank">
//                       Telegram
//                     </a>
//                   </div>
//                   <div className="list">
//                     <img src={message} alt="" />
//                     <a href={info?.email ? `mailto:${info.email}` : ""}>
//                       {info?.email || ""}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="payment">
//               <p>To'lov turlari</p>
//               <div className="methods">
//                 <img src={uzcard} alt="uzcard" />
//                 <img src={humo} alt="humo" />
//                 <img src={mastercard} alt="mastercard" />
//                 <img src={visa} alt="visa" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container rights-reserved">
//           <p>
//             Barcha huquqlar himoyalangan <a href="https://yusro.uz">Yusro</a>{" "}
//             @ 2023
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default RootLayout;
