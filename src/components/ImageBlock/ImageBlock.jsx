import React from "react";
import { InfoCard } from "../InfoCard/InfoCard";

import styles from "./ImageBlock.module.scss";

export const ImageBlock = ({title,text, bgImgSrc,imgSrc}) => {
  return (
    <div
      className={styles.block}
      style={{ backgroundImage: `url(${bgImgSrc})` }}
    >
      <h3>{title}</h3>
      <InfoCard cl={styles.card} tag="li" imgSrc={imgSrc}>
        <p>{text}</p>
      </InfoCard>
    </div>
  );
};
