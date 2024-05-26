import React from "react";
import { InfoCard } from "../InfoCard/InfoCard";

import styles from "./ImageBlock.module.scss";

export const ImageBlock = ({imgSrc}) => {
  return (
    <div className={styles.block}>
      <h3>Тайтл</h3>
      <InfoCard cl={styles.card} tag="li" imgSrc={imgSrc}>
        <p>Текст сценарий</p>
      </InfoCard>
    </div>
  );
};
