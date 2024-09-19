import "./experienceAbout.css";

// Import images
import bismillah from "../../images/bismillah.png";
import hotel from "../../icons/hotel_outline.png";
import kabah from "../../icons/kabah_outline.png";
import hour from "../../icons/24_7_outline.png";
import passport from "../../icons/passport_outline.png";
import Info from "../../service/info";
import useFetch from "../../hooks/useFetch";

function ExperienceAbout() {
  const { data: info } = useFetch(Info.getInfo);

  return (
    <div className="container">
      <div className="about">
        <img src={bismillah} alt="bismillah-image" />
        <h1 className="title">
          Yusro Tour {info.experience || " uzoq "} yillik tajribaga ega
          sayyohlik agentligidir
        </h1>
        <p>
          Biz Umra va Haj ziyorati turizm yo'nalishida{" "}
          {info.experience
            ? info.experience + " yildan ziyod vaqt "
            : " yillar "}{" "}
          davomida faoliyat yuritib kelamiz. Ziyoratchilarimiz uchun esa
          professional xizmat ko'rsatib, ishonchlarini doimo oqlaymiz.
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
            <span>24/7 Hojiboshilar xizmati</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceAbout;
