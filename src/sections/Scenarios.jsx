import React from 'react'
import { ImageBlock } from '../components/ImageBlock/ImageBlock';

import styles from "./Scenarios.module.scss";

export const Scenarios = () => {
  return (
    <section>
      <header className={styles.header}>
        <h4>Сценарии</h4>
        <h2>Сценарии — устремлены в бесконечное</h2>
      </header>
      <div className={styles.grid}>
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
      </div>
    </section>
  );
}
