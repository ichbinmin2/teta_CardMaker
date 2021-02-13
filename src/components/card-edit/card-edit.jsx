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
    // form의 새로고침을 방지
    // event current target에 있는 name이 card의 key가 되고
    // event current target에 있는 현재 값valu가
    // 우리가 사용할 value가 될 것이다.
    updateCard({
      ...card, // 받아온 기존의 card와 key와 value를 그대로 사용
      [event.currentTarget.name]: event.currentTarget.value,
      // event.currentTarget.name은 key가 되고
      // event.currentTarget.value는 value가 될 수 있도록 설정해주었다.
    });
  };

  const uploadImage = (event) => {};
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
        <FileInput name={name} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEdit;
