import { React } from "react";
import { useSwiper } from "swiper/react";

import styles from "./Controls.module.scss";

export default function Controls({cl}) {
  const swiper = useSwiper();

  return (
    <div className={cl + " " + styles.controls}>
      <button onClick={() => swiper.slidePrev()}>
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.8125 1.375L1.1875 7L6.8125 12.625"
            stroke="white"
            stroke-width="1.875"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button onClick={() => swiper.slideNext()}>
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.1875 1.375L6.8125 7L1.1875 12.625"
            stroke="white"
            stroke-width="1.875"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
