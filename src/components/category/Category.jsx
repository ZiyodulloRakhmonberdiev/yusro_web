import "./category.css";
import nabawi_6 from "../../images/nabawi_6.jpg";
import kabah_4 from "../../images/kabah_4.jpg";
import tourism from "../../images/tourism.png";

import sec_fill_kabah from "../../icons/sec_kabah_fill_for_category.png";
import sec_fill_mosque from "../../icons/sec_mosque_fill_for_category.png";
import sec_fill_nabawi from "../../icons/sec_nabawi_fill_for_category.png";

function Category() {
  return (
    <div className="category">
      <div className="container">
        <div className="cards">
          {/* Haj takliflari */}
          <div className="card">
            <div className="header-image">
              <img src={kabah_4} alt="" />
            </div>
            <img src={sec_fill_kabah} alt="" className="header-image-icon" />
            <div className="title">Umra-Haj takliflari</div>
            <div className="description">
              «Yusro Tour» agentligi jamoasi sayohat va ziyoratning musulmon
              ahli uchun yuksak ahamiyatini tushungan holda ularga safarlar
              davomida barcha qulaylik va shart-sharoitlarni taqdim etishda bor
              kuch va imkoniyatlarini ishga solishga doim sha'ylar.
            </div>
          </div>
          {/* Umra */}
          <div className="card">
            <div className="header-image">
              <img src={nabawi_6} alt="" />
            </div>
            <img src={sec_fill_nabawi} alt="" className="header-image-icon" />
            <div className="title">Umra takliflari</div>
            <div className="description">
              «Yusro Tour» turizm agentligi qadrli ziyoratchilar uchun «oltin 5
              yulduzli» Umra paketini taqdim etadi. Shu bilan birga, «kumush 4
              yulduzli» paketimiz ham sizlar uchun manzur kelishi aniq.
            </div>
          </div>

          {/* Tourism category */}
          <div className="card">
            <div className="header-image">
              <img src={tourism} alt="" />
            </div>
            <img src={sec_fill_mosque} alt="" className="header-image-icon" />
            <div className="title">Sayohat takliflari</div>
            <div className="description third">
              Biz sizga: <br /> – vizalarni rasmiylashtirish <br /> – aviachiptalar <br /> – arzon va
              shinam mehmonxonalarni band qilish bo'yicha barcha yuqori servis
              xizmatlarimizni taklif qilamiz.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
