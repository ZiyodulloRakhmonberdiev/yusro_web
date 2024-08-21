import "./agencyExperience.css";

// import images
import nabawi from "../../images/nabawi_9.jpg";
import nabawi_3 from "../../images/nabawi_3.jpg";
import security from "../../icons/sec_tall_wrap.png";

function AgencyExperience() {
  return (
    <div className="agency-experience container">
      <div className="images">
        <div className="nabawi-wrap">
          <img src={nabawi} alt="nabawi" className="nabwi1" />
        </div>
        <div className="grid-image-wrapper">
          <div className="sign1-wrapper">
            {/* <img src={images.sign1} alt="" className="sign1" /> */}
            <h1>Haj va umrani mukammal bajarishni bilib oling</h1>
          </div>
          <div className="nabwi2-wrapper">
            <img src={nabawi_3} alt="" className="nabwi2" />
            <div className="play-icon-div">
              <button className="play-icon-wrapper">
                <div className="triangle"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="main-title">
          <h1>
            Agentligimiz 100.000 dan ortiq Haj va Umra ziyoratchilariga xizmat
            ko'rsatgan!
          </h1>
          <p>
            Yusro O‘zbekistondagi Umra va Haj hamda boshqa turdagi xalqaro
            sayohatlarni arzon, sifatli, tezkor va xavfsizligini ta’minlagan
            holda mijozlarga xizmat ko‘rsatib kelmoqda
          </p>

          <div className="experience-section">
            <div className="experience">
              <img src={security} alt="" />
              <div className="about">
                <h1>7</h1>
                <span>Yillik tajriba</span>
              </div>
            </div>
            <div className="experience-about">
              <li>
                <i className="fa-solid fa-check"></i>
                <span>Haramdan 100 metr masofada hashamatli mehmonxona</span>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>Saudiya hukumatining mukofotlari</span>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>7+ yil, ko'plab yutuqlar mukofotlari</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgencyExperience;
