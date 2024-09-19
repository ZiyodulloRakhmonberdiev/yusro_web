import "./agencyResults.css";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import mosque_2 from "../../images/mosque_2.jpg";
import message_fill from "../../icons/message_fill.png";
import location_fill from "../../icons/location_fill.png";
import muslim from "../../icons/muslim_icon.png";
import Info from "../../service/info";
import useFetch from "../../hooks/useFetch";
import defaultVideo from "../../video/defaultVideo.mp4";
function AgencyResults() {
  const { data: info } = useFetch(Info.getInfo);
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
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
    <div className="agency-results">
      <div className="container">
        <div className="about">
          <div className="title">
            Agentligimiz{" "}
            {info.travelers
              ? info.travelers?.toLocaleString() + " dan ortiq "
              : " minglab "}{" "}
            Umra-Haj ziyoratchilar uchun xizmat qilgan
          </div>
          <div className="image">
            <a
              data-fancybox="gallery"
              href={
                info.about_us_video_url || info.about_us_video || defaultVideo
              }
            >
              <img src={info.about_us_poster || mosque_2} alt="" />
              <div className="play-icon-div">
                <button className="play-icon-wrapper">
                  <div className="triangle"></div>
                </button>
              </div>
            </a>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="image">
              <img src={message_fill} alt="" />
            </div>
            <div className="about">
              <div className="title">Umra-Haj tur operatori</div>
              <p>
                Tashkilot manzillarini qidirishda, buyurtma berishda,
                shartnomalarni tuzib, muzokaralarni olib borishda
                ko'maklashishadi.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={location_fill} alt="" />
            </div>
            <div className="about">
              <div className="title">
                Aviakompaniyalarni bron qilish va chiptalarni sotish
              </div>
              <p>
                Aviakompaniyalar bilan shartnoma tuzadi, joylarni bron qiladi va
                chiptalar sotadi
              </p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={muslim} alt="" />
            </div>
            <div className="about">
              <div className="title">
                Umra-Haj uchun sifatli xizmat ko'rsatish
              </div>
              <p>
                Mijozlarga ularning muammolarini yechishda doim yaqindan yordam
                beradi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgencyResults;
