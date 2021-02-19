import React, { useRef, useState } from "react";
import Button from "../button/button";
import styles from "../card-add/card-add.module.css";

const CardAdd = ({ FileInput, onAddCard }) => {
  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const emailRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: emailRef.current.value || "",
      email: titleRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAddCard(card);
  };

  return (
    <form ref={formRef} className={styles.writeform}>
      <input
        ref={nameRef}
        type="text"
        name="name"
        placeholder="Name"
        className={styles.input}
      ></input>
      <input
        ref={companyRef}
        type="text"
        name="company"
        placeholder="Company"
        className={styles.input}
      ></input>
      <select //
        ref={themeRef}
        name="theme"
        className={styles.select}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        type="text"
        name="title"
        placeholder="Title"
        className={styles.input}
      ></input>
      <input
        ref={emailRef}
        type="email"
        name="email"
        placeholder="Email"
        className={styles.input}
      ></input>
      <textarea
        ref={messageRef}
        placeholder="Message"
        className={styles.message}
      ></textarea>
      <div className={styles.inputBtn}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAdd;
