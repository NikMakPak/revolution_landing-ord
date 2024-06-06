import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Bubble.module.scss";
import { useScreenWidth } from "../../hooks/useScreenWidth";

const Bubble = ({
  id,
  title,
  position: { x, y },
  imgSrc,
  link,
  setActiveProduct = () => {},
  parentRef,
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
    if (parentRef?.current && blockRef?.current) {
      const { width: parentWidth, height: parentHeight } = parentRef.current.getBoundingClientRect();

      const relativePosition = getRelativePosition(
        x,
        y,
        parentWidth,
        parentHeight
      );

      blockRef.current.style.left = `${relativePosition.x}%`;
      blockRef.current.style.top = `${relativePosition.y}%`;
    } else {
      blockRef.current.style.left = `${x}px`;
      blockRef.current.style.top = `${y}px`;
    }
  }, [parentRef, x, y]);

  function getRelativePosition(x, y, parentWidth, parentHeight) {
    const relativeX = (x / parentWidth) * 100;
    const relativeY = (y / parentHeight) * 100;
    return {
      x: relativeX,
      y: relativeY,
    };
  }

  return (
    <div
      className={styles.wrapper}
      ref={blockRef}
    >
      <motion.div
        onMouseEnter={() => onEnter()}
        onMouseLeave={() => onLeave()}
        onClick={() => {
          if (screenWidth <= 1140) {
            setOpenModal(true)
          } else
            window.open(`https://smrevolution.ru/${link}`, "_blank")
          }
        }
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        className={styles.bubble}
      >
        <img
          src={imgSrc}
          alt={title}
        />
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
