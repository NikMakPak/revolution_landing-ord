import React from "react";

// slides images
import Slide1 from "../assets/img1-slide.webp";

// product images
import Camera from "../assets/camera.webp";

import { Slide } from "../components/Slide/Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Controls from "../components/SliderNav/Controls";
import { v4 as uuidv4 } from "uuid";

import "swiper/scss";
import "swiper/scss/pagination";
import styles from "./Slider.module.scss";

const slides = [
  {
    slideBgSrc: Slide1,
    infoWinData: {
      header: {
        title: "Оборудование",
        subtitle: "Умное освещение",
      },
      content:
        "Умноже освещение от Smart Revoluition позволяет комбинировать различные типы освещения с целью создания комфортных условий в любое время суток. Управлять освещением возможно как при помощи обычных выключателей, так и дистанционно, при помощи мобильного приложения или голосовых помощников",
      link: "#",
      products: [
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Датчик дыма",
          position: { x: 600, y: 88 },
          imgSrc: Camera,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "WI-FI Lamp",
          position: { x: 890, y: 340 },
          imgSrc: Camera,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Датчик протечки",
          position: { x: 1230, y: 510 },
          imgSrc: Camera,
        },
      ],
    },
  },
  {
    slideBgSrc: Slide1,
    infoWinData: {
      header: {
        title: "Оборудование",
        subtitle: "Умное освещение",
      },
      content:
        "Умноже освещение от Smart Revoluition позволяет комбинировать различные типы освещения с целью создания комфортных условий в любое время суток. Управлять освещением возможно как при помощи обычных выключателей, так и дистанционно, при помощи мобильного приложения или голосовых помощников",
      link: "#",
      products: [
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Камеры видеонаблюдения1",
          position: { x: 600, y: 88 },
          imgSrc: Camera,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Камеры видеонаблюдения2",
          position: { x: 880, y: 350 },
          imgSrc: Camera,
        },
      ],
    },
  },
  {
    slideBgSrc: Slide1,
    infoWinData: {
      header: {
        title: "Оборудование",
        subtitle: "Умное освещение",
      },
      content:
        "Умноже освещение от Smart Revoluition позволяет комбинировать различные типы освещения с целью создания комфортных условий в любое время суток. Управлять освещением возможно как при помощи обычных выключателей, так и дистанционно, при помощи мобильного приложения или голосовых помощников",
      link: "#",
      products: [
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Камеры видеонаблюдения1",
          position: { x: 600, y: 88 },
          imgSrc: Camera,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Камеры видеонаблюдения2",
          position: { x: 880, y: 350 },
          imgSrc: Camera,
        },
      ],
    },
  },
];

export const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper
      className={styles.mySwiper}
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      // pagination={pagination}
      keyboard={{ enabled: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {slides.map(({ slideBgSrc, infoWinData }, i) => (
        <SwiperSlide>
          <Slide key={i} imgSrc={slideBgSrc} data={infoWinData} />
        </SwiperSlide>
      ))}
      <Controls />
    </Swiper>
  );
};
