import React, { useState } from "react";
import styles from "../login/login.module.css";

const Login = ({ onLogin, onMouseLeave, onMouseOver }) => {
  const [show, setShow] = useState(false);

  const handlerLoginBox = (event) => {
    show !== true ? setShow(true) : setShow(false);
  };

  return (
    <section className={styles.loginBox}>
      <div className={`${show === true ? styles.textBox : styles.hideTextBox}`}>
        <span
          className={styles.title}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          Teta's
        </span>
        <span
          className={styles.title2}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          Card Maker
        </span>
        <span
          className={styles.text}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          당신의 명함을 정리해보세요
        </span>

        <div className={styles.egg}></div>
        <div className={styles.container}>
          {show === true ? (
            <button
              className={styles.showBtn}
              onClick={handlerLoginBox}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            >
              접어두기
            </button>
          ) : (
            <button
              className={styles.showBtn}
              onClick={handlerLoginBox}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            >
              로그인하러 가기
            </button>
          )}
        </div>
      </div>

      <ul className={`${show === true ? styles.btnBox : styles.hideBtnBox}`}>
        <li className={styles.list}>
          <button
            className={styles.btn}
            onClick={onLogin}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          >
            Google
          </button>
          <button
            className={styles.btn}
            onClick={onLogin}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          >
            Github
          </button>
        </li>
        <div className={styles.triangle}></div>
      </ul>
    </section>
  );
};

export default Login;
