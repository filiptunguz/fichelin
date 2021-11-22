import React from 'react';
import { SwiperSlide, Swiper } from "swiper/react/swiper-react";
import {Pagination, Navigation} from "swiper";

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import './HeaderSwiper.scss';

import Slide1BG from '../../../assets/img/slides/slide1bg.jpg';
import Slide2BG from '../../../assets/img/slides/slide2bg.jpg';
import Slide3BG from '../../../assets/img/slides/slide3bg.jpg';

const HeaderSwiper = (props) => {
	return (
		<Swiper
			modules={[Navigation, Pagination]}
			navigation
			pagination
			spaceBetween={0}
			slidesPerView={1}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
		>
			<SwiperSlide>
				<div className="slide1"  style={{ backgroundImage: `url(${Slide1BG})`}}>

				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="slide2" style={{ backgroundImage: `url(${Slide2BG})`}}>

				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="slide3" style={{ backgroundImage: `url(${Slide3BG})`}}>

				</div>
			</SwiperSlide>
		</Swiper>
	);
}

export default HeaderSwiper;
