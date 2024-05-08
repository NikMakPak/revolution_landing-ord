import React, { useState } from "react";
import { AccordionItem } from "./AccordionItem";

import styles from "./Accordion.module.scss";

export const Accordion = ({ categories }) => {
  const [openId, setId] = useState(null);

  return (
    <ul className={styles.accordion}>
      {categories.map((category, id) => {
        return (
          <AccordionItem
            onClick={() => (id === openId ? setId(null) : setId(id))}
            category={category}
            index={id}
            isOpen={id === openId}
            key={id}
          />
        );
      })}
    </ul>
  );
};
