import React from "react";
import TgIcon from "../assets/tg.svg";
import Map from "../assets/map.png";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <section>
      <div className={styles.info}>
        <div>
          <h4>Центральный офис</h4>
          <div className={styles.block}>
            <p>Адрес</p>
            <h2>г. Москва, башня Федерация, офис 104</h2>
          </div>
          <div className={styles.block}>
            <p>Телефон</p>
            <h3>+7 (999) 999-99-99</h3>
          </div>
          <div className={styles.block}>
            <p>Email</p>
            <h3>contact@smrev.ru</h3>
          </div>
        </div>
        <div>
          <h4>Выездной пункт</h4>
          <div className={styles.exitOfficeWrapper}>
            <p>Демонстрация основного функционала с помощью тестового стенда</p>
            <div className={styles.contacts}>
              <p>Заявка через телеграмм-бота</p>
              <a href="#">
                <img src={TgIcon} alt="Telegram icon" />
                @smrev_demo_bot
              </a>
            </div>
          </div>
          <div className={styles.shop}>
            <h4>Магазин</h4>
            <div className={styles.shopWrapper}>
              <div>
                <div className={styles.block}>
                  <p>Телефон</p>
                  <h2>+7 (999) 999-99-99</h2>
                </div>
                <a href="">
                  <img src={Map} alt="map" />
                </a>
              </div>
              <div>
                <div className={styles.block}>
                  <p>Телефон</p>
                  <h2>+7 (999) 999-99-99</h2>
                </div>
                <div className={styles.contacts}>
                  <p>Заявка через телеграмм-бота</p>
                  <a href="#">
                    <img src={TgIcon} alt="Telegram icon" />
                    @smrev_demo_bot
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>&copy; Smart Revolution, {new Date().getFullYear()}</p>
        <nav>
          <ul>
            <li>
              <a href="#">Официальные документы</a>
            </li>
            <li>
              <a href="#">Политика конфиденциальности</a>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
  );
};
