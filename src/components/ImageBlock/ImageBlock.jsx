import React from 'react'
import { InfoCard } from '../InfoCard/InfoCard';

import styles from "./ImageBlock.module.scss";

export const ImageBlock = () => {
  return (
    <div className={styles.block}>
      <h3>Тайтл</h3>
      <InfoCard cl={styles.card} tag="li">
        <p>SM Revolution</p>
      </InfoCard>
    </div>
  );
}
