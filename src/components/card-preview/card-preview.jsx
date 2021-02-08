import React from "react";
import styles from "../card-preview/card-preview.module.css";

const CardPreview = (props) => {
  return (
    <section className={styles.previewBox}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul>
        <li>card1</li>
        <li>card2</li>
        <li>card3</li>
      </ul>
    </section>
  );
};

export default CardPreview;
