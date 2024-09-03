// import "./selectedPage.css";

// import ExtraPagesHeader from "./extraPagesHeader/ExtraPagesHeader";
// import ContactUs from "./contactUs/ContactUs";
// import AnswerToQuestions from "./answerToQuestions/AnswerToQuestions";
// import Loader from "./../ui/Loader";

// import kabah_1 from "../images/kabah_3.jpg";
// import Info from "../service/info";
// import useFetch from "../hooks/useFetch";

// function SelectedPage({ packages, loading, error, tours }) {
//   const tourPackage = (packages && packages[0]) || {};
//   const { data: info } = useFetch(Info.getInfo);

//   return (
//     <div className="tour-package">
//       <ExtraPagesHeader title={tourPackage.name || "Paket tafsilotlari"} />
//       <div className="container first-container">
//         <div className="tour-package-about">
//           {loading ? (
//             <Loader />
//           ) : error ? (
//             <h2>{error.message}</h2>
//           ) : (
//             <>
//               <div className="tour-offer">
//                 <div className="main-image">
//                   <img
//                     src={tourPackage.image ? tourPackage.image : kabah_1}
//                     alt={tourPackage.name}
//                   />
//                 </div>
//                 <div className="title">
//                   <h1>{tourPackage.name}</h1>
//                 </div>
//                 <div className="description">
//                   <p>
//                     O'zbekistondagi eng tajribali tur agentligi, oxirgi{" "}
//                     {info.experience}+ yil davomida {info.travelers} dan ortiq
//                     Haj va Umra sayohatchilariga yordam bergan va Saudiya
//                     hukumatining ko'plab yutuqlari uchun mukofotlarni qo'lga
//                     kiritgan agentlik bilan birga ekaningizga 100% ishonch hosil
//                     qiling
//                   </p>
//                 </div>
//                 <div className="description">
//                   <p>
//                     Har bir inson Haj yoki Umra ziyoratini ado etish yo'lida
//                     to'siq bo'lib qolishi mumkin bo'lgan ba'zi muammolarga duch
//                     keladi. Aksariyat fuqarolar vizalar va pasportlarni
//                     rasmiylashtirish uchun to'g'ri vaqtda to'g'ri joyga murojaat
//                     qilmaydi va ko'p vaqt yo'qotadi. Siz ham vaqtingizni bekorga
//                     sarflamang!
//                   </p>
//                 </div>
//                 {/* <p className="offers-p">Sizga taklif etamiz:</p> */}
//                 <ul className="offers-ul">
//                   <li>
//                     <i className="fa-solid fa-check"></i>
//                     Viza rasmiylashtirish
//                   </li>
//                   <li>
//                     <i className="fa-solid fa-check"></i>
//                     50 boshi
//                   </li>
//                   <li>
//                     <i className="fa-solid fa-check"></i>
//                     Avia chiptalar
//                   </li>
//                   <li>
//                     <i className="fa-solid fa-check"></i>
//                     Shinam mehmonxona
//                   </li>
//                   <li>
//                     <i className="fa-solid fa-check"></i>3 mahal ovqat
//                   </li>
//                   <li>
//                     <i className="fa-solid fa-check"></i>
//                     Sovg'alar (nimcha, sumka, zam-zam suvi)
//                   </li>
//                 </ul>
//               </div>
//             </>
//           )}
//         </div>
//         <div className="items">
//           <ContactUs />
//           <AnswerToQuestions />
//         </div>
//       </div>
//       <div className="container">
//         <div className="tour-package-items">
//           <div className="title">
//             <h1>{tourPackage.name || "Paketlar"} paketlari</h1>
//           </div>

//           <div className="packages">
//             {tours &&
//               tours.results?.map((pack) => (
//                 <div className="package" key={pack.id}>
//                   <div className="package-image">
//                     <img src={pack.image || ""} alt={pack.name || ""} />
//                   </div>
//                   <div className="package-content">
//                     <h3>{pack.name}</h3>
//                     <ul>
//                       <p>O'z ichiga oladi:</p>
//                       {pack.includes && pack.includes.length > 0 ? (
//                         pack.includes?.map((include) => (
//                           <li key={include.id}>
//                             <i className="fa-solid fa-check"></i>
//                             {include.name}
//                           </li>
//                         ))
//                       ) : (
//                         <li>Ma'lumot mavjud emas</li>
//                       )}
//                     </ul>
//                     <span className="price">${pack.price}</span>
//                     <button
//                       className="order-btn"
//                       onClick={() => handleOrderClick(pack)}
//                     >
//                       Batafsil
//                     </button>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SelectedPage;

// import "./selectedPage.css";
// import ExtraPagesHeader from "./extraPagesHeader/ExtraPagesHeader";
// import ContactUs from "./contactUs/ContactUs";
// import AnswerToQuestions from "./answerToQuestions/AnswerToQuestions";
// import Loader from "./../ui/Loader";
// import kabah_1 from "../images/kabah_3.jpg";

// function SelectedPage({ packages, loading, error, tours }) {
//     const tourPackage = packages?.[0] || {};

//     return (
//         <div className="tour-package">
//             <ExtraPagesHeader title={tourPackage.name || "Paket tafsilotlari"} />
//             <div className="container first-container">
//                 <div className="tour-package-about">
//                     {loading ? (
//                         <Loader />
//                     ) : error ? (
//                         <h2>{error.message}</h2>
//                     ) : (
//                         <>
//                             <div className="tour-offer">
//                                 <div className="main-image">
//                                     <img
//                                         src={tourPackage.image || kabah_1}
//                                         alt={tourPackage.name}
//                                     />
//                                 </div>
//                                 <div className="title">
//                                     <h1>{tourPackage.name}</h1>
//                                 </div>
//                                 <div className="description">
//                                     <p> {/* Static content or dynamic content based on package data */}</p>
//                                 </div>
//                             </div>
//                         </>
//                     )}
//                 </div>
//                 <div className="items">
//                     <ContactUs />
//                     <AnswerToQuestions />
//                 </div>
//             </div>
//             <div className="container">
//                 <div className="tour-package-items">
//                     <div className="title">
//                         <h1>{tourPackage.name || "Paketlar"} paketlari</h1>
//                     </div>
//                     <div className="packages">
//                         {tours?.length > 0 ? (
//                             tours.map((pack) => (
//                                 <div className="package" key={pack.id}>
//                                     <div className="package-image">
//                                         <img src={pack.image || ""} alt={pack.name || ""} />
//                                     </div>
//                                     <div className="package-content">
//                                         <h3>{pack.name}</h3>
//                                         <ul>
//                                             <p>O'z ichiga oladi:</p>
//                                             {pack.includes?.length > 0 ? (
//                                                 pack.includes.map((include) => (
//                                                     <li key={include.id}>
//                                                         <i className="fa-solid fa-check"></i>
//                                                         {include.name}
//                                                     </li>
//                                                 ))
//                                             ) : (
//                                                 <li>Ma'lumot mavjud emas</li>
//                                             )}
//                                         </ul>
//                                         <span className="price">${pack.price}</span>
//                                         <button className="order-btn" onClick={() => handleOrderClick(pack)}>
//                                             Batafsil
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>Ayni vaqtda paketlar mavjud emas</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SelectedPage;

import "./selectedPage.css";
import ExtraPagesHeader from "./extraPagesHeader/ExtraPagesHeader";
import ContactUs from "./contactUs/ContactUs";
import AnswerToQuestions from "./answerToQuestions/AnswerToQuestions";
import Loader from "./../ui/Loader";
import kabah_1 from "../images/kabah_3.jpg";

function SelectedPage({ packages, loading, error, tours, info }) {
  const tourPackage = packages?.[0] || {};

  return (
    <div className="tour-package">
      <ExtraPagesHeader title={tourPackage.name || "Paket tafsilotlari"} />
      <div className="container content">
        <div className="first-container">
          <div className="tour-package-items">
            <div className="main-image">
              <img src={tourPackage.image || kabah_1} alt={tourPackage.name} />
            </div>
            <div className="title">
              <h1>Haj va Umra haqida</h1>
            </div>
            <div className="description">
              <p>
                O'zbekistondagi eng tajribali tur agentligi, oxirgi{" "}
                {info.experience ? info.experience + " yil" : "uzoq yillar"} davomida {info.travelers ? info.travelers + " dan ortiq" : "yuzlab"} Haj
                va Umra sayohatchilariga yordam bergan va Saudiya hukumatining
                ko'plab yutuqlari uchun mukofotlarni qo'lga kiritgan agentlik
                bilan birga ekaningizga 100% ishonch hosil qiling
              </p>
            </div>
            <div className="description">
              <p>
                Har bir inson Haj yoki Umra ziyoratini ado etish yo'lida to'siq
                bo'lib qolishi mumkin bo'lgan ba'zi muammolarga duch keladi.
                Aksariyat fuqarolar vizalar va pasportlarni rasmiylashtirish
                uchun to'g'ri vaqtda to'g'ri joyga murojaat qilmaydi va ko'p
                vaqt yo'qotadi. Siz ham vaqtingizni bekorga sarflamang!
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
                tours.map((pack) => (
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
