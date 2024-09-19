import { Link } from "react-router-dom";
import "./sidebar.css";
import Info from "../../service/info";
import useFetch from "../../hooks/useFetch";

// import images
import logo from "../../icons/logo_tour.png";
import youtube_icon from "../../icons/youtube_icon.png";
import instagram_icon from "../../icons/instagram_icon.png";
import telegram_icon from "../../icons/telegram_icon.png";
import facebook_icon from "../../icons/facebook_icon.png";
import phone_outline from "../../icons/phone_outline.png";
import message_outline from "../../icons/message_outline.png";

function Sidebar({ active, setActive }) {
  const handleLinkClick = () => {
    setActive(false);
  };
  const { data: info } = useFetch(Info.getInfo);

  return (
    <div className={`sidebar ${active ? "active" : ""}`}>
      <div className="logo-wrapper">
        <Link className="logo">
          <img src={logo} alt="" />
        </Link>
        <i className="fa-solid fa-xmark" onClick={() => setActive(false)}></i>
      </div>
      <div className="sidebar-navbar-wrapper">
        <div className="sidebar-navbar">
          <Link to="/" onClick={handleLinkClick}>
            Bosh sahifa
          </Link>
          <Link to="/about-us" onClick={handleLinkClick}>
            Biz haqimizda
          </Link>
          <Link to="/packages" onClick={handleLinkClick}>
            Paketlar
          </Link>
          <Link to="/blog" onClick={handleLinkClick}>
            Blog
          </Link>
          <Link to="/video-content" onClick={handleLinkClick}>
            Media
          </Link>
          <Link to="/opinion" onClick={handleLinkClick}>
            Fikrlar
          </Link>
          <Link to="/umra" onClick={handleLinkClick}>
            Umra
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            Aloqa
          </Link>
        </div>
      </div>
      <div className="sidebar-footer">
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
        <div className="by-contact">
          <img src={phone_outline} alt="" />
          <div className="about">
            <span>Hoziroq bizga qo'ng'iroq qiling</span>
            <a
              className="link"
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
          <img src={message_outline} alt="" />
          <div className="about">
            <span>Email manzilimiz</span>
            <a
              className="link"
              href={
                info.email ? `mailto:${info.email}` : "mailto:admin@yusro.uz"
              }
            >
              {info.email ? info.email : "admin@yusro.uz"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
