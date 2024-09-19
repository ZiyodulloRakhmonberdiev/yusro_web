import "./selectedPage.css";

import ExtraPagesHeader from "./extraPagesHeader/ExtraPagesHeader";
import ContactUs from "./contactUs/ContactUs";
import AnswerToQuestions from "./answerToQuestions/AnswerToQuestions";

// import images
import kabah_1 from "../images/kabah_3.jpg";
import umraImage from "../images/nabawi_7.jpg";
import hajImage from "../images/kabah_4.jpg";
import { useNavigate } from "react-router-dom";

function SelectedPage({ packages, tours, info, pageType }) {
  const navigate = useNavigate();
  const tourPackage = packages?.[0] || {};

  const mainImage =
    pageType === "umra" ? umraImage : pageType === "haj" ? hajImage : kabah_1; // Default image if neither Umra nor Haj

  const title =
    pageType === "umra"
      ? "Umra ziyorati"
      : pageType === "haj"
      ? "Haj ziyorati"
      : "Umra-Haj ziyorati";

  const handleOrderClick = (pack) => {
    navigate(`/packages/${pack.id}`); // Navigate to the package detail page
  };

  return (
    <div className="tour-package">
      <ExtraPagesHeader title={tourPackage.name || "Paket tafsilotlari"} />
      <div className="container content">
        <div className="first-container">
          <div className="tour-package-items">
            <div className="main-image">
              <img
                src={tourPackage.image || mainImage}
                alt={tourPackage.name}
              />
            </div>
            <div className="title">
              <h1>{title}</h1>
            </div>
            <div className="description">
              <p>
                O'zbekistonning eng tajribali va ishonchli tur agentligimiz
                oxirgi{" "}
                {info.experience ? info.experience + " yil " : " uzoq yillar "}{" "}
                davomida{" "}
                {info.travelers ? info.travelers?.toLocaleString() + " dan ortiq " : " minglab "}{" "}
                Umra-Haj ziyoratchilariga xizmat qilib kelmoqda. Hamda ushbu
                xizmatlarimiz davomida Saudiya hukumatining ko'plab yutuq va
                mukofotlarini qo'lga kiritganmiz. Biz bilan ziyoratga yo'l olish
                qaroringizni 100% oqlaymiz.
              </p>
            </div>
            <div className="description">
              <p>
                Har bir mo'min Haj va Umra ziyoratini ado etish jarayonida
                muammo va to'siqlarga duch kelishi tabiiy. Aksariyat hollarda
                fuqarolar viza va passportlarini rasmiylashtirish uchun kerakli
                manzilga murojaat qilishmaydi va oqibatda ko'p vaqt
                yo'qotishadi. Biz bilan esa vaqtingizni yo'qotmaysiz!
              </p>
            </div>
            <p className="offers-p">Sizga taklif etamiz:</p>
            <ul className="offers-ul">
              <li>
                <i className="fa-solid fa-check"></i>
                Viza rasmiylashtirish
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                Avia chiptalar
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                Mehmonxonalar
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Taom
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                Sovg'alar (nimcha, sumka, zam-zam suvi)
              </li>
            </ul>
            <div className="packages">
              {tours?.length > 0 ? (
                tours.slice(-2).map((pack) => (
                  <div className="package" key={pack.id}>
                    <div className="package-image">
                      <img src={pack.image || ""} alt={pack.name || ""} />
                    </div>
                    <div className="package-content">
                      <h3>{pack.name}</h3>
                      <ul>
                        <p>O'z ichiga oladi:</p>
                        {pack.includes?.length > 0 ? (
                          pack.includes.map((include) => (
                            <li key={include.id}>
                              <i className="fa-solid fa-check"></i>
                              {include.name}
                            </li>
                          ))
                        ) : (
                          <li>Ma'lumot mavjud emas</li>
                        )}
                      </ul>
                      <span className="price">${pack.price}</span>
                      <button
                        className="order-btn"
                        onClick={() => handleOrderClick(pack)}
                      >
                        Batafsil
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>Ayni vaqtda paketlar mavjud emas</p>
              )}
            </div>
          </div>
        </div>
        <div className="items">
          <ContactUs />
          <AnswerToQuestions />
        </div>
      </div>
    </div>
  );
}

export default SelectedPage;
