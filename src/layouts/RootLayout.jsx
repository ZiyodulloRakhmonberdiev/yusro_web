import "./rootLayout.css";
import { Fancybox } from "@fancyapps/ui";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "../helpers/ScrollToTop";
import Sidebar from "./../components/sidebar/Sidebar";
import SearchModal from "../components/searchModal/SearchModal";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import Info from "../service/info";
import Loader from "../ui/Loader";

// import images
import logo from "../icons/logo_tour.png";
import logo2 from "../icons/logo_tour.png";
import phone_icon from "../icons/phone_outline.png";
import mail_icon from "../icons/message_outline.png";
import mail_send from "../icons/mail_send.png";

import layer1 from "../images/kabah_3.jpg";
import layer2 from "../images/nabawi_3.jpg";
import layer3 from "../images/nabawi_8.jpg";
import layer4 from "../images/nabawi_5.jpg";
import layer5 from "../images/nabawi_2.jpg";
import layer6 from "../images/kabah_5.jpg";

import humo from "../images/card_humo.png";
import uzcard from "../images/card_uz.png";
import mastercard from "../images/card_master.png";
import visa from "../images/card_visa.png";

import phone from "../icons/phone_outline.png";
import telegram from "../icons/telegram_outline.png";
import message from "../icons/message_outline.png";
import location from "../icons/location_outline.png";
import telegram_icon from "../icons/telegram_icon.png";
import facebook_icon from "../icons/facebook_icon.png";
import instagram_icon from "../icons/instagram_icon.png";
import youtube_icon from "../icons/youtube_icon.png";

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
        "https://api.yusro-tour.uz/api/v1/main/subscriber-create/",
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

  const { data: info, loading: loader } = useFetch(Info.getInfo);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    setSearchLoading(true);
    if (searchTerm.trim()) {
      try {
        const response = await axios.get(
          `https://api.yusro-tour.uz/api/v1/main/post/`,
          {
            params: { search: searchTerm },
          }
        );
        setSearchResults(response.data.results); // Assuming the API returns a 'results' array
        setIsModalOpen(true); // Open the modal
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
    setSearchLoading(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleModalSearch = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    // Bind fancybox for the gallery
    Fancybox.bind("[data-fancybox='galleries']", {
      loop: true, // Allows cycling through images
      buttons: ["zoom", "close", "thumbs"], // Fancybox control buttons
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="root">
      <ScrollToTop />
      {/* <div className="marquee">
        <div className="marquee-text">Sayt test rejimida ishlayapti</div>
        <div className="marquee-text">Sayt test rejimida ishlayapti</div>
        <div className="marquee-text">Sayt test rejimida ishlayapti</div>
        <div className="marquee-text">Sayt test rejimida ishlayapti</div>
        <div className="marquee-text">Sayt test rejimida ishlayapti</div>
        <div className="marquee-text">Sayt test rejimida ishlayapti</div>
        <div className="marquee-text">Sayt test rejimida ishlayapti</div>
      </div> */}
      <header>
        <section className="main-head container">
          <div className="social-media">
            <p>Ijtimoiy tarmoqlarimiz</p>
            <span></span>
            <a href={info.instagram ? info.instagram : "/"}>
              <img src={instagram_icon} alt="" />
            </a>
            <span></span>
            <a href={info.telegram ? info.telegram : "/"}>
              <img src={telegram_icon} alt="" />
            </a>
            <span></span>
            <a href={info.facebook ? info.facebook : "/"}>
              <img src={facebook_icon} alt="" />
            </a>
            <span></span>
            <a href={info.youtube ? info.youtube : "/"}>
              <img src={youtube_icon} alt="" />
            </a>
          </div>
          <div className="navbar">
            <Link to="/about-us">Biz haqimizda</Link>
            <Link to="/opinion">Fikrlar</Link>
            <Link to="/umra">Umra</Link>
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
                  <a
                    href={
                      info.telephone
                        ? `tel:${info.telephone}`
                        : "tel:+998 55 500 22 28"
                    }
                  >
                    {info.telephone ? info.telephone : "+998 55 500 22 28"}
                  </a>
                </div>
              </div>
              <div className="by-contact">
                <img src={mail_icon} alt="" />
                <div className="about">
                  <span>Email manzilimiz</span>
                  <a
                    href={
                      info.email
                        ? `mailto:${info.email}`
                        : "mailto:admin@yusro.uz"
                    }
                  >
                    {info.email ? info.email : "admin@yusro.uz"}
                  </a>
                </div>
              </div>
              <div className="search-wrapper">
                <form className="search" onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    placeholder="Qidirish"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    name="search"
                  />
                  <button type="submit" className="submit-button">
                    {searchLoading ? (
                      <i className="fa-solid fa-spinner fa-spin"></i> // Yuklanayotgan paytda spinner
                    ) : (
                      <i className="fa-solid fa-magnifying-glass"></i> // Standart holat
                    )}
                  </button>
                </form>
                <button
                  className="handle-submit-button"
                  onClick={handleModalSearch}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                {isModalOpen && (
                  <SearchModal
                    posts={searchResults}
                    onClose={handleCloseModal}
                    searchTerm={searchTerm}
                    handleSearchSubmit={handleSearchSubmit}
                    handleSearchChange={handleSearchChange}
                    isSearching={isSearching}
                  />
                )}
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
      {loader ? (
        <Loader className="loader" />
      ) : (
        <>
          <Sidebar active={active} setActive={setActive} />

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
                      <button
                        type="submit"
                        disabled={loading}
                        className="newslettersendButton"
                      >
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
                        Yusro turizm agentligi O‘zbekistondagi eng ishonchli,
                        tezkor va {info.expeirence ? info.expeirence : "uzoq"}{" "}
                        yillik tajribaga ega kompaniyalardan biri hisoblanadi.
                        Biz sizga qulay va oson sayohat qilishni kafolat
                        beramiz.
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
                        <a
                          href={info.youtube ? info.youtube : ""}
                          target="_blank"
                        >
                          <img src={youtube_icon} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="clip">
                    <div className="title">Lavhalar</div>
                    <div className="images">
                      <a data-fancybox="galleries" href={layer1}>
                        <img src={layer1} alt="" />
                      </a>
                      <a data-fancybox="galleries" href={layer2}>
                        <img src={layer2} alt="" />
                      </a>
                      <a data-fancybox="galleries" href={layer3}>
                        <img src={layer3} alt="" />
                      </a>
                      <a data-fancybox="galleries" href={layer4}>
                        <img src={layer4} alt="" />
                      </a>
                      <a data-fancybox="galleries" href={layer5}>
                        <img src={layer5} alt="" />
                      </a>
                      <a data-fancybox="galleries" href={layer6}>
                        <img src={layer6} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="we-offer">
                    <div className="title">Biz taklif qilamiz</div>
                    <div className="lists">
                      <div className="list">
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link className="link" to={"/umra"}>
                          Umra ziyorati
                        </Link>
                      </div>
                      <div className="list">
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link className="link" to={"/packages"}>
                          Ichki turizm
                        </Link>
                      </div>
                      <div className="list">
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link className="link" to={"/packages"}>
                          Tashqi turizm
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="footer-contact-us">
                    <div className="title">Biz bilan bog'laning</div>
                    <div className="details">
                      <div className="detail">
                        <img src={phone} alt="" />
                        <a
                          href={
                            info.telephone
                              ? `tel:${info.telephone}`
                              : "tel:+998 55 500 22 28"
                          }
                        >
                          {info.telephone
                            ? info.telephone
                            : "+998 55 500 22 28"}
                        </a>
                      </div>
                      <div className="detail">
                        <img src={telegram} alt="" />
                        <a
                          href={info.telegram_admin ? info.telegram_admin : ""}
                        >
                          Yusro Admin
                        </a>
                      </div>
                      <div className="detail">
                        <img src={message} alt="" />
                        <a
                          href={
                            info.email
                              ? `mailto:${info.email}`
                              : "mailto:admin@yusro.uz"
                          }
                        >
                          {info.email ? info.email : "admin@yusro.uz"}
                        </a>
                      </div>
                      <div className="detail">
                        <img src={location} alt="" />
                        <span>
                          {info.location ? info.location : "O'zbekiston"}
                        </span>
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
        </>
      )}
    </div>
  );
}

export default RootLayout;
