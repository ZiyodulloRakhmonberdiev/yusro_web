import './ourAmenities.css';
import images from './../../images/index';
import Title from './../../ui/Title';
import Loader from './../../ui/Loader';
import useFetch from './../../hooks/useFetch';
import ComfortItem from './../../service/comfort';
import NotAvailable from '../../helpers/NotAvailable';

function OurAmenities() {
    const { data, loading, error } = useFetch(ComfortItem.getAgencyComfort);

    return (
        <div className='our-amenities'>
            <div className="container">
                <div className="amenities-title">
                    <div className="cards">
                        <div className="card">
                            <img src={images.kabah} alt="" />
                            <p>Umra <span>(Ro'yxatdan O'tish)</span></p>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className="card card2">
                            <img src={images.mosque2} alt="" />
                            <p>35% Chegirmali Paket</p>
                        </div>
                    </div>
                </div>

                <div style={{ paddingTop: "80px" }}>
                    <Title img={images.kabah} title="Qulayliklarimiz" description="Haj va Umra ziyoratlarini birlashtirishda yuqori tajribaga ega" />
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
