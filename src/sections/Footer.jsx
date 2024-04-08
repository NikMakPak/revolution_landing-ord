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
            <h5>Адрес</h5>
            <h2>г. Москва, башня Федерация, офис 104</h2>
          </div>
          <div className={styles.block}>
            <h5>Телефон</h5>
            <a href="tel:+79999999999">+7 (999) 999-99-99</a>
          </div>
          <div className={styles.block}>
            <h5>Email</h5>
            <a href="mailto:contact@smrev.ru">contact@smrev.ru</a>
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
                  <h6>Email</h6>
                  <a href="tel:+79999999999">+7 (999) 999-99-99</a>
                </div>
                <a href="">
                  <img src={Map} alt="map" />
                </a>
              </div>
              <div>
                <div className={styles.block}>
                  <h6>Телефон</h6>
                  <a href="mailto:contact@smrev.ru">contact@smrev.ru</a>
                </div>
                <div className={styles.contacts}>
                  <p>Заявка через телеграмм-бота</p>
                  <a href="https://t.me/smrev_demo_bot">
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
