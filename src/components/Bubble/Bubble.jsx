import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Bubble.module.scss";
import { useScreenWidth } from "../../hooks/useScreenWidth";

const Bubble = ({
  id,
  title,
  position,
  imgSrc,
  link,
  setActiveProduct = () => {},
  isAdaptive,
  setOpenModal,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const screenWidth = useScreenWidth();

  const onEnter = () => {
    setIsHovered(true);
    setActiveProduct(id);
  };

  const onLeave = () => {
    setIsHovered(false);
    setActiveProduct(null);
  };

  const blockRef = useRef(null);

  useEffect(() => {
    const { x, y } = getCurrentPosition();
    if (blockRef?.current) {
      blockRef.current.style.left = `${x}px`;
      blockRef.current.style.top = `${y}px`;
    }
  }, [screenWidth]);

  const getCurrentPosition = () => {
    const keys = Object.keys(position);
    if (keys.length === 2 && keys.includes("x") && keys.includes("y"))
      return position;
    if (screenWidth >= 1400) {
      return position[1440];
    } else if (screenWidth >= 750) {
      return position[768];
    } else {
      return position[375];
    }
  };
  return (
    <div className={isAdaptive ? styles.wrapperAdapt : styles.wrapper} ref={blockRef}>
      <motion.div
        onMouseEnter={() => onEnter()}
        onMouseLeave={() => onLeave()}
        onClick={() => {
          if (screenWidth <= 1440) {
            setOpenModal(true);
          } else window.open(`https://smrevolution.ru/${link}`, "_blank");
        }}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        className={styles.bubble}
      >
        <img src={imgSrc} alt={title} />
      </motion.div>
      <div className={styles.titleWrap}>
        {isHovered && (
          <motion.p
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 5, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Bubble;
