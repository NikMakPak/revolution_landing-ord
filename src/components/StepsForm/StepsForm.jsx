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
    console.log(values);
};

  return (
    <>
      <Formik
        initialValues={{ city: "", district: "", roomType: "", buildingStep: "", square: "" }}
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
