import React from "react";
import CardAdd from "../card-add/card-add";
import CardEdit from "../card-edit/card-edit";
import styles from "../card-editor/card-editor.module.css";

const CardEditor = ({ cards, onAddCard, updateCard, deleteCard }) => {
  return (
    <section className={styles.editorBox}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.editor}>
        {Object.keys(cards).map((key) => (
          <CardEdit
            key={key}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
        ))}
        <CardAdd onAddCard={onAddCard} />
      </ul>
    </section>
  );
};

export default CardEditor;
