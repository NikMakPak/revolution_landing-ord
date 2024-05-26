import React, { useState } from "react";
import { InfoWin } from "../InfoWin/InfoWin";

import styles from "./Slide.module.scss";
import Bubble from "../Bubble/Bubble";

export const Slide = ({ imgSrc, data }) => {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <div className={styles.slide}>
      <img className={styles.img} src={imgSrc} alt="slide's background image" />
      <InfoWin data={data} activeProduct={activeProduct} />
      {data.products.map((product) => (
        <Bubble
          setActiveProduct={setActiveProduct}
          key={product.id}
          {...product}
          link={data.link}
        />
      ))}
    </div>
  );
};
