import React from "react";
import { ImageBlock } from "../components/ImageBlock/ImageBlock";

// product images
import Camera from "../assets/camera.webp";
import Handler from "../assets/handler.png";
import Lamp from "../assets/lamp.png";
import Radar from "../assets/radar.png";
import Steam from "../assets/steam.png";

// bg images
import King from "../assets/king-bg.webp";
import Forest from "../assets/forest.png";
import Bed from "../assets/bed.png";
import Izba from "../assets/izba.png";
import Fire from "../assets/fire.png";

import styles from "./Scenarios.module.scss";

const data = [
  {
    bgImgSrc: King,
    imgSrc: Camera,
    title: "Царь во дворе",
    text: "Краткий текст сценария с использованием умных гаджетов",
  },
  {
    bgImgSrc: Forest,
    imgSrc: Handler,
    title: "Я в походе",
    text: "Текст сценария",
  },
  {
    bgImgSrc: Bed,
    imgSrc: Lamp,
    title: "Бодрое утро",
    text: "Текст сценария",
  },
  {
    bgImgSrc: Fire,
    imgSrc: Steam,
    title: "Хлеба и зрелищ",
    text: "Текст сценария",
  },
  {
    bgImgSrc: Izba,
    imgSrc: Radar,
    title: "Парной день",
    text: "Текст сценария",
  },
];
export const Scenarios = () => {
  return (
    <section>
      <header className={styles.header}>
        <h4>Сценарии</h4>
        <h2>Сценарии — устремлены в бесконечное</h2>
      </header>
      <div className={styles.grid}>
        {data.map((item, i) => (
          <ImageBlock key={i} {...item} />
        ))}
      </div>
    </section>
  );
};
