import React, { useEffect, useState } from "react";
import styles from "./InstaProgressBar.module.scss";
import { motion } from "framer-motion";
import { useSwiper } from "swiper/react";


export const InstaProgressBar = ({ slides, activeIndex }) => {
  const [progress, setProgress] = useState(0);

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
            className={styles.progress}
            initial={{ width: 0 }}
            style={{ width: "0%" }}
            animate={{
              width:
                index === activeIndex
                  ? "100%"
                  : index === activeIndex
                  ? "100%"
                  : "0%",
            }}
            transition={{
              duration: index === activeIndex ? 5 : 0,
              ease: "linear",
            }}
          ></motion.div>
        </div>
      ))}
    </div>
  );
};
