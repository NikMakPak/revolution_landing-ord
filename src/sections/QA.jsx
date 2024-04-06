import React from 'react'
import QAImg from "../assets/question-img.webp";
import { SubmitForm } from "../components/SubmitForm/SubmitForm";

import styles from "./QA.module.scss";

export const QA = () => {
  return (
    <div className={styles.flexContainer}>
      <img src={QAImg} alt="" />
      <SubmitForm className={styles.est}/>
    </div>
  );
}
