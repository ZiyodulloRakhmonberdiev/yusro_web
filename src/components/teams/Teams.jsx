import './teams.css';
import Title from '../../ui/Title';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


// import images
import kabah from './images/kabah.png';
import muslim from './images/muslim.png';

function Teams() {
	return (
		<div className='teams'>
			<div className="container">
				<Title img={kabah} title='Jamoa bilan tanishing' description="Malakali jamoa a'zolari sizga o'z xizmatlarini taklif qiladi" />
				<div className='carousel'>
					<Swiper
						slidesPerView='1'
						spaceBetween={30}
						pagination={{
							dynamicBullets: true,
						}}
						breakpoints={{
							400: {
								slidesPerView: '1',
								spaceBetween: 20,
							},
							550: {
								slidesPerView: '2',
								spaceBetween: 20,
							},
							850: {
								slidesPerView: '3',
								spaceBetween: 20,
							},
						}}
						modules={[Pagination]}
						className="mySwiper"
					>
						<SwiperSlide>
							<div className="image">
								<img src={muslim} alt="" />
							</div>
							<div className="about">
								<div className="name">Maxmudov Shoxrux</div>
								<div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, eum.</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="image">
								<img src={muslim} alt="" />
							</div>
							<div className="about">
								<div class="name">Maxmudox Shoxrux</div>
								<div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, eum.</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="image">
								<img src={muslim} alt="" />
							</div>
							<div className="about">
								<div className="name">Maxmudox Shoxrux</div>
								<div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, eum.</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="image">
								<img src={muslim} alt="" />
							</div>
							<div className="about">
								<div className="name">Maxmudox Shoxrux</div>
								<div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, eum.</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default Teams;
