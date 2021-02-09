import React, { useState } from "react";
import CardEditor from "../card-editor/card-editor";
import CardPreview from "../card-preview/card-preview";
import styles from "../card-maker/card-maker.module.css";

const CardMaker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);

  return (
    <section className={styles.cardMakerBox}>
      <CardEditor cards={cards} />
      <CardPreview cards={cards} />
    </section>
  );
};

export default CardMaker;
