import React from "react";
import Camera from "../../assets/camera.webp";

import styles from "./InfoWin.module.scss";

export const InfoWin = () => {
  return (
    <aside className={styles.win}>
      <header>
        <p>Оборудование</p>
        <h3>Умное освещение</h3>
      </header>
      <p className={styles.content}>
        Умноже освещение от Smart Revoluition позволяет комбинировать различные
        типы освещения с целью создания комфортных условий в любое время суток.
        Управлять освещением возможно как при помощи обычных выключателей, так
        и дистанционно, при помощи мобильного приложения или голосовых
        помощников
      </p>
        <ul className={styles.scrollZone}>
          <li>
            <img src={Camera} alt="" />
            <figcaption>
              <p>SM Revolution</p>
              <h5>Камеры видеонаблюдения</h5>
            </figcaption>
          </li>
        </ul>
      <a href="#" className="btn" target="_blank" rel="noopener noreferrer">
        Узнать подробнее
      </a>
    </aside>
  );
};
