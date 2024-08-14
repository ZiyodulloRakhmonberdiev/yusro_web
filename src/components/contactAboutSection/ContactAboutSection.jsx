import "./contactAboutSection.css";

// import images
import kabahlocation from "./images/kabahlocation.png";
import sign from "./images/sign.png";
import phone from "./images/phone.png"

function ContactAboutSection() {
  return (
    <div className="contact-us-about">
      <div className="container">
        <div className="about">
          <h1 className="main-title">
            Arzon paketlarni qidiryapsizmi? Siz to'g'ri joydasiz
          </h1>
          <p className="main-subtitle">
            Biz haj va umra sayohati sohasida 7 yildan ortiq vaqt davomida
            ishladik va biz o'zimizni hech ikkilanmay professional, qobiliyatli
            va mehmondo'st deb aytishga ishonchimiz komil.
          </p>
          <div className="we-results">
            <div className="we-result">
              <img src={sign} alt="icon" />
              <div className="we-result-about">
                <p>100k+</p>
                <span>Muvaffaqiyatli viza</span>
              </div>
            </div>
            <div className="we-result">
              <img src={kabahlocation} alt="icon" />
              <div className="we-result-about">
                <p>850k+</p>
                <span>Umra sayohatchilari</span>
              </div>
            </div>
          </div>
          <div className="answers-to-questions">
            <img src={phone} alt="phone-icon" />
            <div className="wrapper">
              <p>Savollaringiz bormi? Biz bilan bog'laning</p>
              <span>+998 (88) 511 11 66</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactAboutSection;
