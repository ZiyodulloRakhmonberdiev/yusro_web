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

import kabah from "../../icons/kabah_outline.png";
import axios from "axios";

function TourPackages() {
  const { data, loading, error } = useFetch(Travel.getPlaces);
  const [selectedPackage, setSelectedPackage] = useState({});
  const [tours, setTours] = useState([]);
  const [allTours, setAllTours] = useState([]);

  const navigate = useNavigate();

  const main_url = "http://95.46.96.78:7777/api/v1";

  useEffect(() => {
    axios
      .get(`${main_url}/tours/list/`)
      .then((response) => {
        if (Array.isArray(response.data.results)) {
          setAllTours(response.data.results);
          setTours(response.data.results);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi!", error);
      });
  }, []);

  useEffect(() => {
    if (selectedPackage.id && Array.isArray(allTours)) {
      const filteredTours = allTours.filter(
        (tour) => tour.category === selectedPackage.id
      );
      setTours(filteredTours);
    } else {
      setTours(allTours);
    }
  }, [selectedPackage, allTours]);

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleOrderClick = (pkg) => {
    navigate(`/packages/${pkg.id}`);
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
            {data.results?.length === 0 ? (
              <p>Ma'lumot topilmadi</p>
            ) : (
              data.results?.map((item) => (
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
          {Array.isArray(tours) && tours.length > 0 ? (
            <Swiper
              slidesPerView="1"
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper tour-swiper"
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
              {tours.map((pack) => (
                <SwiperSlide key={pack.id}>
                  <div className="package">
                    <div className="package-image">
                      <img src={pack.image} alt={pack.name} />
                    </div>
                    <div className="package-content">
                      <h3>{pack.name}</h3>
                      <ul>
                        <p>O'z ichiga oladi:</p>
                        {pack.includes && pack.includes.length > 0 ? (
                          pack.includes.map((include) => (
                            <li key={include.id}>
                              <i className="fa-solid fa-check"></i>
                              {include.name}
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
              ))}
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
