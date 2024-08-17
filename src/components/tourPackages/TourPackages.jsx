import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./tourPackages.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Title from "./../../ui/Title";
import useFetch from "./../../hooks/useFetch";
import Travel from "./../../service/travel";
import Loader from "./../../ui/Loader";
import NotAvailable from "./../../helpers/NotAvailable";

import kabah from '../../icons/kabah_outline.png'

function TourPackages() {
  const { data, loading, error } = useFetch(Travel.getPlaces);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.length > 0) {
      setSelectedPackage(data[0]);
    }
  }, [data]);

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleOrderClick = (pkg) => {
    navigate(`/tour-package/${pkg.id}`);
  };

  return (
    <div className="tour-packages container">
      <Title
        img={kabah}
        title="Bizning tur paketlarimiz"
        description="Maxsus takliflarni o'tkazib yubormang"
      />
      {loading ? (
        <Loader />
      ) : error ? (
        <NotAvailable name={error.message} />
      ) : (
        <>
          <div className="package-buttons">
            {data.length === 0 ? (
              <p>Ma'lumot topilmadi</p>
            ) : (
              data.map((item) => (
                <button
                  key={item.id}
                  className={`package-btn ${
                    selectedPackage && selectedPackage.id === item.id
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handlePackageSelect(item)}
                >
                  {item.name}
                </button>
              ))
            )}
          </div>
          {selectedPackage?.tour_packs?.length > 0 ? (
            <Swiper
              slidesPerView="1"
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              breakpoints={{
                400: {
                  slidesPerView: "1",
                  spaceBetween: 20,
                },
                750: {
                  slidesPerView: "2",
                  spaceBetween: 20,
                },
                1120: {
                  slidesPerView: "3",
                  spaceBetween: 20,
                },
              }}
            >
              {selectedPackage ? (
                selectedPackage.tour_packs?.map((pack) => (
                  <SwiperSlide key={pack.id}>
                    <div className="package">
                      <div className="package-image">
                        <img
                          src={
                            "https://yusro.pythonanywhere.com" +
                            pack.background_image_path
                          }
                          alt={pack.name}
                        />
                      </div>
                      <div className="package-content">
                        <h3>{pack.name}</h3>
                        <ul>
                          {pack.pack_includes &&
                          pack.pack_includes.length > 0 ? (
                            pack.pack_includes.map((include) => (
                              <li key={include.id}>
                                <i className="fa-solid fa-check"></i>
                                {include.text}
                              </li>
                            ))
                          ) : (
                            <li>Ma'lumot mavjud emas</li>
                          )}
                          <button
                            className="order-btn"
                            onClick={() => handleOrderClick(pack)}
                          >
                            Buyurtma qiling
                          </button>
                        </ul>
                        <span className="price">${pack.price}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <NotAvailable name="Ayni vaqtda paketlar mavjud emas" />
              )}
            </Swiper>
          ) : (
            <NotAvailable name="Ayni vaqtda paketlar mavjud emas" />
          )}
        </>
      )}
    </div>
  );
}

export default TourPackages;
