import "./contactAboutSection.css";

// import images
import kabahlocation from "../../icons/kabah_loc_outline.png";
import sign from "../../icons/sign_twice.png";
import phone from "../../icons/phone_fill.png" 
import Info from "../../service/info";
import useFetch from "../../hooks/useFetch";

function ContactAboutSection() {
  const { data: info } = useFetch(Info.getInfo);
  return (
    <div className="contact-us-about">
      <div className="container">
        <div className="about">
          <h1 className="main-title">
            Arzon paketlarni qidiryapsizmi? Siz to'g'ri joydasiz
          </h1>
          <p className="main-subtitle">
            Biz haj va umra sayohati sohasida {info.experience ? info.experience + " yildan ortiq vaqt" : "uzoq yillar"} davomida
            ishladik va biz o'zimizni hech ikkilanmay professional, qobiliyatli
            va mehmondo'st deb aytishga ishonchimiz komil.
          </p>
          <div className="we-results">
            <div className="we-result">
              <img src={sign} alt="icon" />
              <div className="we-result-about">
                <p>{info.successful_visas ? info.successful_visas : "Yuzlab"}</p>
                <span>Muvaffaqiyatli viza</span>
              </div>
            </div>
            <div className="we-result">
              <img src={kabahlocation} alt="icon" />
              <div className="we-result-about">
                <p>{info.travelers ? info.travelers : "Yuzlab"}</p>
                <span>Umra sayohatchilari</span>
              </div>
            </div>
          </div>
          <div className="answers-to-questions">
            <img src={phone} alt="phone-icon" />
            <div className="wrapper">
              <p>Savollaringiz bormi? Biz bilan bog'laning</p>
              <a href={info.telephone ? `tel:${info.telephone}` : "tel:+998 55 500 22 28"}>{info.telephone ? info.telephone : "+998 55 500 22 28"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactAboutSection;
