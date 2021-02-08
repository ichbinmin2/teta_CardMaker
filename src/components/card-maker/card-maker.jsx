import React, { useState } from "react";
import CardEditor from "../card-editor/card-editor";
import CardPreview from "../card-preview/card-preview";
import styles from "../card-maker/card-maker.module.css";

const CardMaker = ({ authService }) => {
  const [card, setCard] = useState([
    {
      id: "1",
      name: "Teta Min",
      company: "Kakao Company",
      theme: "light",
      title: "Software Engineer",
      message: "Go for it",
      fileName: "teta",
      fileURL: "teta.png",
    },
    {
      id: "2",
      name: "Teta Min",
      company: "Kakao Company",
      theme: "light",
      title: "Software Engineer",
      message: "Go for it",
      fileName: "teta",
      fileURL: "teta.png",
    },
    {
      id: "3",
      name: "Teta Min",
      company: "Kakao Company",
      theme: "light",
      title: "Software Engineer",
      message: "Go for it",
      fileName: "teta",
      fileURL: "teta.png",
    },
  ]);

  const handleAdd = (editedText) => {
    setCard(editedText);
    console.log(setCard);
  };

  return (
    <section className={styles.cardMakerBox}>
      <CardEditor />
      <CardPreview />
    </section>
  );
};

export default CardMaker;
