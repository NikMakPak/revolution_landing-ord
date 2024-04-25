import React, { useState } from "react";
import { StepsForm } from "../components/StepsForm/StepsForm";
import Steps from "../assets/steps.png";

import styles from "./Calculator.module.scss";

export const Calculator = () => {
  const getStepTitle = (step, subStep) => {
    if (step === 1) {
      switch (subStep) {
        case 1:
          return "Информация о проекте";
        case 2:
          return "Этап строительства";
        case 3:
          return "Площадь объекта";
        default:
          return "Информация о проекте";
      }
    } else {
      switch (step) {
        case 2:
          return "Область автоматизации";
        case 3:
          return "Заказать расчет";
        default:
          return "Информация о проекте";
      }
    }
  };

  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1);

  const increment = () => {
    if (step === 1) {
      if (subStep < 3) {
        setSubStep(subStep + 1);
      } else {
        setStep(step + 1);
      }
    } else if (step < 3) {
      setStep(step + 1);
    }
  };

  const decrement = () => {
    if (step === 1 && subStep > 1) {
      setSubStep(subStep - 1);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <section >
      <header className={styles.header}>
        <h4>Калькулятор</h4>
        <h2>{getStepTitle(step, subStep)}</h2>
      </header>

      {/* <div>этап 1</div> */}
      <img style={{margin: '0 auto', marginBottom: '72px'}} src={Steps} alt="steps" />

      <StepsForm
        step={step}
        increment={increment}
        subStep={subStep}
        decrement={decrement}
      />
    </section>
  );
};
