import React from "react";
import Slide1 from "../assets/img1-slide.webp";
import { Slide } from "../components/Slide/Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

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
      {/* <button onClick={() => swiper.slideNext()}>
        Slide to the next slide
      </button> */}
      <Swiper
        pagination={pagination}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
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
      </Swiper>
    </>
  );
};
