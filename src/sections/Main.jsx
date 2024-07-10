import React, { useRef } from "react";
import Ipad from "../assets/ipadAir.png";
import { Header } from "../components/Header/Header";
import { v4 as uuidv4 } from "uuid";
// product images
import Camera from "../assets/camera.webp";
import Handler from "../assets/handler.png";
import Lamp from "../assets/lamp.png";
import Radar from "../assets/radar.png";
import Steam from "../assets/steam.png";
import Door from "../assets/door.png";

import styles from "./Main.module.scss";
import Bubble from "../components/Bubble/Bubble";

const products = [
  {
    id: uuidv4(),
    brand: "SM Revolution",
    title: "Датчик дыма",
    position: {
      1440: { x: 80, y: 370 },
      768: { x: 20, y: 260 },
      375: { x: 0, y: 135 },
    },
    imgSrc: Door,
  },
  {
    id: uuidv4(),
    brand: "SM Revolution",
    title: "WI-FI Lamp",
    position: {
      1440: { x: 155, y: 205 },
      768: { x: 70, y: 138 },
      375: { x: 28, y: 56 },
    },
    imgSrc: Handler,
  },
  {
    id: uuidv4(),
    brand: "SM Revolution",
    title: "Датчик протечки",
    position: {
      1440: { x: 387, y: 425 },
      768: { x: 230, y: 265 },
      375: { x: 100, y: 133 },
    },
    imgSrc: Steam,
  },
  {
    id: uuidv4(),
    brand: "SM Revolution",
    title: "Датчик протечки",
    position: {
      1440: { x: 590, y: 110 },
      768: { x: 350, y: 80 },
      375: { x: 140, y: 33 },
    },
    imgSrc: Lamp,
  },
  {
    id: uuidv4(),
    brand: "SM Revolution",
    title: "Датчик протечки",
    position: {
      1440: { x: 850, y: 72 },
      768: { x: 536, y: 57 },
      375: { x: 240, y: 22 },
    },
    imgSrc: Camera,
  },
  {
    id: uuidv4(),
    brand: "SM Revolution",
    title: "Датчик протечки",
    position: {
      1440: { x: 870, y: 383 },
      768: { x: 520, y: 260 },
      375: { x: 230, y: 118 },
    },
    imgSrc: Radar,
  },
];

export const Main = () => {
  const imgRef = useRef(null);

  return (
    <main className={styles.main} id="main">
      <Header />
      <div className={styles.title}>
        <p>Smart Revolution &#8212; это</p>
        <h1>Незабываемые перемены для вашего комфорта</h1>
        <button className="btn">Узнать больше</button>
      </div>
      <div className={styles.img} ref={imgRef}>
        {products.map((product) => (
          <Bubble
            key={product.id}
            isAdaptive={true}
            parentRef={imgRef}
            {...product}
          />
        ))}
      </div>
    </main>
  );
};
