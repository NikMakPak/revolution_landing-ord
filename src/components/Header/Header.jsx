import React from "react";
import Logo from '../../assets/logo.svg'
import TgIcon from '../../assets/tg.svg'
import WhIcon from '../../assets/whapp.svg'

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        {/* TODO */}
        <ul className={styles.ul}>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Возможности
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Сценарии
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Калькулятор
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Контакты
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Интернет-магазин
            </a>
          </li>
        </ul>
        <div className={styles.contacts}>
          <button className={"btn"}>Позвонить</button>
          <div className={styles.socials}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={TgIcon} alt="Telegram icon" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={WhIcon} alt="Whatsapp icon" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
