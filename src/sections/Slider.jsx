import React from 'react'
import Slide1 from '../assets/img1-slide.webp'
import { InfoWin } from '../components/InfoWin/InfoWin';

import styles from "./Slider.module.scss";

export const Slider = () => {
  return (
    <section>
        <img className={styles.img} src={Slide1} alt="" />
        <InfoWin/>
    </section>
  )
}
