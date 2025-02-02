import React, { useState } from "react";
import { StepsForm } from "../components/StepsForm/StepsForm";
import { ErrorMessage, Field, useField, useFormikContext } from "formik";
import { Accordion } from "../components/Accordion/Accordion";

// accordion icons


import styles from "./Calculator.module.scss";

export const Calculator = () => {
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1);

  const RoomType = () => {
    return (
      <>
        <p>Заполните информацию о проекте</p>
        <div style={{ maxWidth: "905px", margin: "0 auto" }}>
          <div className={styles.flex} style={{ marginBottom: "16px" }}>
            <div className={styles.Input}>
              <Field type="text" name="city" placeholder="Введите город" />
              <ErrorMessage
                name="city"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.Input}>
              <Field type="text" name="district" placeholder="Введите район" />
              <ErrorMessage
                name="district"
                component="div"
                className={styles.error}
              />
            </div>
          </div>
          <div className={styles.flex} style={{ rowGap: "9px" }}>
            <Field type="radio" id="flat" name="roomType" value="flat" />
            <label htmlFor="flat" className={styles.cardImg}>
              <svg
                width="29"
                height="22"
                viewBox="0 0 29 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.83008 21.9844C2.29883 21.9844 0.986328 20.6836 0.986328 18.1875V3.91406C0.986328 1.40625 2.29883 0.117188 4.83008 0.117188H24.9043C27.4355 0.117188 28.748 1.41797 28.748 3.91406V18.1875C28.748 20.6836 27.4355 21.9844 24.9043 21.9844H4.83008ZM3.2832 4.11328V7.11328H26.4512V4.11328C26.4512 2.97656 25.8418 2.40234 24.7637 2.40234H4.9707C3.88086 2.40234 3.2832 2.97656 3.2832 4.11328ZM24.7637 19.6875C25.8418 19.6875 26.4512 19.125 26.4512 17.9883V9.26953H15.9863V19.6875H24.7637ZM4.9707 19.6875H13.7363V9.26953H3.2832V17.9883C3.2832 19.125 3.88086 19.6875 4.9707 19.6875Z"
                  fill="#87F398"
                />
              </svg>
              <p className="CaptionL">Квартира</p>
            </label>
            <Field type="radio" id="house" name="roomType" value="house" />
            <label htmlFor="house" className={styles.cardImg}>
              <svg
                width="30"
                height="26"
                viewBox="0 0 30 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.58594 25.8828C4.72266 25.8828 3.63281 24.8047 3.63281 23V12.2891L2.41406 13.2969C2.09766 13.5664 1.73438 13.7656 1.34766 13.7656C0.515625 13.7656 0 13.2031 0 12.5117C0 12.1367 0.175781 11.7383 0.527344 11.457L12.7383 1.20312C13.8516 0.265625 15.2695 0.265625 16.3711 1.20312L21.7969 5.76172V3.69922C21.7969 3.17188 22.1602 2.83203 22.6875 2.83203H24.5156C25.0547 2.83203 25.3945 3.17188 25.3945 3.69922V8.78516L28.5703 11.4453C28.9102 11.7383 29.0859 12.1016 29.0859 12.5352C29.0859 13.2852 28.5117 13.7656 27.75 13.7656C27.3516 13.7656 26.9883 13.5664 26.6719 13.2969L25.3945 12.2305V23C25.3945 24.793 24.3047 25.8828 22.4414 25.8828H6.58594ZM17.9062 15.6992V23.2695H21.6797C22.3945 23.2695 22.793 22.8594 22.793 22.1445V10.0391L15.1172 3.59375C14.7539 3.28906 14.3438 3.28906 13.9922 3.59375L6.23438 10.0977V22.1445C6.23438 22.8594 6.63281 23.2695 7.34766 23.2695H11.1797V15.6992C11.1797 15.1484 11.543 14.7852 12.0938 14.7852H16.9922C17.543 14.7852 17.9062 15.1484 17.9062 15.6992Z"
                  fill="#87F3A5"
                />
              </svg>
              <p className="CaptionL">Дом</p>
            </label>
            <Field
              type="radio"
              id="commercial"
              name="roomType"
              value="commercial"
            />
            <label htmlFor="commercial" className={styles.cardImg}>
              <svg
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.6051 17.5781C7.75354 17.5781 6.76917 16.4648 6.49963 14.6367L4.7301 2.51953H1.24963C0.569946 2.51953 -0.00427246 1.94531 -0.00427246 1.26562C-0.00427246 0.574219 0.569946 0 1.24963 0H5.18713C6.56995 0 7.0387 0.550781 7.19104 1.64062L7.3551 2.77734H25.9176C26.8434 2.77734 27.3473 3.30469 27.3473 4.06641C27.3473 4.20703 27.3239 4.40625 27.3004 4.57031L26.4567 10.2305C26.1871 12.082 25.2028 13.1953 23.3512 13.1953H8.8551L9.03088 14.3906C9.1012 14.918 9.4176 15.2695 9.90979 15.2695H23.2223C23.8317 15.2695 24.3824 15.7383 24.3824 16.418C24.3824 17.1094 23.8317 17.5781 23.2223 17.5781H9.6051ZM24.6403 5.08594H7.68323L8.52698 10.8867H23.0817C23.5973 10.8867 23.8785 10.5586 23.9489 10.0195L24.6403 5.08594ZM10.5778 23.5664C9.39417 23.5664 8.44495 22.6172 8.44495 21.4336C8.44495 20.25 9.39417 19.3008 10.5778 19.3008C11.7614 19.3008 12.7106 20.25 12.7106 21.4336C12.7106 22.6172 11.7614 23.5664 10.5778 23.5664ZM21.3239 23.5664C20.1403 23.5664 19.1793 22.6172 19.1793 21.4336C19.1793 20.25 20.1403 19.3008 21.3239 19.3008C22.5074 19.3008 23.4567 20.25 23.4567 21.4336C23.4567 22.6172 22.5074 23.5664 21.3239 23.5664Z"
                  fill="#F3A187"
                />
              </svg>
              <p className="CaptionL">Коммерческое помещение</p>
            </label>
          </div>
        </div>
      </>
    );
  };

  const Specifications = () => {
    const { values, setValues } = useFormikContext();

    return (
      <>
        <p>Выберите нужные спецификации</p>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className={styles.flex} style={{ marginBottom: "16px" }}>
            <Accordion categories={values.categories} />
          </div>
        </div>
      </>
    );
  };

  const Contacts = () => {
    const [fileError, setFileError] = useState(null);

    const handleFileChange = (event, setFieldValue) => {
      const file = event.currentTarget.files[0];
      if (file && file.size > 5242880) {
        setFileError("File size is too large");
        setFieldValue("file", null);
      } else {
        setFileError(null);
        setFieldValue("file", file);
      }
    };
    return (
      <>
        <p>Пожалуйста, заполните форму</p>
        <div style={{ maxWidth: "905px", margin: "0 auto" }}>
          <div className={styles.flex}>
            <div className={styles.Input}>
              <Field type="text" name="name" placeholder="Ваше имя" />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.Input}>
              <Field type="text" name="phone" placeholder="Номер телефона" />
              <ErrorMessage
                name="phone"
                component="div"
                className={styles.error}
              />
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.Input}>
              <Field type="email" name="email" placeholder="Ваш email" />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.Input}>
              <Field name="file">
                {({ field, form }) => (
                  <input
                    type="file"
                    onChange={(event) =>
                      handleFileChange(event, form.setFieldValue)
                    }
                    accept="application/pdf,doc,docx,txt/*"
                  />
                )}
              </Field>
              {fileError && <div className={styles.error}>{fileError}</div>}
              <ErrorMessage
                name="file"
                component="div"
                className={styles.error}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ObjectSquere = () => {
    const [field, meta, helpers] = useField("square");

    const handleChange = (e) => {
      const value = e.target.value.replace(/\D/g, ""); // Оставляем только цифры
      helpers.setValue(value);
    };
    return (
      <>
        <p>Введите площадь объекта</p>
        <div style={{ maxWidth: "905px", margin: "0 auto" }}>
          <div className={styles.flex} style={{ marginBottom: "16px" }}>
            <div className={styles.Input}>
              <Field
                type="text"
                name="square"
                placeholder="Площадь объекта, от 11 до 500 м&sup2;"
                value={field.value ? `${field.value} м²` : ""}
                onChange={handleChange}
              />
              <ErrorMessage
                name="square"
                component="div"
                className={styles.error}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  const BuildStep = () => {
    return (
      <>
        <p>Выберите этап строительства</p>
        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
          <div className={styles.flex} style={{rowGap: "9px"}}>
            <Field
              type="radio"
              id="design"
              name="buildingStep"
              value="design"
            />
            <label htmlFor="design" className={styles.card}>
              <p className="CaptionL">Проектирование</p>
            </label>
            <Field
              type="radio"
              id="roughFinish"
              name="buildingStep"
              value="roughFinish"
            />
            <label htmlFor="roughFinish" className={styles.card}>
              <p className="CaptionL">Черновая отделка</p>
            </label>
            <Field
              type="radio"
              id="finalFinish"
              name="buildingStep"
              value="finalFinish"
            />
            <label htmlFor="finalFinish" className={styles.card}>
              <p className="CaptionL">Чистовая отделка</p>
            </label>
            <Field
              type="radio"
              id="finishRepair"
              name="buildingStep"
              value="finishRepair"
            />
            <label htmlFor="finishRepair" className={styles.card}>
              <p className="CaptionL">Ремонт окончен</p>
            </label>
            <Field
              type="radio"
              id="living"
              name="buildingStep"
              value="living"
            />
            <label htmlFor="living" className={styles.card}>
              <p className="CaptionL">Проживание</p>
            </label>
          </div>
        </div>
      </>
    );
  };

  const getStepInfo = (step, subStep) => {
    if (step === 1) {
      switch (subStep) {
        case 1:
          return { title: "Информация о проекте", item: <RoomType /> };
        case 2:
          return { title: "Этап строительства", item: <BuildStep /> };
        case 3:
          return { title: "Площадь объекта", item: <ObjectSquere /> };
        default:
          return { title: "Информация о проекте", item: <RoomType /> };
      }
    } else {
      switch (step) {
        case 2:
          return { title: "Область автоматизации", item: <Specifications /> };
        case 3:
          return { title: "Заказать расчет", item: <Contacts /> };
        default:
          return { title: "Информация о проекте", item: <RoomType /> };
      }
    }
  };

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

  let { title, item } = getStepInfo(step, subStep);

  return (
    <section id="calculator">
      <header className={styles.header}>
        <h4>Калькулятор</h4>
        <h2>{title}</h2>
      </header>

      <div className={styles.steps}>
        <div>
          <span
            className={`${step >= 1 ? styles.active : ""} ${styles.circle}`}
          >
            1
          </span>
        </div>
        <div
          className={`${step > 1 ? styles.active : ""} ${styles.line}`}
        ></div>
        <div>
          <span
            className={`${step >= 2 ? styles.active : ""} ${styles.circle}`}
          >
            2
          </span>
        </div>
        <div
          className={`${step == 3 ? styles.active : ""} ${styles.line}`}
        ></div>
        <div>
          <span
            className={`${step == 3 ? styles.active : ""} ${styles.circle}`}
          >
            3
          </span>
        </div>
      </div>

      <div className={styles.stepTitle}>
        <p>Информация о проекте</p>
        <p className={styles.centerT}>Область автоматизации</p>
        <p>Заказать расчет</p>
      </div>

      <StepsForm
        step={step}
        increment={increment}
        subStep={subStep}
        decrement={decrement}
        item={item}
      />
    </section>
  );
};
