import React from "react";
import CardEditor from "../card-editor/card-editor";
import CardPreview from "../card-preview/card-preview";
import styles from "../card-maker/card-maker.module.css";

const CardMaker = ({ authService }) => {
  return (
    <section className={styles.cardMakerBox}>
      <CardEditor />
      <CardPreview />
    </section>
  );
};

export default CardMaker;
