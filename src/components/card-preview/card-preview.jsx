import React from "react";
import CardBox from "../card-box/card-box";
import styles from "../card-preview/card-preview.module.css";

const CardPreview = ({ cards, deleteCard }) => {
  return (
    <section className={styles.previewBox}>
      <h1 className={styles.title}>Card List</h1>
      <ul className={styles.card}>
        {Object.keys(cards).map((key) => (
          <CardBox key={key} card={cards[key]} deleteCard={deleteCard} />
        ))}
      </ul>
    </section>
  );
};

export default CardPreview;
