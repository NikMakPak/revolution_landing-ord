import React, { useRef } from "react";
import cn from "classnames";
import { Field, useFormikContext } from "formik";

//icons
import Dash from "../../assets/electric.svg";
import Net from "../../assets/net.svg";
import Router from "../../assets/router.svg";
import Security from "../../assets/security.svg";
import Water from "../../assets/water.svg";
import Video from "../../assets/video.svg";
import Temperature from "../../assets/temperature.svg";
import Lamp from "../../assets/lamp.svg";
import Home from "../../assets/home.svg";

import styles from "./Accordion.module.scss";

const categories = [
  {
    title: "Управление электропитанием помещения",
    iconSrc: Dash,
    options: [
      "Требуется проект электрощита",
      "Требуется сборка электрощита",
      "Имеется проект электроснабжения",
      "Мастер выключатель (общее отключение света и розеток при уходе)",
      "Индикация расхода количества электроэнергии",
      "Удаленное отключение определенных розеток",
    ],
  },
  {
    title: "Обогрев или охлаждение помещений",
    iconSrc: Temperature,
    options: [
      "Настенные радиаторы (батареи отопления)",
      "Внутрипольные конвекторы",
      "Теплый пол (обогрев помещений)",
      "Сплит-системы кондиционирования",
      "Канальная система кондиционирования",
      "Воздушное охлаждение",
    ],
  },
  {
    title: "Безопасность",
    iconSrc: Security,
    options: [
      "Биометрические/умные замки",
      "Имитация присутствия человека",
      "Управление механизмами защиты окон",
      "Режимы охраны объекта",
      "Контроль периметра участка",
      "Контроль проникновения в режиме охраны (оповещение, звуковая сигнализация и т.д)",
      "Датчики движения и присутствия",
      "Контроль доступа для определенных помещений/маршрутов",
      "Видеонаблюдение по периметру участка",
      "Видеонаблюдение у входной двери, в лифтовом холле",
      "Видеонаблюдение внутри помещений",
      "Скрытое видеонаблюдение",
      "Удаленный доступ к камерам видеонаблюдения на объекте",
    ],
  },
  {
    title: "Аудиовидео-системы",
    iconSrc: Video,
    options: [
      "Домашний кинотеатр",
      "Мультирум-система (единая звуковая дорожка в каждом помещении)",
      "Мультирум для придомовой территории",
      "Медиа-библиотека (сетевое хранилище данных)",
    ],
  },
  {
    title: "Входная группа объекта",
    iconSrc: Home,
    options: [
      "Интеграция с подъездным домофоном",
      "Домофоны для ворот на участке",
      "Управление откатными и гаражными воротами",
      "Управление калиткой",
      "Вывод функций домофона на смартфон заказчика",
      "Вывод интерфейсов домофона и видеонаблюдения на телевизоры",
      "Ландшафтное и фасадное освещение (декоративная подсветка)",
      "Противообледенительная система для дорожек и ступенек",
      "Автоматический полив растений",
      "Ландшафтное озвучивание",
      "Метеостанция",
    ],
  },
  {
    title: "Управление освещением",
    iconSrc: Lamp,
    options: [
      "Плавное включение/отключение световых приборов",
      "Возможность диммирование света",
      "Управление приводами штор",
      "Светодиодное освещение (одноцветное, RGB)",
      "Управление светом с помощью датчиков движения/присутствия",
      "Автоматическое ночное освещение",
      "Сценарии для управления освещением",
    ],
  },
  {
    title: "Контроль воздуха и воды",
    iconSrc: Water,
    options: [
      "Автоматизация приточной вентиляции",
      "Использование увлажнителей воздуха",
      "Отображение показателей качества воздуха",
      "Защита от утечки горючих газов",
      "Защита от протечек воды",
      "Пожарная сигнализация",
      "Отслеживание качества воды",
    ],
  },
  {
    title: "Центральные интерфейсы управления",
    iconSrc: Router,
    options: [
      "Настенные панели управления",
      "Настольные панели управления",
      "Термостаты в помещениях для климат-контроля",
      "Управление с телефонов/компьютеров",
      "Удаленный доступ",
      "Оповещение о различных событиях (SMS, Email и т. п.)",
      "Голосовое управление",
    ],
  },
  {
    title: "Интернет, Wi-Fi, телевидение",
    iconSrc: Net,
    options: [
      "Эфирное центральное телевидение",
      "Спутниковое телевидение",
      "Спутниковый интернет",
      "Интернет сотового провайдера",
      "Интернет-телевидение",
      "Резервирование интернет-канала (основной провайдер стал недоступен)",
      "Проводная интернет-сеть",
      "Организация локальной сети",
      "Настройка сетевого оборудования",
      "Аудит безопасности сети",
      "Беспроводная бесшовная интернет-сеть Wi-Fi",
    ],
  },
];

const ChooseBlock = ({ category, index }) => {
  const { values, setValues } = useFormikContext();

  const handleSelectAll = () => {
    const newCategories = [...values.categories];
    newCategories[index].chosenOptions = categories[index].options.slice();
    setValues({ ...values, categories: newCategories });
  };

  const allOptionsSelected =
    category.chosenOptions.length === categories[index].options.length;

  return (
    <>
      {categories[index].options.map((option, optionIndex) => (
        <div key={optionIndex}>
          <label htmlFor={option}>
            <Field
              type="checkbox"
              name={`categories[${index}].chosenOptions`}
              id={option}
              value={option}
              checked={category.chosenOptions.includes(option)}
              onChange={(e) => {
                const newChosenOptions = [...category.chosenOptions];
                if (e.target.checked) {
                  newChosenOptions.push(e.target.value);
                } else {
                  newChosenOptions.splice(
                    newChosenOptions.indexOf(e.target.value),
                    1
                  );
                }
                const newCategories = [...values.categories];
                newCategories[index].chosenOptions = newChosenOptions;
                setValues({ ...values, categories: newCategories });
              }}
            />
            {option}
          </label>
        </div>
      ))}
      <button
        type="button"
        onClick={handleSelectAll}
        className={cn("btn btn--modified", styles.btn, {
          [styles.disabledBtn]: !allOptionsSelected,
        })}
      >
        {allOptionsSelected ? "Выбрано" : "Выбрать все"}
      </button>
    </>
  );
};

export const AccordionItem = ({ onClick, isOpen, category, index }) => {
  const itemRef = useRef(null);

  return (
    <li className={styles.item}>
      <div
        className={styles.header}
        id={isOpen ? "" : "clickable-zone"}
        onClick={(e) => {
          if (
            e.target.id === "clickable-zone" ||
            e.target.tagName === "H5" ||
            e.target.tagName === "DIV"
          ) {
            onClick();
          }
          return;
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5>{category.title}</h5>
          <img
            src={categories[index].iconSrc}
            alt="icon"
            style={{ marginRight: "8px" }}
          />
        </div>
        <div
          className={styles.collapse}
          style={
            isOpen
              ? { height: itemRef.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className={styles.body} ref={itemRef}>
            <ChooseBlock key={index} category={category} index={index} />
          </div>
        </div>
      </div>
    </li>
  );
};
