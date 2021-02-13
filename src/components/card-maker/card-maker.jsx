import React, { useState } from "react";
import CardEditor from "../card-editor/card-editor";
import CardPreview from "../card-preview/card-preview";
import styles from "../card-maker/card-maker.module.css";

const CardMaker = ({ FileInput }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Teta Min",
      company: "Kakao Company",
      theme: "light",
      title: "Software Engineer",
      email: "teta1dev@gmail.com",
      message: "Go for it",
      fileName: "teta",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "Teta Min",
      company: "Kakao Company",
      theme: "dark",
      title: "Software Engineer",
      email: "teta1dev@gmail.com",
      message: "Go for it",
      fileName: "teta",
      fileURL: "teta.png",
    },
    3: {
      id: "3",
      name: "Teta Min",
      company: "Kakao Company",
      theme: "colorful",
      title: "Software Engineer",
      email: "teta1dev@gmail.com",
      message: "Go for it",
      fileName: "teta",
      fileURL: null,
    },
  });

  // const onAddCard = (card) => {
  //   const updated = [...cards, card];
  //   setCards(updated);
  //   // cardAdd component에서 설정한 card 오브젝트를
  //   // 인자로 받아와서 업데이트된 데이터를 다시 담아주는 함수임.
  // };

  const onAddOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const onDeleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  const uploadImage = () => {};
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
