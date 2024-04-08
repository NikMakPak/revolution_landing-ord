import React from "react";
import QAImg from "../assets/question-img.webp";
import { SubmitForm } from "../components/SubmitForm/SubmitForm";

import styles from "./QA.module.scss";

export const QA = () => {
  return (
    <div>
      <header className={styles.qaHeader}>
        <div>
          <h3>Погрузитесь в сферу автоматизации с нашей помощью уже сейчас</h3>
        </div>
        <div>
          <p>
            Ваше будущее создается тем, что вы делаете сегодня, а не тем, что
            будете делать завтра
          </p>
        </div>
      </header>
      <div className={styles.flexContainer}>
        <img src={QAImg} alt="" />
        <SubmitForm className={styles.est} />
      </div>
    </div>
  );
};
