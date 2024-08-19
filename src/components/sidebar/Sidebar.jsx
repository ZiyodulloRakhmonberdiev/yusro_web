import { Link } from 'react-router-dom';
import './sidebar.css';

// import images
import logo from "../../icons/logo_white.png";
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

    return (
        <div className={`sidebar ${active ? 'active' : ''}`}>
            <div className="logo-wrapper">
                <Link className="logo">
                    <img src={logo} alt="" />
                </Link>
                <i className="fa-solid fa-xmark" onClick={() => setActive(false)}></i>
            </div>
            <div className="sidebar-navbar-wrapper">
                <div className="sidebar-navbar">
                    <Link to="/about-us" onClick={handleLinkClick}>Biz haqimizda</Link>
                    {/* <Link to="" onClick={handleLinkClick}>Hamkorkik</Link> */}
                    {/* <Link to="" onClick={handleLinkClick}>Fikrlar</Link> */}
                    <Link to="/umra" onClick={handleLinkClick}>Umra</Link>
                    <Link to="/haj" onClick={handleLinkClick}>Haj</Link>
                    <Link to="/contact" onClick={handleLinkClick}>Aloqa</Link>
                </div>
            </div>
            <div className="sidebar-footer">
                <div className="social-media">
                    <p>Ijtimoiy tarmoqlarimiz</p>
                    <span></span>
                    <img src={instagram_icon} alt="" onClick={handleLinkClick} />
                    <span></span>
                    <img src={telegram_icon} alt="" onClick={handleLinkClick} />
                    <span></span>
                    <img src={facebook_icon} alt="" onClick={handleLinkClick} />
                    <span></span>
                    <img src={youtube_icon} alt="" onClick={handleLinkClick} />
                    <span></span>
                </div>
                <div className="by-contact">
                    <img src={phone_outline} alt="" />
                    <div className="about">
                        <span>Hoziroq bizga qo'ng'iroq qiling</span>
                        <a href='tel:998885111166'>+998 (88) 511 11 66</a>
                    </div>
                </div>
                <div className="by-contact">
                    <img src={message_outline} alt="" />
                    <div className="about">
                        <span>Email manzilimiz</span>
                        <a href='mailto:admin@yusro.uz'>admin@yusro.uz</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
