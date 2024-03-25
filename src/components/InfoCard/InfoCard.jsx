import React from 'react'
import Camera from "../../assets/camera.webp";

import styles from "./InfoCard.module.scss";

export const InfoCard = ({ children, tag: Tag = "div",cl='' }) => {
  return (
    <Tag className={`${styles.card} ${cl}`}>
      <img src={Camera} alt="camera" />
      <figcaption>{children}</figcaption>
    </Tag>
  );
};
