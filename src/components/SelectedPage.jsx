import React from 'react';
import ExtraPagesHeader from './extraPagesHeader/ExtraPagesHeader';
import ContactUs from './contactUs/ContactUs';
import AnswerToQuestions from './answerToQuestions/AnswerToQuestions';
import Loader from './../ui/Loader';

function SelectedPage({ packages, error, loading }) {
    const tourPackage = packages && packages[0] || {};

    return (
        <div className='tour-package'>
            <ExtraPagesHeader title={tourPackage.name || "Paket Tafsilotlari"} />
            <div className="container">
                <div className="tour-package-about">
                    {loading ? <Loader/> : error ? <h2>{error.message}</h2> : <>
                    <div className="tour-offer">
                        <div className="main-image">
                            <img src={tourPackage.image_path} alt={tourPackage.name} />
                        </div>
                        <div className="title">
                            <h1>{tourPackage.name}</h1>
                        </div>
                        <div className="description">
                            <p>{tourPackage.description}</p>
                        </div>
                    </div>
                    <div className="tour-package-items">
                        <div className="title">
                            <h1>{tourPackage.name || 'Paketlar'} paketlari</h1>
                        </div>
                        <div className="packages">
                            {tourPackage.tour_packs && tourPackage.tour_packs.map((pack) => (
                                <div className="package" key={pack.id}>
                                    <div className="package-image">
                                        <img src={'https://yusro.pythonanywhere.com' + pack.background_image_path} alt={pack.name} />
                                    </div>
                                    <div className="package-content">
                                        <h3>{pack.name}</h3>
                                        <ul>
                                            {pack.pack_includes && pack.pack_includes.length > 0 ? pack.pack_includes.map((include) => (
                                                <li key={include.id}><i className="fa-solid fa-check"></i>{include.text}</li>
                                            )) : <li>Ma'lumot mavjud emas</li>}
                                        </ul>
                                        <span className="price">${pack.price}</span>
                                        <button className="order-btn" onClick={() => handleOrderClick(pack)}>Batafsil</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </>}
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
