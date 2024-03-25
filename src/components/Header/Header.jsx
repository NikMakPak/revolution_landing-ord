import React from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <img src="" alt="logo" />
        {/* TODO */}
        <ul className={styles.ul}>
          <li>
            <a href="#" className={styles.link}>
              Главная
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Главная
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Главная
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Главная
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Главная
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Главная
            </a>
          </li>
        </ul>
        <div className={styles.contacts}>
          <button className={"btn"}>Позвонить</button>
          <div className={styles.socials}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              tg
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              wa
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
