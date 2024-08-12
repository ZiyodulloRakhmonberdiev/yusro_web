import './opinion.css';
// hook
import React, { useState, useEffect } from 'react';
// swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import images from './../../images/index';
// ui
import Title from './../../ui/Title';
import Loader from './../../ui/Loader';
// custom hooks
import useFetch from './../../hooks/useFetch';
import UserOpinion from './../../service/opinion';
import NotAvailable from './../../helpers/NotAvailable';

function Opinion() {
    const { data, loading, error } = useFetch(UserOpinion.getAgencyComfort);
    const renderStars = (point) => {
        const stars = [];
        for (let i = 0; i < point; i++) {
            stars.push('⭐');
        }
        return stars.join(' ');
    };

    return (
        <div className='opinion-section'>
            <div className="container">
                <div className="title-wrapper">
                    <Title img={images.kabah} title="Fikrlar" description="Har yili yuzlab mijozlar biz orqali safarga chiqishmoqda." />
                </div>
                <div className="opinion-carousel">
                    {loading ? (
                        <Loader />
                    ) : error ? (
                        <NotAvailable name={error.message} />
                    ) : (
                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            {data.length > 0 ?data.map((opinion, index) => (
                                <SwiperSlide key={index}>
                                    <div className="opinion-slide">
                                        <div className="opinion-image">
                                            <img src={opinion.image_path ? opinion.image_path : images.muslim} alt={opinion.full_name} />
                                        </div>
                                        <div className="opinion-about">
                                            <span className='point'>{renderStars(opinion.rate)}</span>
                                            <p className='theme'>{opinion.conclusion}</p>
                                            <p className='description'>{opinion.text}</p>
                                            <h3 className='name'>{opinion.full_name}</h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )) : <NotAvailable name="Ma'lumot mavjud emas"/>}
                        </Swiper>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Opinion;
