import React, { useEffect, useRef, useState } from "react";

// slides images
import Slide1 from "../assets/slide1.png";
import Slide2 from "../assets/img1-slide.webp";
import Slide3 from "../assets/slide3.png";
import Slide4 from "../assets/slide4.png";

// product images
import Camera from "../assets/camera.webp";
import Mouse from "../assets/mouse.png";
import Radar from "../assets/radar.png";
import Door from "../assets/door.png";
import Handler from "../assets/handler.png";

import Steam from "../assets/steam.png";
import tempRadar from "../assets/tempRadar.png";
import Dish from "../assets/dish.png";

import Termo from "../assets/termo.png";
import Temp from "../assets/temperature.png";
import Convec from "../assets/convector.png";
import Battery from "../assets/battery.png";

import Lamp from "../assets/lamp.png";
import Control from "../assets/control.png";
import Ardu from "../assets/ardu.png";
import Blinder from "../assets/blinder.png";

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
        "Поддерживает индивидуальные параметры микроклимата в помещении — температура, влажность, Сo2",
        "Дистанционное управление позволяет подготовить избу или хоромы к Вашему приезду",
      ],
      link: "#",
      products: [
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Камеры видеонаблюдения",
          position: { x: 540, y: 70 },
          imgSrc: Camera,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Датчик воды",
          position: { x: 610, y: 315 },
          imgSrc: Mouse,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Датчики движения",
          position: { x: 758, y: 118 },
          imgSrc: Radar,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Датчики размыкания",
          position: { x: 1183, y: 141 },
          imgSrc: Handler,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Дверной замок",
          position: { x: 1056, y: 365 },
          imgSrc: Door,
        },
      ],
    },
  },
  {
    slideBgSrc: Slide2,
    infoWinData: {
      header: {
        title: "Оборудование",
        subtitle: "Умное «Светило»",
      },
      content: [
        "Умноже освещение от Smart Revoluition позволяет комбинировать различные типы освещения с целью создания комфортных условий в любое время суток.",
        "Управлять освещением возможно как при помощи обычных выключателей, так и дистанционно, при помощи мобильного приложения или голосовых помощников",
      ],
      link: "#",
      products: [
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Датчик дыма",
          position: { x: 540, y: 88 },
          imgSrc: Steam,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "WI-FI Lamp",
          position: { x: 830, y: 343 },
          imgSrc: tempRadar,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Датчик воды",
          position: { x: 1124, y: 510 },
          imgSrc: Dish,
        },
      ],
    },
  },
  {
    slideBgSrc: Slide3,
    infoWinData: {
      header: {
        title: "Оборудование",
        subtitle: "Климатный «Шаман»",
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
          title: "Смарт ковер",
          position: { x: 650, y: 560 },
          imgSrc: Battery,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Конвектор с Wi-Fi",
          position: { x: 830, y: 505 },
          imgSrc: Convec,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Датчики температуры и влажности",
          position: { x: 930, y: 225 },
          imgSrc: Temp,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Термостат",
          position: { x: 1170, y: 370 },
          imgSrc: Termo,
        },
      ],
    },
  },
  {
    slideBgSrc: Slide4,
    infoWinData: {
      header: {
        title: "Оборудование",
        subtitle: "Интеллектуальный «Страж»",
      },
      content: ["Обеспечивает защиту и безопасность вашей избы в режиме 24/7"],
      link: "#",
      products: [
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "WI-FI Лампа",
          position: { x: 580, y: 50 },
          imgSrc: Lamp,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Умный выключатель",
          position: { x: 730, y: 370 },
          imgSrc: Control,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Умный переключатель",
          position: { x: 1055, y: 330 },
          imgSrc: Ardu,
        },
        {
          id: uuidv4(),
          brand: "SM Revolution",
          title: "Система управления шторами",
          position: { x: 1153, y: 70 },
          imgSrc: Blinder,
        },
      ],
    },
  },
];

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracts, setIsInteracts] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    if (isInteracts) {
      console.log("stop");
      swiper?.autoplay.stop();
    } else {
      swiper?.autoplay.start();
    }
  }, [isInteracts]);

  return (
    <Swiper
      className={styles.mySwiper}
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      allowTouchMove={screenWidth > 1440}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      onTouchStart={() => {
        setIsInteracts(true);
      }}
      onTouchEnd={() => {
        setIsInteracts(false);
      }}
      onSwiper={setSwiper}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {slides.map(({ slideBgSrc, infoWinData }, i) => (
        <SwiperSlide
          key={i}
          onMouseEnter={() => {
            setIsInteracts(true);
          }}
          onMouseLeave={() => {
            setIsInteracts(false);
          }}
        >
          <Slide
            key={i}
            imgSrc={slideBgSrc}
            data={infoWinData}
            setIsInteracts={setIsInteracts}
          />
        </SwiperSlide>
      ))}
      <Controls />
      {screenWidth <= 1440 && (
        <p className={styles.caption}>
          Нажмите на любой объект, <br /> Передвигайтесь при помощи пальцев
        </p>
      )}
      <InstaProgressBar
        slides={slides}
        activeIndex={activeIndex}
        isInteracts={isInteracts}
      />
    </Swiper>
  );
};
