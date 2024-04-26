import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./StepsForm.module.scss";



export const StepsForm = ({ step, increment, subStep, decrement, item }) => {
  const initialValues = {
    options: [],
  };

  // Опции для выбора
  const options = [
    { id: "1", label: "Опция 1" },
    { id: "2", label: "Опция 2" },
    { id: "3", label: "Опция 3" },
  ];

  const handleSubmit = (values) => {
    console.log("Город:", values.city);
    console.log("Район:", values.district);
    console.log("Выбранная начинка:", values.roomType);
    console.log("Выбранная билд:", values.buildingStep);
};

  return (
    <>
      <Formik
        initialValues={{ city: "", district: "", roomType: "", buildingStep: "" }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.formBg}>
            {item}

            <div className={styles.controls}>
              <button
                type="button"
                className={styles.disBtn}
                onClick={decrement}
              >
                Назад
              </button>
              <button type="button" className="btn" onClick={increment}>
                Далее
              </button>
            </div>

            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
