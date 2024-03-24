import React from "react";
import Hub from "../assets/hub.webp";

import styles from "./Opportunities.module.scss";

export const Opportunities = () => {
  return (
    <section>
      <header className={styles.header}>
        <h4>Возможности</h4>
        <h2>Предназначение умного дома</h2>
      </header>
      <div className={styles.wrapper}>
        <ul className={styles.points}>
          <li>
            <h4>Автоматизация большого количества рутинных процессов</h4>
            <p className="inactive">Дополнительный текст</p>
          </li>
          <li>
            <h4>Повышение уровня информационной безопасности</h4>
            <p className="inactive">Дополнительный текст</p>
          </li>
          <li>
            <h4>
              Снижение показателей расхода электроэнергии, тепла, газа
              с повышением уровня комфорта
            </h4>
            <p className="inactive">Дополнительный текст</p>
          </li>
        </ul>
        <img className={styles.img} src={Hub} alt="The hub with all products" />
      </div>
    </section>
  );
};
