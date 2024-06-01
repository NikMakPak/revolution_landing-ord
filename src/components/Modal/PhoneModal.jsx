import React from "react";
import Modal from "react-modal";
import TgIcon from "../../assets/tg.svg";
import WhIcon from "../../assets/whapp.svg";
import  Cross  from "../../assets/Cross.svg";

import styles from "./PhoneModal.module.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(50px)",
    border: "1px solid #46464b",
    borderRadius: "16px",
    width: "551px",
    padding: "24px",
    //  opacity: 0, 
    transition: 'opacity .2s ease-in-out', 
  },
  overlay: {
    backgroundColor: "rgba(0,0,0, 0.6)",
    //  opacity: 0, 
    transition: 'opacity .2s ease-in-out',
  },
};

export const PhoneModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
      // className={styles.modal}
    >
      <div className={styles.container}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src={Cross} alt="Cross" />
        </button>
        <h4 className={styles.title}>Позвонить нам</h4>
        <h5>Центральный офис</h5>
        <div className={styles.linkContainer} style={{ marginBottom: "24px" }}>
          <a
            href="tel:+79999999999"
            className={`${styles.link} ${styles.phoneLink}`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3282 21.5001C16.4132 21.5001 15.1278 21.1691 13.2032 20.0938C10.8627 18.7813 9.05238 17.5696 6.72457 15.2479C4.48019 13.0049 3.388 11.5527 1.85941 8.77115C0.132536 5.63052 0.42691 3.98427 0.755973 3.28068C1.14785 2.43974 1.72629 1.93677 2.47394 1.43755C2.89861 1.15932 3.34801 0.920812 3.81644 0.725053C3.86332 0.704897 3.90691 0.685678 3.94582 0.668335C4.17785 0.563803 4.52941 0.405835 4.97472 0.574585C5.27191 0.686147 5.53722 0.914428 5.95254 1.32458C6.80425 2.16458 7.96816 4.03537 8.39754 4.95412C8.68582 5.57333 8.8766 5.98208 8.87707 6.44052C8.87707 6.97724 8.60707 7.39115 8.27941 7.83787C8.218 7.92177 8.15707 8.00193 8.098 8.07974C7.74129 8.54849 7.663 8.68396 7.71457 8.92583C7.8191 9.41193 8.59863 10.859 9.87972 12.1372C11.1608 13.4155 12.5661 14.1458 13.0541 14.2499C13.3063 14.3038 13.4446 14.2222 13.9283 13.8529C13.9977 13.7999 14.0689 13.7451 14.1435 13.6902C14.6432 13.3185 15.0378 13.0555 15.5619 13.0555H15.5647C16.0208 13.0555 16.4113 13.2533 17.0582 13.5796C17.9019 14.0052 19.8289 15.1541 20.6741 16.0068C21.0852 16.4211 21.3144 16.6855 21.4264 16.9822C21.5952 17.429 21.4363 17.7791 21.3327 18.0135C21.3153 18.0524 21.2961 18.0951 21.276 18.1424C21.0787 18.61 20.8387 19.0585 20.5593 19.4821C20.061 20.2274 19.5561 20.8044 18.7133 21.1968C18.2805 21.4015 17.8069 21.5052 17.3282 21.5001Z"
                fill="#87F3A5"
              />
            </svg>

            <p>+7 (999) 999-99-99</p>
          </a>
          <div className={styles.link}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={TgIcon} alt="Telegram icon" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={WhIcon} alt="Whatsapp icon" />
            </a>
          </div>
        </div>

        <h5>Интернет-магазин</h5>
        <div className={styles.linkContainer}>
          <a
            href="tel:+79999999999"
            className={`${styles.link} ${styles.phoneLink}`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3282 21.5001C16.4132 21.5001 15.1278 21.1691 13.2032 20.0938C10.8627 18.7813 9.05238 17.5696 6.72457 15.2479C4.48019 13.0049 3.388 11.5527 1.85941 8.77115C0.132536 5.63052 0.42691 3.98427 0.755973 3.28068C1.14785 2.43974 1.72629 1.93677 2.47394 1.43755C2.89861 1.15932 3.34801 0.920812 3.81644 0.725053C3.86332 0.704897 3.90691 0.685678 3.94582 0.668335C4.17785 0.563803 4.52941 0.405835 4.97472 0.574585C5.27191 0.686147 5.53722 0.914428 5.95254 1.32458C6.80425 2.16458 7.96816 4.03537 8.39754 4.95412C8.68582 5.57333 8.8766 5.98208 8.87707 6.44052C8.87707 6.97724 8.60707 7.39115 8.27941 7.83787C8.218 7.92177 8.15707 8.00193 8.098 8.07974C7.74129 8.54849 7.663 8.68396 7.71457 8.92583C7.8191 9.41193 8.59863 10.859 9.87972 12.1372C11.1608 13.4155 12.5661 14.1458 13.0541 14.2499C13.3063 14.3038 13.4446 14.2222 13.9283 13.8529C13.9977 13.7999 14.0689 13.7451 14.1435 13.6902C14.6432 13.3185 15.0378 13.0555 15.5619 13.0555H15.5647C16.0208 13.0555 16.4113 13.2533 17.0582 13.5796C17.9019 14.0052 19.8289 15.1541 20.6741 16.0068C21.0852 16.4211 21.3144 16.6855 21.4264 16.9822C21.5952 17.429 21.4363 17.7791 21.3327 18.0135C21.3153 18.0524 21.2961 18.0951 21.276 18.1424C21.0787 18.61 20.8387 19.0585 20.5593 19.4821C20.061 20.2274 19.5561 20.8044 18.7133 21.1968C18.2805 21.4015 17.8069 21.5052 17.3282 21.5001Z"
                fill="#87F3A5"
              />
            </svg>

            <p>+7 (999) 999-99-99</p>
          </a>
          <div className={styles.link}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={TgIcon} alt="Telegram icon" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={WhIcon} alt="Whatsapp icon" />
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};
