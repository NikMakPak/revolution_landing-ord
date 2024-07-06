import { Sheet } from "react-modal-sheet";
import { useState, useRef } from "react";

import styles from "./BottomSheet.module.scss";
import { InfoCard } from "../InfoCard/InfoCard";

export const BottomSheet = ({ isOpen, setOpen, data, activeProduct }) => {
  const ref = useRef();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Sheet isOpen={isOpen} onClose={handleClose} detent="content-height">
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content style={{ paddingBottom: ref.current?.y }}>
          <Sheet.Scroller>
            <aside
              className={styles.win}
              style={isOpen && { borderRadius: "0px" }}
            >
              <header>
                <p>{data.header.title}</p>
                <h3>{data.header.subtitle}</h3>
              </header>
              <p className={styles.content}>{data.content}</p>
              <ul className={styles.scrollZone}>
                {data.products.map((product) => (
                  <InfoCard
                    tag="li"
                    key={product.id}
                    imgSrc={product.imgSrc}
                    alt={product.title}
                    style={{
                      backgroundColor:
                        activeProduct === product.id ? "#ECEAFF" : "",
                    }}
                  >
                    <p>{product.brand}</p>
                    <p>{product.title}</p>
                  </InfoCard>
                ))}
              </ul>
              <a
                href={data.link}
                className="btn btn--modified"
                target="_blank"
                rel="noopener noreferrer"
              >
                Узнать подробнее
              </a>
            </aside>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop onTap={handleClose} />
    </Sheet>
  );
};
