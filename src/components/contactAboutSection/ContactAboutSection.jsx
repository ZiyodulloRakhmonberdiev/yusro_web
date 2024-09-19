import "./contactAboutSection.css";

// import images
import kabahlocation from "../../icons/kabah_loc_outline.png";
import sign from "../../icons/sign_twice.png";
import phone from "../../icons/phone_fill.png";
import Info from "../../service/info";
import useFetch from "../../hooks/useFetch";

function ContactAboutSection() {
  const { data: info } = useFetch(Info.getInfo);
  return (
    <div className="contact-us-about">
      <div className="container">
        <div className="about">
          <h1 className="main-title">
            Ham arzon, ham sifatli ziyorat paketlarini qidiryapsizmi? Siz
            to'g'ri manzildasiz!
          </h1>
          <p className="main-subtitle">
            Agentligimiz Umra-Haj ziyoratlarini tashkil etish yo'nalishida{" "}
            {info.experience ? info.experience + " yillik" : "uzoq yillik"}{" "}
            tajribaga ega bo'lgani bois, biz o'zimiz va xizmatlarimizni hech
            ikkilanmay professional va ishonchli deb ayta olamiz va har bir
            mijozga sidqidillik bilan yondoshamiz.
          </p>
          <div className="we-results">
            <div className="we-result">
              <img src={sign} alt="icon" />
              <div className="we-result-about">
                <p>{info.successful_visas?.toLocaleString() || "Yuzlab"}</p>
                <span>muvaffaqiyatli vizalar</span>
              </div>
            </div>
            <div className="we-result">
              <img src={kabahlocation} alt="icon" />
              <div className="we-result-about">
                <p>
                  {info.travelers?.toLocaleString() || "Yuzlab"}
                </p>
                <span>Umra sayohatchilari</span>
              </div>
            </div>
          </div>
          <div className="answers-to-questions">
            <img src={phone} alt="phone-icon" />
            <div className="wrapper">
              <p>
                Yana qanday savollaringiz bor? Batafsil ma'lumot uchun biz bilan
                bog'laning:
              </p>
              <a href={info.telephone ? `tel:${info.telephone}` : ""}>
                {info.telephone ? info.telephone : ""}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactAboutSection;
