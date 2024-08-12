import { Link } from 'react-router-dom';
import './sidebar.css';
import images from './../../images/index';

function Sidebar({ active, setActive }) {
    const handleLinkClick = () => {
        setActive(false);
    };

    return (
        <div className={`sidebar ${active ? 'active' : ''}`}>
            <div className="logo-wrapper">
                <Link className="logo">
                    <img src={images.logo2} alt="" />
                </Link>
                <i className="fa-solid fa-xmark" onClick={() => setActive(false)}></i>
            </div>
            <div className="sidebar-navbar-wrapper">
                <div className="sidebar-navbar">
                    <Link to="/about-us" onClick={handleLinkClick}>Biz haqimizda</Link>
                    <Link to="" onClick={handleLinkClick}>Hamkorkik</Link>
                    <Link to="" onClick={handleLinkClick}>Fikrlar</Link>
                    <Link to="/umra" onClick={handleLinkClick}>Umra</Link>
                    <Link to="/haj" onClick={handleLinkClick}>Haj</Link>
                    <Link to="/contact" onClick={handleLinkClick}>Aloqa</Link>
                </div>
            </div>
            <div className="sidebar-footer">
                <div className="social-media">
                    <p>Ijtimoiy tarmoqlarimiz</p>
                    <span></span>
                    <img src={images.instagramLogo} alt="" onClick={handleLinkClick} />
                    <span></span>
                    <img src={images.telegramLogo} alt="" onClick={handleLinkClick} />
                    <span></span>
                    <img src={images.facebookLogo} alt="" onClick={handleLinkClick} />
                    <span></span>
                    <img src={images.youtubeLogo} alt="" onClick={handleLinkClick} />
                    <span></span>
                </div>
                <div className="by-phonenumber">
                    <img src={images.phoneLogo} alt="" />
                    <div className="about">
                        <span>Hoziroq bizga qo'ng'iroq qiling</span>
                        <p>+998 (88) 511 11 66</p>
                    </div>
                </div>
                <div className="by-emailadress">
                    <img src={images.messageLogo} alt="" />
                    <div className="about">
                        <span>Email manzilimiz</span>
                        <p>admin@yusro.uz</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
