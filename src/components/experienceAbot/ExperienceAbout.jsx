import "./experienceAbout.css";
import images from "./../../images/index";

function ExperienceAbout() {
  return (
    <div className="container">
      <div className="about">
        <img src={images.bismillah} alt="bismillah-image" />
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
              <img src={images.mehmonxona} alt="hotel" />
            </div>
            <span>Shinam mehmonxonalar</span>
          </div>
          <div className="item">
            <div className="item-image-wrapper">
              <img src={images.passport} alt="visa-document" />
            </div>
            <span>Tezkor viza xizmati</span>
          </div>
          <div className="item">
            <div className="item-image-wrapper">
              <img src={images.kabah} alt="kabah" />
            </div>
            <span>Haramga yaqin</span>
          </div>
          <div className="item">
            <div className="item-image-wrapper">
              <img src={images.hour} alt="hour-day" />
            </div>
            <span>24 / 7 Hojiboshilar xizmati</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceAbout;
