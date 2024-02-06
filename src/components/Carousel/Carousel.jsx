import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Carousel.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

function Carousel() {
  return (
    <>
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="customSlide">
          <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1693049690/Guardians_of_the_Galaxy_sdtuzd.jpg" />
        </SwiperSlide>
        <SwiperSlide className="customSlide"> 
          <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1693049167/Joker_vfvilk.jpg" />
        </SwiperSlide>
        <SwiperSlide className="customSlide">
          <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1692949939/Invencible.jpg" />
        </SwiperSlide>
        <SwiperSlide className="customSlide">
          <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1692962030/Batman_njnthf.jpg" />
        </SwiperSlide>
        <SwiperSlide className="customSlide"> 
          <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1692955148/The_Witcher_qqbxel.jpg" />
        </SwiperSlide>
        <SwiperSlide className="customSlide">
          <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1692949895/Venom.jpg" />
        </SwiperSlide>
        <SwiperSlide className="customSlide">
          <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1693049369/HP_MAP_u2s2qc.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
