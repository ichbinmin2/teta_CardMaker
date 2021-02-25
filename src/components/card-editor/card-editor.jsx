import React from "react";
import CardAdd from "../card-add/card-add";
import CardEdit from "../card-edit/card-edit";
import styles from "../card-editor/card-editor.module.css";

const CardEditor = ({
  FileInput,
  cards,
  onAddCard,
  updateCard,
  deleteCard,
}) => {
  return (
    <section className={styles.editorBox}>
      <h1 className={styles.title}>정보를 입력하세요</h1>
      <ul className={styles.editor}>
        {Object.keys(cards).map((key) => (
          <CardEdit
            key={key}
            FileInput={FileInput}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
        ))}
        <CardAdd FileInput={FileInput} onAddCard={onAddCard} />
      </ul>
    </section>
  );
};

export default CardEditor;
