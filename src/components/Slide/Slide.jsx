import React, { useEffect, useState } from "react";
import { InfoWin } from "../InfoWin/InfoWin";

import styles from "./Slide.module.scss";
import Bubble from "../Bubble/Bubble";
import { BottomSheet } from "../BottomSheet/BottomSheet";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { useSwiper } from "swiper/react";

export const Slide = ({ imgSrc, data }) => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const screenWidth = useScreenWidth();
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      if (isOpen) swiper?.autoplay?.stop();
      // else {debugger; swiper?.autoplay?.resume()};
    }
  }, [isOpen]);

  return (
    <div className={styles.slide}>
      <img className={styles.img} src={imgSrc} alt="slide's background image" />
      {screenWidth <= 1140 ? (
        <BottomSheet
          data={data}
          activeProduct={activeProduct}
          isOpen={isOpen}
          setOpen={setOpen}
        />
      ) : (
        <InfoWin data={data} activeProduct={activeProduct} />
      )}
      {data.products.map((product) => (
        <Bubble
          setActiveProduct={setActiveProduct}
          key={product.id}
          {...product}
          link={data.link}
          setOpenModal={setOpen}
        />
      ))}
    </div>
  );
};
