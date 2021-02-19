import React, { useRef } from "react";
import Button from "../button/button";
import styles from "../card-edit/card-edit.module.css";

const CardEdit = ({ FileInput, card, updateCard, deleteCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const emailRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();

  const { name, company, theme, title, email, message, fileName } = card;

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };
  return (
    <form ref={formRef} className={styles.writeform}>
      <input
        ref={nameRef}
        type="text"
        name="name"
        value={name}
        className={styles.input}
        onChange={onChange}
      ></input>
      <input
        ref={companyRef}
        type="text"
        name="company"
        value={company}
        className={styles.input}
        onChange={onChange}
      ></input>
      <select //
        ref={themeRef}
        name="theme"
        value={theme}
        className={styles.select}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        type="text"
        name="title"
        value={title}
        className={styles.input}
        onChange={onChange}
      ></input>
      <input
        ref={emailRef}
        type="email"
        name="email"
        value={email}
        className={styles.input}
        onChange={onChange}
      ></input>
      <textarea
        ref={messageRef}
        name="message"
        value={message}
        className={styles.message}
        onChange={onChange}
      ></textarea>
      <div className={styles.inputBtn}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEdit;
