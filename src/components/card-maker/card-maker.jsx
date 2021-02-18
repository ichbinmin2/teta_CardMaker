import React, { useState } from "react";
import CardEditor from "../card-editor/card-editor";
import CardPreview from "../card-preview/card-preview";
import styles from "../card-maker/card-maker.module.css";

const CardMaker = ({ FileInput, id, cardRepository }) => {
  const [cards, setCards] = useState({});

  const onAddOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(id, card);
  };

  const onDeleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(id, card);
  };

  return (
    <section className={styles.cardMakerBox}>
      <CardEditor
        FileInput={FileInput}
        cards={cards}
        onAddCard={onAddOrUpdateCard}
        updateCard={onAddOrUpdateCard}
        deleteCard={onDeleteCard}
      />
      <CardPreview cards={cards} />
    </section>
  );
};

export default CardMaker;
