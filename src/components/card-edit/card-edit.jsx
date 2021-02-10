import React from "react";
import Button from "../button/button";
import styles from "../card-edit/card-edit.module.css";
import ImageInput from "../image_input/image_input";

const CardEdit = ({ card }) => {
  const {
    id,
    name,
    company,
    theme,
    title,
    email,
    message,
    fileName,
    fileURL,
  } = card;

  // const inputRef = React.createRef();
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   const editedText = inputRef.
  //   editedText && props.onAdd(editedText);
  //   inputRef.current.value = "";
  // };
  const onSubmit = () => {};
  return (
    <form className={styles.writeform}>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="name"
        className={styles.input}
      ></input>
      <input
        type="text"
        name="company"
        value={company}
        placeholder="직장"
        className={styles.input}
      ></input>
      <select //
        name="theme"
        value={theme}
        className={styles.select}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="직업"
        className={styles.input}
      ></input>
      <input
        type="email"
        name="email"
        value={email}
        placeholder="이메일 주소"
        className={styles.input}
      ></input>
      <textarea value={message} className={styles.message}></textarea>
      <div className={styles.inputBtn}>
        <ImageInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEdit;
