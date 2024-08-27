import { useEffect, useState } from "react";

import "./teams.css";
import Title from "../../ui/Title";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// import images
import kabah from "../../icons/kabah_outline.png";
import muslim from "../../icons/muslim_icon.png";
import axios from "axios";

function Teams() {
  const [teams, setTeams] = useState([]);
  const main_url = "http://95.46.96.78:7777/api/v1";

  useEffect(() => {
    axios
      .get(`${main_url}/main/team/`)
      .then((response) => setTeams(response.data))
      .catch(() => {
        throw new Error("Xatolik yuz berdi!");
      });
  }, []);

  return (
    <div className="teams">
      <div className="container">
        <Title
          img={kabah}
          title="Jamoa bilan tanishing"
          description="Malakali jamoa a'zolari sizga o'z xizmatlarini taklif qiladi"
        />
        <div className="carousel">
          <Swiper
            slidesPerView="1"
            spaceBetween={30}
            pagination={{
              dynamicBullets: true,
            }}
            breakpoints={{
              400: {
                slidesPerView: "1",
                spaceBetween: 20,
              },
              550: {
                slidesPerView: "2",
                spaceBetween: 20,
              },
              850: {
                slidesPerView: "3",
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {teams.results?.length > 0 &&
              teams.results?.map((team) => (
                <SwiperSlide key={team.id}>
                  <div className="image">
                    <img src={team.image ? team.image : muslim} alt="" />
                  </div>
                  <div className="about">
                    <div className="name">{team.full_name}</div>
                    <div className="description">
                      {team.position}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Teams;
