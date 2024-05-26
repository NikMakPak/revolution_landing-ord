import React from 'react'
import { ImageBlock } from '../components/ImageBlock/ImageBlock';

// product images
import Camera from "../assets/camera.webp";
import Handler from "../assets/handler.png";
import Lamp from "../assets/lamp.png";
import Radar from "../assets/radar.png";
import Steam from "../assets/steam.png";
import Door from "../assets/door.png";

import styles from "./Scenarios.module.scss";

export const Scenarios = () => {
  return (
    <section>
      <header className={styles.header}>
        <h4>Сценарии</h4>
        <h2>Сценарии — устремлены в бесконечное</h2>
      </header>
      <div className={styles.grid}>
        <ImageBlock imgSrc={Camera} />
        <ImageBlock imgSrc={Handler} />
        <ImageBlock imgSrc={Lamp} />
        <ImageBlock imgSrc={Radar} />
        <ImageBlock imgSrc={Steam} />
      </div>
    </section>
  );
}
