import React from "react";
import CardEdit from "../card-edit/card-edit";
import styles from "../card-editor/card-editor.module.css";

const CardEditor = ({ cards }) => {
  return (
    <section className={styles.editorBox}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.editor}>
        {cards.map((card) => (
          <CardEdit card={card} />
        ))}
      </ul>
    </section>
  );
};

export default CardEditor;
