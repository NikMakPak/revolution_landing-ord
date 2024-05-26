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
    position: { x: 80, y: 340 },
    imgSrc: Door,
  },
  {
    id: uuidv4(),
    brand: "SM Revolution",
    title: "WI-FI Lamp",
    position: { x: 155, y: 215 },
    imgSrc: Handler,
  },
  {
    id: uuidv4(),
    brand: "SM Revolution",
    title: "Датчик протечки",
    position: { x: 387, y: 425 },
    imgSrc: Steam,
  },
  {
    id: uuidv4(),
    brand: "SM Revolution",
    title: "Датчик протечки",
    position: { x: 590, y: 110 },
    imgSrc: Lamp,
  },
  {
    id: uuidv4(),
    brand: "SM Revolution",
    title: "Датчик протечки",
    position: { x: 850, y: 72 },
    imgSrc: Camera,
  },
  {
    id: uuidv4(),
    brand: "SM Revolution",
    title: "Датчик протечки",
    position: { x: 870, y: 383 },
    imgSrc: Radar,
  },
];

export const Main = () => {
  const imgRef = useRef(null)

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.title}>
        <p>Smart Revolution &#8212; это</p>
        <h1>Незабываемые перемены для вашего комфорта</h1>
        <button className="btn">Узнать больше</button>
      </div>
      <div className={styles.img} ref={imgRef}>
        {products.map((product) => (
          <Bubble key={product.id} parentRef={imgRef} {...product} />
        ))}
      </div>
    </main>
  );
};
