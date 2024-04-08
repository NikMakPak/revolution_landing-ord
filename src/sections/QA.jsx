import React from "react";
import QAImg from "../assets/question-img.webp";
import { SubmitForm } from "../components/SubmitForm/SubmitForm";

import styles from "./QA.module.scss";

export const QA = () => {
  return (
    <div>
      <header className={styles.qaHeader}>
        <h3>Погрузитесь в сферу автоматизации с нашей помощью уже сейчас</h3>
        <p>
          Ваше будущее создается тем, что вы делаете сегодня, а не тем, что
          будете делать завтра
        </p>
      </header>
      <div className={styles.flexContainer}>
        <img src={QAImg} alt="" />
        <SubmitForm className={styles.est} />
      </div>
    </div>
  );
};
