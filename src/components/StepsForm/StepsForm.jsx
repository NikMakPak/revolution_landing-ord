import React, { useEffect, useState } from "react";
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
  file: null,
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
      title: "Центральные интерфейсы управления",
      chosenOptions: [],
    },
    {
      title: "Интернет, Wi-Fi, телевидение",
      chosenOptions: [],
    },
  ],
};

const validationSchema = Yup.object()
  .shape({
    city: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я\s]+$/,
        'Поле "Город" должно содержать только текст'
      )
      .required('Поле "Город" обязательно для заполнения'),
    district: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я\s]+$/,
        'Поле "Район" должно содержать только текст'
      )
      .required('Поле "Район" обязательно для заполнения'),
    square: Yup.string()
      .matches(/^\d+$/, "Введите корректное значение площади")
      .required("Обязательное поле"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Введите корректный номер")
      .nullable(),
    email: Yup.string().email("Неправильный формат почты @").nullable(),
    file: Yup.mixed()
      .test("fileSize", "Размер файла превышает 5 МБ", (value) => {
        return value ? value.size <= 5242880 : true;
      })
      .nullable()
      .required("Обязательное поле"),
  })
  .test(
    "phoneOrEmail",
    "Нужен или телефон или почта",
    function (value) {
      return value.phone || value.email;
    }
  );

export const StepsForm = ({ step, increment, subStep, decrement, item }) => {
  const handleSubmit = (values, { resetForm }) => {
    alert("Данные успешно отправлены!");
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ dirty, isValid, values }) => (
        <Form className={styles.formBg}>
          {item}
          {step === 3 && (
            <div
              style={{ maxWidth: "905px", margin: "0 auto", marginTop: "24px" }}
            >
              <button
                className="btn btn--modified"
                type="submit"
                disabled={!isValid || !dirty || !(values.phone || values.email)}
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
