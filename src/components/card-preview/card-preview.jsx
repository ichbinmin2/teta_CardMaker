import React from "react";
import CardBox from "../card-box/card-box";
import styles from "../card-preview/card-preview.module.css";

const CardPreview = ({ cards }) => {
  return (
    <section className={styles.previewBox}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.card}>
        {cards.map((card) => (
          <CardBox card={card} />
        ))}
      </ul>
    </section>
  );
};

export default CardPreview;
