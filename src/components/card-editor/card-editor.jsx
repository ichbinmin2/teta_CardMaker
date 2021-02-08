import React from "react";
import CardEdit from "../card-edit/card-edit";
import styles from "../card-editor/card-editor.module.css";

const CardEditor = ({ onAdd }) => {
  return (
    <section className={styles.editorBox}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul>
        <li>
          <CardEdit onAdd={onAdd} />
        </li>
      </ul>
    </section>
  );
};

export default CardEditor;
