import './ourAmenities.css';
import Title from './../../ui/Title';
import Loader from './../../ui/Loader';
import useFetch from './../../hooks/useFetch';
import ComfortItem from './../../service/comfort';
import NotAvailable from '../../helpers/NotAvailable';

// import images
import kabah from "../../icons/kabah_outline.png";
import mosque from "../../icons/mosque_outline.png";

function OurAmenities() {
    const { data, loading, error } = useFetch(ComfortItem.getAgencyComfort);

    return (
        <div className='our-amenities'>
            <div className="container">
                <div className="amenities-title">
                    <div className="cards">
                        <div className="card">
                            <img src={kabah} alt="" />
                            <p>Umra <span>(Ro'yxatdan o'tish)</span><i className="fa-solid fa-arrow-right"></i></p>
                        </div>
                        <div className="card card2">
                            <img src={mosque} alt="" />
                            <p>35% Chegirmali paket</p>
                        </div>
                    </div>
                </div>

                <div style={{ paddingTop: "120px" }}>
                    <Title img={kabah} title="Qulayliklarimiz" description="Haj va Umra ziyoratlarini birlashtirishda yuqori tajribaga ega" />
                </div>

                <div className="amenities-grid">
                    {loading ? <Loader /> : error ? <NotAvailable name={error.message}/> : data && data.length > 0 ? data.map(data => (
                        <div key={data.id} className="amenity-card">
                            <img src={data.image_path} alt='empty' className="amenity-image" />
                            <p>{data.description}</p>  
                        </div>
                    )) : <NotAvailable name="Ma'lumot mavjud emas"/>}
                </div>
            </div>
        </div>
    );
}

export default OurAmenities;
