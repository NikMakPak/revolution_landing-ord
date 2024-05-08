import React from 'react'
import Ipad from '../assets/ipad.webp'
import { Header } from '../components/Header/Header';

import styles from './Main.module.scss'

export const Main = () => {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.title}>
        <p>Smart Revolution &#8212; это</p>
        <h1>Незабываемые перемены для вашего комфорта</h1>
        <button className="btn">Узнать больше</button>
      </div>
      <img className={styles.img} src={Ipad} alt="ipad img" />
    </main>
  );
}
