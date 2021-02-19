import React, { memo } from "react";
import styles from "../card-box/card-box.module.css";

const DEFAULT_IMAGE = "/images/default_logo.png";

const CardBox = memo(({ card }) => {
  //  디컨스트럭팅을 통해  props로 받은 card 안에 이 모든 정보들이 들어있게함.
  const { name, company, theme, title, email, message, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.profileCard} ${getThemeStyles(theme)}`}>
      <img className={styles.img} src={url} alt="profile_photo" />
      <div className={styles.profile}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.p}>{email}</p>
        <p className={styles.p}>{message}</p>
      </div>
    </li>
  );
});

function getThemeStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`테마를 알 수 없습니다: ${theme}`);
  }
}
export default CardBox;
