import React from 'react'
import { InfoWin } from '../InfoWin/InfoWin';

import styles from "./Slide.module.scss";

export const Slide = ({imgSrc}) => {
  return (
    <div className={styles.slide}>
      <img className={styles.img} src={imgSrc} alt="slide's background image" />
      <InfoWin />
    </div>
  );
}
