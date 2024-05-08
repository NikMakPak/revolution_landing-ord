import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import styles from "./StepsForm.module.scss";

const initialValues = {
  city: "",
  district: "",
  roomType: "",
  buildingStep: "",
  square: "",
  name: "",
  phone: "",
  select: "",
  categories: [
    {
      title: "Управление электропитанием помещения",
      chosenOptions: [],
    },
    {
      title: "Обогрев или охлаждение помещений",
      chosenOptions: [],
    },
    {
      title: "Безопасность",
      chosenOptions: [],
    },
    {
      title: "Аудиовидео-системы",
      chosenOptions: [],
    },
    {
      title: "Входная группа объекта",
      chosenOptions: [],
    },
    {
      title: "Управление освещением",
      chosenOptions: [],
    },
    {
      title: "Контроль воздуха и воды",
      chosenOptions: [],
    },
    {
      title: "Центральные интерфейсы управления «Умным домом»",
      chosenOptions: [],
    },
    {
      title: "Интернет, Wi-Fi, телевидение",
      chosenOptions: [],
    },
  ],
};

export const StepsForm = ({ step, increment, subStep, decrement, item }) => {
  
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



