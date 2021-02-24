import React, { memo, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../pages/main.module.css";

const Main = memo(() => {
  const history = useHistory();
  const [start, setStart] = useState(false);
  const [cursor, setCursor] = useState(false);
  const divRef = useRef();
  const buttonRef = useRef();

  const goToLoginPage = () => {
    setStart(true);
    history.push("/board");
  };

  const HandlerCursorMove = (event) => {
    const left = event.pageX + "px";
    const top = event.pageY + "px";
    divRef.current.style.left = left;
    divRef.current.style.top = top;
  };

  const HandlerCursorOver = (event) => {
    setCursor(true);
  };

  const HandlerCursorLeave = (event) => {
    setCursor(false);
  };

  return (
    <section className={styles.background} onMouseMove={HandlerCursorMove}>
      <div
        ref={divRef} //
        className={`${styles.cursor}
        ${cursor === true ? styles.cursorOver : styles.cursorLeave}`}
      ></div>
      <button
        ref={buttonRef}
        onClick={goToLoginPage}
        className={styles.btn}
        onMouseLeave={HandlerCursorLeave}
        onMouseOver={HandlerCursorOver}
      >
        Card Maker Start!
      </button>
    </section>
  );
});

export default Main;
