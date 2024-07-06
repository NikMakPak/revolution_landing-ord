import React, { useEffect, useState } from "react";
import styles from "./InstaProgressBar.module.scss";
import { motion } from "framer-motion";

export const InstaProgressBar = ({ slides, activeIndex, isInteracts }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isInteracts) {
      setKey(key + 1);
    }
  }, [isInteracts]);

  return (
    <div className={styles.progressBars}>
      {slides.map((story, index) => (
        <div
          key={story.id}
          className={`${styles.progressBar} ${
            index < activeIndex ? styles.watchedBar : ""
          }`}
        >
          <motion.div
            key={key}
            className={styles.progress}
            initial={{ width: 0 }}
            animate={{
              width: index === activeIndex && !isInteracts ? "100%" : "0%",
            }}
            transition={{
              duration: index === activeIndex && !isInteracts ? 5 : 0,
              ease: "linear",
            }}
          ></motion.div>
        </div>
      ))}
    </div>
  );
};
