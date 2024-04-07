import React from "react";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>Центральный офис</h3>
        <div className={styles.part}>
          <p>Адрес</p>
          <h2>г. Москва, башня Федерация, офис 104</h2>
        </div>
        <div className={styles.part}>
          <p>Телефон</p>
          <h2>+7 (999) 999-99-99</h2>
        </div>
        <div className={styles.part}>
          <p>Email</p>
          <h2>contact@smrev.ru</h2>
        </div>
      </div>
      <div>
        <h3>Выездной пункт</h3>
        <div>
          <p>Демонстрация основного функционала с помощью тестового стенда</p>
          <div>
            <p>Заявка через телеграмм-бота</p>
            <a href="#">@smrev_demo_bot</a>
          </div>
        </div>
        <div>
          <h3>Магазин</h3>
          <div className={styles.part}>
            <p>Телефон</p>
            <h2>+7 (999) 999-99-99</h2>
          </div>
          <div className={styles.part}>
            <p>Телефон</p>
            <h2>+7 (999) 999-99-99</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};
