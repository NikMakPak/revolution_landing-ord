import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./StepsForm.module.scss";

export const StepsForm = ({ step, increment, subStep, decrement, item }) => {
  const initialValues = {
    city: "",
    district: "",
    roomType: "",
    buildingStep: "",
    square: "",
    category1: {
      option1: false,
      option2: false,
      option3: false,
      option4: false,
    },
    name: "",
    phone: "",
    select: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  // todo: сделать валидацию

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className={styles.formBg}>
          {item}
          {step === 3 && (
            <div
              style={{ maxWidth: "905px", margin: "0 auto", marginTop: "24px" }}
            >
              <button
                className="btn btn--modified"
                type="submit"
                disabled={isSubmitting}
              >
                Отправить расчет
              </button>
            </div>
          )}

          <div className={styles.controls}>
            {!(subStep === 1) && (
              <button
                type="button"
                className={styles.disBtn}
                onClick={decrement}
              >
                Назад
              </button>
            )}

            {!(step > 2) && (
              <button type="button" className="btn" onClick={increment}>
                Далее
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};
