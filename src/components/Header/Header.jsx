import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link as ScrollLink, Events } from "react-scroll";
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
  const [activeSection, setActiveSection] = useState("main");

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

    const handleSetActive = (to) => {
      setActiveSection(to);
    };

    Events.scrollEvent.register("end", function (to) {
      handleSetActive(to);
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, [isBurgerOpen]);

  const handleLinkClick = (to) => {
    setIsBurgerOpen(false);
    setActiveSection(to);
  };

  return (
    <header className={styles.header}>
      <nav>
        <a href="#">
          <img src={Logo} alt="logo" className={styles.logo} />
        </a>
        <ul className={styles.ul}>
          <li>
            <ScrollLink
              to="main"
              smooth={true}
              duration={200}
              className={
                activeSection === "main" ? styles.activeLink : styles.link
              }
            >
              Главная
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="opportunities"
              smooth={true}
              duration={200}
              className={
                activeSection === "opportunities"
                  ? styles.activeLink
                  : styles.link
              }
            >
              Возможности
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="scenarios"
              smooth={true}
              duration={200}
              className={
                activeSection === "scenarios" ? styles.activeLink : styles.link
              }
            >
              Сценарии
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="calculator"
              smooth={true}
              duration={200}
              className={
                activeSection === "calculator" ? styles.activeLink : styles.link
              }
            >
              Калькулятор
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contacts"
              smooth={true}
              duration={200}
              className={
                activeSection === "contacts" ? styles.activeLink : styles.link
              }
            >
              Контакты
            </ScrollLink>
          </li>
          <li>
            <a href="/shop" className={styles.link}>
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
                <ScrollLink
                  to="main"
                  smooth={true}
                  duration={500}
                  className={
                    activeSection === "main" ? styles.activeLink : styles.link
                  }
                  onClick={() => handleLinkClick("main")}
                >
                  Главная
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="opportunities"
                  smooth={true}
                  duration={500}
                  className={
                    activeSection === "opportunities"
                      ? styles.activeLink
                      : styles.link
                  }
                  onClick={() => handleLinkClick("opportunities")}
                >
                  Возможности
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="scenarios"
                  smooth={true}
                  duration={500}
                  className={
                    activeSection === "scenarios"
                      ? styles.activeLink
                      : styles.link
                  }
                  onClick={() => handleLinkClick("scenarios")}
                >
                  Сценарии
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="calculator"
                  smooth={true}
                  duration={500}
                  className={
                    activeSection === "calculator"
                      ? styles.activeLink
                      : styles.link
                  }
                  onClick={() => handleLinkClick("calculator")}
                >
                  Калькулятор
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contacts"
                  smooth={true}
                  duration={500}
                  className={
                    activeSection === "contacts"
                      ? styles.activeLink
                      : styles.link
                  }
                  onClick={() => handleLinkClick("contacts")}
                >
                  Контакты
                </ScrollLink>
              </li>
              <li>
                <a
                  href="/shop"
                  className={styles.link}
                  onClick={() => handleLinkClick("shop")}
                >
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
