import "./opinion.css";
import React, { useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// ui
import Title from "./../../ui/Title";
import Loader from "./../../ui/Loader";
// custom hooks
import useFetch from "./../../hooks/useFetch";
import UserOpinion from "./../../service/opinion";

// import images
import kabah from "../../icons/kabah_outline.png";
import muslim from "../../icons/muslim_icon.png";
import { useLocation } from "react-router-dom";

function Opinion() {
  const { data, loading, error } = useFetch(UserOpinion.getAgencyComfort);
  const renderStars = (point) => {
    const stars = [];
    for (let i = 0; i < point; i++) {
      stars.push("⭐");
    }
    return stars.join(" ");
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="opinion-section">
      <div className="container">
        <div className="title-wrapper">
          <Title
            img={kabah}
            title="Fikrlar"
            whiteDescription="Har yili yuzlab mijozlar agentligimiz orqali sayohatlarga chiqishadi"
          />
        </div>
        <div className="opinion-carousel">
          {loading ? (
            <Loader />
          ) : (
            <Swiper
              spaceBetween={30}
              pagination={{
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {data.results?.length > 0 ? (
                data.results?.map((opinion, index) => (
                  <SwiperSlide key={index}>
                    <div className="opinion-slide">
                      <div className="opinion-image">
                        <img
                          src={opinion.image ? opinion.image : muslim}
                          alt={opinion.full_name}
                        />
                      </div>
                      <div className="opinion-about">
                        <span className="point">
                          {renderStars(opinion.point)}
                        </span>
                        <p className="theme">{opinion.theme}</p>
                        <p className="description">{opinion.text}</p>
                        <h3 className="name">{opinion.full_name}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <>
                  <SwiperSlide>
                    <div className="opinion-slide">
                      <div className="opinion-image">
                        <img src={muslim} alt="" />
                      </div>
                      <div className="opinion-about">
                        <span className="point">{renderStars(5)}</span>
                        <p className="theme">Umra sayohati</p>
                        <p className="description">
                          Men Yusro agentligi bilan hamkorlikda Umra safarini
                          amalga oshirdim. Sayohat juda yaxshi va xavfsiz
                          bo'ldi. Umra safarini niyat qilib yurganlar uchun
                          Yusro agentligini tavsiya qilaman
                        </p>
                        <h3 className="name">Noma'lum</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              )}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}

export default Opinion;
