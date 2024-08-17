import "./experienceAbout.css";

// Import images
import bismillah from "../../images/bismillah.png"
import hotel from "../../icons/hotel_outline.png"
import kabah from "../../icons/kabah_outline.png"
import hour from "../../icons/24_7_outline.png"
import passport from "../../icons/passport_outline.png"


function ExperienceAbout() {
  return (
    <div className="container">
      <div className="about">
        <img src={bismillah} alt="bismillah-image" />
        <h1 className="title">
          Biz 7 yillik tajribaga ega sayyohlik agentligimiz
        </h1>
        <p>
          Biz haj va umra sayohati sohasida 7 yildan ortiq vaqt davomida
          ishladik va biz o'zimizni hech ikkilanmay professional, qobiliyatli va
          mehmondo'st deb aytishga ishonchimiz komil.
        </p>
        <div className="items">
          <div className="item">
            <div className="item-image-wrapper">
              <img src={hotel} alt="hotel" />
            </div>
            <span>Shinam mehmonxonalar</span>
          </div>
          <div className="item">
            <div className="item-image-wrapper">
              <img src={passport} alt="visa-document" />
            </div>
            <span>Tezkor viza xizmati</span>
          </div>
          <div className="item">
            <div className="item-image-wrapper">
              <img src={kabah} alt="kabah" />
            </div>
            <span>Haramga yaqin</span>
          </div>
          <div className="item">
            <div className="item-image-wrapper">
              <img src={hour} alt="hour-day" />
            </div>
            <span>24 / 7 Hojiboshilar xizmati</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceAbout;
