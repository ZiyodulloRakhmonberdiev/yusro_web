import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./tourPackage.css";
import ContactUs from "./../contactUs/ContactUs";
import AnswerToQuestions from "./../answerToQuestions/AnswerToQuestions";
import ExtraPagesHeader from "./../extraPagesHeader/ExtraPagesHeader";
import useFetch from "./../../hooks/useFetch";
import Travel from "./../../service/travel";
import Loader from "./../../ui/Loader";
import NotAvailable from "./../../helpers/NotAvailable";
import { useEffect } from "react";

function TourPackage() {
  const { id } = useParams();
  const {
    data: tourPackage,
    loading,
    error,
  } = useFetch(() => Travel.getTourPacksById(id));
  const {
    data: tourPackagePlace,
    loading: placeLoading,
    error: placeError,
  } = useFetch(() => Travel.getTourPacksPlaceById(id));
  const navigate = useNavigate();
  const handleOrderClick = (pkg) => {
    navigate(`/tour-package/${pkg.id}`);
  };

  // scroll to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="tour-package">
      <ExtraPagesHeader
        title={tourPackage.name + " paketi" || "Paket tafsilotlari"}
      />
      <div className="container">
        <div className="tour-package-about">
          {loading ? (
            <Loader />
          ) : error ? (
            <NotAvailable name={error.message} />
          ) : (
            <>
              <div className="tour-offer">
                <div className="main-image">
                  <img
                    src={tourPackage.image || ""}
                    alt={tourPackage.name || "Tour Package"}
                  />
                </div>
                <div className="title">
                  <h1>{tourPackage.name || "Noma'lum paket"}</h1>
                </div>
                <div className="description">
                  <p>{tourPackage.description || "Ma'lumot mavjud emas"}</p>
                </div>
                <ul className="tour-package-ul">
                  <span>O'z ichiga oladi:</span>
                  {tourPackage.pack_includes &&
                  tourPackage.pack_includes.length > 0 ? (
                    tourPackage.pack_includes.map((include) => (
                      <li key={include.id}>
                        <i className="fa-solid fa-check"></i>
                        {include.text}
                      </li>
                    ))
                  ) : (
                    <li>Ma'lumot mavjud emas</li>
                  )}
                </ul>
              </div>
              {/* <div className="tour-package-items">
                <div className="title">
                  <h1>{tourPackage.name || "Paketlar"} paketlari</h1>
                </div>
                <div className="packages package-items">
                  {tourPackagePlace &&
                    tourPackagePlace.map((pack) => (
                      <div className="package package2" key={pack.id}>
                        <div className="package-image">
                          <img
                            src={pack.background_image_path}
                            alt={pack.name}
                          />
                        </div>
                        <div className="package-content">
                          <h3>{pack.name}</h3>
                          <ul>
                            <p>O'z ichiga oladi</p>
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
                    ))}
                </div>
              </div> */}
            </>
          )}
        </div>
        <div className="items">
          <ContactUs />
          <AnswerToQuestions />
        </div>
      </div>
    </div>
  );
}

export default TourPackage;
