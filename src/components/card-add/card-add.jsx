import React, { useRef } from "react";
import Button from "../button/button";
import styles from "../card-add/card-add.module.css";
import ImageInput from "../image_input/image_input";

const CardAdd = ({ onAddCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const emailRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();

  // onAdd 하는 이벤트 함수
  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), //userid 를 랜덤으로 받아오는 식
      name: nameRef.current.value || "",
      // nameRef 안의 current.value가 없으면 "" 비워두고 아니면 그대로 사용하겠다는 의미
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      // theme은 이미 정해진 옵션값(3개)이 있기 때문에 비워저 있을 수가 없다.
      title: emailRef.current.value || "",
      email: titleRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: "",
      fileURL: "",
    };
    formRef.current.reset();
    // 사용자가 입력해서 add 하고 나면 form의 값이 비워지게끔 설정했다.
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
        <ImageInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAdd;
