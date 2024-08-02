import React from "react";
import { InfoCard } from "../InfoCard/InfoCard";
import { v4 as uuidv4 } from "uuid";

import styles from "./InfoWin.module.scss";

export const InfoWin = ({ data, activeProduct }) => {
  return (
    <aside className={styles.win}>
      <header>
        <p>{data.header.title}</p>
        <h3>{data.header.subtitle}</h3>
      </header>
      <div className={styles.content}>
        {data.content.map((contentItem) => (
          <p
            key={contentItem}
            dangerouslySetInnerHTML={{ __html: contentItem }}
          />
        ))}
      </div>
      <ul className={styles.scrollZone}>
        {data.products.map((product) => (
          <InfoCard
            tag="li"
            key={product.id}
            imgSrc={product.imgSrc}
            alt={product.title}
            style={{
              backgroundColor: activeProduct === product.id ? "#ECEAFF" : "",
            }}
          >
            <p>{product.brand}</p>
            <p>{product.title}</p>
          </InfoCard>
        ))}
      </ul>
      <a
        href={`/shop/${data.link}`}
        className="btn btn--modified"
        target="_blank"
        rel="noopener noreferrer"
      >
        Узнать подробнее
      </a>
    </aside>
  );
};
