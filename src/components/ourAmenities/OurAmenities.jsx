import "./ourAmenities.css";
import { Link } from "react-router-dom";
import Title from "./../../ui/Title";
import Loader from "./../../ui/Loader";
import useFetch from "./../../hooks/useFetch";
import ComfortItem from "./../../service/comfort";
import NotAvailable from "../../helpers/NotAvailable";

// import images
import kabah from "../../icons/kabah_outline.png";
import kabah_white from "../../icons/kabah_white.png";
import mosque_white from "../../icons/mosque_white.png";
import sign from "../../icons/sign_twice.png";
import food from "../../icons/sec_food.png";
import passport from "../../icons/passport_outline.png";
import kabah_outline from "../../icons/kabah_loc_outline.png";

function OurAmenities() {
  const { data, loading } = useFetch(ComfortItem.getAgencyComfort);

  return (
    <div className="our-amenities">
      <div className="container">
        <div className="amenities-title">
          <div className="cards">
            <div className="card">
              <img src={kabah_white} alt="" />
              <p>
                Umra{" "}
                <Link className="link" to={"/contact"}>
                  (Ro'yxatdan o'tish)
                </Link>
                <i className="fa-solid fa-arrow-right"></i>
              </p>
            </div>
            <div className="card card2">
              <img src={mosque_white} alt="" />
              <p>Chegirmali paketlar</p>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "100px" }}>
          <Title
            img={kabah}
            title="Qulayliklarimiz"
            description="Umra-Haj ziyoratlarini birlashtirishda yuqori tajribaga ega"
          />
        </div>
        <div className="amenities-grid">
          {loading ? (
            <Loader />
          ) : data && data.results?.length > 0 ? (
            data.results.slice(0, 8).map((data) => (
              <div key={data.id} className="amenity-card">
                <img src={data.image} alt="empty" className="amenity-image" />
                <p>{data.title}</p>
                <p className="aminity-desc">
                  {data.description && data.description}
                </p>
              </div>
            ))
          ) : (
            <>
              <div className="amenity-card">
                <img src={kabah_outline} alt="" className="amenity-image" />
                <p>Haramga yaqin joylashuv</p>
              </div>
              <div className="amenity-card">
                <img src={food} alt="" className="amenity-image" />
                <p>Issiq taom taqdim etish</p>
              </div>
              <div className="amenity-card">
                <img src={sign} alt="" className="amenity-image" />
                <p>Tibbiy xizmat ko'rsatish</p>
              </div>
              <div className="amenity-card">
                <img src={passport} alt="" className="amenity-image" />
                <p>Hujjatlarni rasmiylashtirish</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default OurAmenities;
