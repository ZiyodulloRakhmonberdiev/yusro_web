import "./agencyExperience.css";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// import images
import nabawi from "../../images/nabawi_9.jpg";
import nabawi_3 from "../../images/nabawi_3.jpg";
import security from "../../icons/sec_tall_wrap.png";
import Info from "../../service/info";
import useFetch from "../../hooks/useFetch";
import defaultVideo from "../../video/defaultVideo.mp4"

function AgencyExperience() {
  const { data: info } = useFetch(Info.getInfo);
  
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery2']", {
      youtube: {
        controls: 1,
        autoplay: 1,
      },
      vimeo: {
        color: "f00",
      },
    });
    // Clean up on component unmount
    return () => {
      Fancybox.destroy();
    };
  }, []);
  return (
    <div className="agency-experience container">
      <div className="images">
        <div className="nabawi-wrap">
          <img src={nabawi} alt="nabawi" className="nabwi1" />
        </div>
        <div className="grid-image-wrapper">
          <div className="sign1-wrapper">
            <h1>Umra-Hajni mukammal bajarishni bilib oling</h1>
          </div>
          <div className="nabwi2-wrapper">
            <a
              data-fancybox="gallery2"
              href={
                info.haj_instruction_video_url || info.haj_instruction_video || defaultVideo
              }
            >
              <img
                src={info.haj_instruction_poster || nabawi_3}
                className="poster-img"
                alt=""
              />
              <div className="play-icon-div">
                <button className="play-icon-wrapper">
                  <div className="triangle"></div>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="main-title">
          <h1>
            Agentligimiz{" "}
            {info.travelers ? info.travelers + " dan ortiq" : "yuzlab"} Umra-Haj
            ziyoratchilariga xizmat ko'rsatgan!
          </h1>
          <p>
            Yusro O'zbekistondagi Umra va Haj hamda boshqa turdagi xalqaro
            sayohatlarni arzon, sifatli, tezkor va xavfsizligini ta'minlagan
            holda mijozlarga xizmat ko'rsatib kelmoqda
          </p>

          <div className="experience-section">
            <div className="experience">
              <img src={security} alt="" />
              <div className="about">
                <h1>{info.experience ? info.experience : "7"}</h1>
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
                <span>
                  {info.experience ? info.experience : "Bir necha"} yil, ko'plab
                  yutuqlar mukofotlari
                </span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgencyExperience;
