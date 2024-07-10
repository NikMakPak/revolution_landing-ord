import React from "react";

import styles from "./InfoCard.module.scss";

export const InfoCard = ({ children, imgSrc, alt = "product img", tag: Tag = "div", style }) => {
  return (
    <Tag className={styles.card} style={style}>
      <img src={imgSrc} alt={alt} />
      <figcaption>{children}</figcaption>
    </Tag>
  );
};
