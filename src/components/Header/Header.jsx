import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../assets/logo.svg";
import TgIcon from "../../assets/tg.svg";
import WhIcon from "../../assets/whapp.svg";
import Cross  from "../../assets/Cross.svg";
import Burger from "../../assets/Burger.svg";

import styles from "./Header.module.scss";
import { PhoneModal } from "../Modal/PhoneModal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleToggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isBurgerOpen);
  }, [isBurgerOpen]);

  return (
    <header className={styles.header}>
      <nav>
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
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
          <button className={"btn"} onClick={handleOpenModal}>
            Позвонить
          </button>
          <div className={styles.socials}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={TgIcon} alt="Telegram icon" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={WhIcon} alt="Whatsapp icon" />
            </a>
          </div>
          <button className={styles.burger} onClick={handleToggleBurger}>
            {isBurgerOpen ? (
              <img src={Cross} alt="Cross" />
            ) : (
              <img src={Burger} alt="Burger" />
            )}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isBurgerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className={styles.burgerMenu}
          >
            <ul>
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
          </motion.div>
        )}
      </AnimatePresence>

      <PhoneModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
};
