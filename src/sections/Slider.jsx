import React, { useEffect, useRef, useState } from "react";

// slides images
import Slide1 from "../assets/slide1.png";
import Slide2 from "../assets/img1-slide.webp";
import Slide3 from "../assets/slide3.png";
import Slide4 from "../assets/slide4.png";

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
import { InstaProgressBar } from "../components/InstaProgressBar/InstaProgressBar";
import { useScreenWidth } from "../hooks/useScreenWidth";

const slides = [
  {
    slideBgSrc: Slide1,
    infoWinData: {
      header: {
        title: "Оборудование",
        subtitle: "Шустрый «Звонарь»",
      },
      content: [
        "Поддерживает индивидуальные параметры микроклимата в помещении — температура, влажность, СО2",
        "Дистанционное управление позволяет подготовить избу или хоромы к Вашему приезду",
      ],
      link: "#",
      products: [
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Камеры видеонаблюдения",
          position: { x: 600, y: 88 },
          imgSrc: Camera,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Датчик размыкания",
          position: { x: 890, y: 340 },
          imgSrc: Camera,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Датчики движения",
          position: { x: 1230, y: 510 },
          imgSrc: Camera,
        },
      ],
    },
  },
  {
    slideBgSrc: Slide2,
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
    slideBgSrc: Slide3,
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
    slideBgSrc: Slide4,
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
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = useScreenWidth();

  return (
    <Swiper
      className={styles.mySwiper}
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      keyboard={{ enabled: true }}
      allowTouchMove={screenWidth > 1440}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {slides.map(({ slideBgSrc, infoWinData }, i) => (
        <SwiperSlide key={i}>
          <Slide key={i} imgSrc={slideBgSrc} data={infoWinData} />
        </SwiperSlide>
      ))}
      <Controls />
      {screenWidth <= 1440 && (
        <p className={styles.caption}>
          Нажмите на любой объект, <br /> Передвигайтесь при помощи пальцев
        </p>
      )}
      <InstaProgressBar slides={slides} activeIndex={activeIndex} />
    </Swiper>
  );
};
