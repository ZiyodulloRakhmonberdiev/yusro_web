import "./category.css";
// api
// import ServiceItem from "../../service/serviceItem";
// hooks
// import useFetch from "../../hooks/useFetch";
// import Title from "./../../ui/Title";
// import Loader from "./../../ui/Loader";
// import NotAvailable from "../../helpers/NotAvailable";

import nabawi_4 from "../../images/nabawi_4.jpg";
import kabah_5 from "../../images/kabah_5.jpg";
import tourism from "../../images/tourism.png";

import sec_fill_kabah from "../../icons/sec_kabah_fill_for_category.png";
import sec_fill_mosque from "../../icons/sec_mosque_fill_for_category.png";
import sec_fill_nabawi from "../../icons/sec_nabawi_fill_for_category.png";

function Category() {
  return (
    <div className="category">
      <div className="container">
        {/* <Title img={images.kabah} title="Bizning takliflar" description="Biz sizga ishonchli bo'lgan xizmatlarni taklif qilamiz" /> */}
        <div className="cards">
                    {/* Haj takliflari */}
                    <div className="card">
            <div className="header-image">
              <img src={kabah_5} alt="" />
            </div>
            <img
              src={sec_fill_kabah}
              alt=""
              className="header-image-icon"
            />
            <div className="title">Haj takliflari</div>
            <div className="description">
              "Yusro" jamoasi barcha musulmonlar uchun muqaddas sayohatning ahamiyatini tushunadi va biz ular uchun barcha qulayliklarni yaratib berishga bor kuchimiz bilan harakat qilamiz.  
            </div>
          </div>
          {/* Umra */}
          <div className="card">
            <div className="header-image">
              <img src={nabawi_4} alt="" />
            </div>
            <img
              src={sec_fill_nabawi}
              alt=""
              className="header-image-icon"
            />
            <div className="title">Umra takliflari</div>
            <div className="description">
              "Yusro Tour" turizm agentligi oltin 5 yulduzli umra paketini taqdim etadi. Ayni damda kumush 4 yulduzli paketlarni ham taqdim etamiz.  
            </div>
          </div>

          {/* Tourism category */}
          <div className="card">
            <div className="header-image">
              <img src={tourism} alt="" />
            </div>
            <img
              src={sec_fill_mosque}
              alt=""
              className="header-image-icon"
            />
            <div className="title">Sayohat takliflari</div>
            <div className="description">
              Biz sizga vizalarni rasmiylashtirish, aviachiptalar va arzon mehmonxonalarni bron qilish bo'yicha to'liq yordam beramiz.</div>
          </div>
        </div>
        {/* <div className="cards">
                    {
                        loading ? <Loader /> : error ? <NotAvailable name={error.message}/> : <>
                            {data && data.length > 0 ? data.map((category, index) => {
                                return (
                                    <div key={category.id} className="card">
                                        <div className="header-image">
                                            <img src={category.background_path} alt="" />
                                        </div>
                                        <img src={category.logo_path} alt="" className='header-image-icon' />
                                        <div className="title">{category.name}</div>
                                        <div className="description">
                                            {category.description}
                                        </div>
                                    </div>
                                )
                            }) : <NotAvailable name="Ma'lumot mavjud emas"/>}
                        </>
                    }
                </div> */}
      </div>
    </div>
  );
}

export default Category;
