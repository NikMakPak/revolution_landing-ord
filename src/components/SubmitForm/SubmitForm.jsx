import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./SubmitForm.module.scss";

// Валидационная схема с помощью Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Обязательное поле"),
  phone: Yup.string().required("Обязательное поле"),
  select: Yup.string().required("Обязательное поле"),
  checkbox: Yup.boolean().oneOf(
    [true],
    "Необходимо согласиться с обработкой данных"
  ),
});

export const SubmitForm = () => {
  return (
    <div>
      <h3>Остались вопросы?</h3>
      <p>Незабываемые перемены для вашего комфорта</p>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          select: "",
          checkbox: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="name">Имя</label>
              <Field
                type="text"
                name="name"
                placeholder="Ваше имя"
                className={errors.name && touched.name ? styles.error : ""}
              />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="phone">Телефон</label>
              <Field
                type="text"
                name="phone"
                placeholder="Номер телефона"
                className={errors.phone && touched.phone ? styles.error : ""}
              />
              <ErrorMessage name="phone" component="div" />
            </div>
            <div>
              <label htmlFor="select">Выберите</label>
              <Field
                as="select"
                name="select"
                placeholder="Предпочитаемый способ связи"
                className={errors.select && touched.select ? styles.error : ""}
              >
                <option value="">Выберите...</option>
                <option value="option1">Пункт 1</option>
                <option value="option2">Пункт 2</option>
              </Field>
              <ErrorMessage name="select" component="div" />
            </div>
            <div>
              <Field type="checkbox" name="checkbox" />
              <label htmlFor="checkbox">
                Я согласен на{" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  обработку персональных данных
                </a>
              </label>
              <ErrorMessage name="checkbox" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Отправить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

