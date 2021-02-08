import React from "react";
import styles from "../card-box/card-box.module.css";

const CardBox = ({ card }) => {
  return (
    <section>
      <span>{card}</span>
    </section>
  );
};

export default CardBox;
