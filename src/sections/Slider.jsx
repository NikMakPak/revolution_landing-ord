import React from "react";
import Slide1 from "../assets/img1-slide.webp";
import { Slide } from "../components/Slide/Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Controls from "../components/SliderNav/Controls";

import "swiper/scss";
import "swiper/scss/pagination";
import styles from "./Slider.module.scss";

export const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        className="mySwiper"
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        pagination={pagination}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Slide imgSrc={Slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide imgSrc={Slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide imgSrc={Slide1} />
        </SwiperSlide>
        <Controls />
      </Swiper>
    </>
  );
};
