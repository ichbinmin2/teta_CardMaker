import React from "react";
import styles from "../card-edit/card-edit.module.css";

const CardEdit = (props) => {
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const editedText = inputRef.current.value;
    editedText && props.onAdd(editedText);
    inputRef.current.value = "";
  };

  return (
    <section>
      <form className={styles.writeTable}>
        <input ref={inputRef} type="text" placeholder="이름"></input>
        <input ref={inputRef} type="text" placeholder="직장"></input>
        <select>
          <option>Dark</option>
          <option>White</option>
          <option>Colorful</option>
        </select>
        <input ref={inputRef} type="text" placeholder="직업"></input>
        <input ref={inputRef} type="email" placeholder="이메일 주소"></input>
        <textarea>메모</textarea>
        <button onClick={onSubmit}>이름버튼</button>
        <button>리셋버튼</button>
      </form>
    </section>
  );
};

export default CardEdit;
