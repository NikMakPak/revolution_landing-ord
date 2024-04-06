import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./SubmitForm.module.scss";

const validationSchema = Yup.object({
  name: Yup.string().required("Обязательное поле"),
  phone: Yup.number().required("Обязательное поле"),
  select: Yup.string().required("Обязательное поле"),
  checkbox: Yup.boolean().oneOf(
    [true],
    "Необходимо согласиться с обработкой данных"
  ),
});

export const SubmitForm = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        <h3>Остались вопросы?</h3>
        <p>Незабываемые перемены для вашего комфорта</p>
      </header>
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
            <div className={styles.Input}>
              <Field
                type="text"
                name="name"
                placeholder="Ваше имя"
                className={`${styles.Input} ${
                  errors.name && touched.name ? styles.error : ""
                }`}
              />
            </div>
            <div className={styles.Input}>
              {/* todo маска телефона */}
              <Field
                type="tel"
                name="phone"
                placeholder="Номер телефона"
                className={errors.phone && touched.phone ? styles.error : ""}
              />
            </div>
            <div className={styles.Input}>
              <Field
                as="select"
                name="select"
                placeholder="Предпочитаемый способ связи"
                className={errors.select && touched.select ? styles.error : ""}
              >
                <option value="">Предпочитаемый способ связи</option>
                <option value="option1">Пункт 1</option>
                <option value="option2">Пункт 2</option>
              </Field>
            </div>
            <div className={styles.Checkbox}>
              <Field type="checkbox" name="checkbox" />
              <label htmlFor="checkbox">
                Я согласен на{" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  обработку персональных данных
                </a>
              </label>
              <ErrorMessage
                name="checkbox"
                component="div"
                className={styles.errMsg}
              />
            </div>
            <button
              className="btn btn--modified"
              type="submit"
              disabled={isSubmitting}
            >
              Отправить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

