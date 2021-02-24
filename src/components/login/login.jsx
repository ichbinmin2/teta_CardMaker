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
        <span className={styles.title}>Teta Company </span>
        <span className={styles.title2}>Maker Bussiness</span>
        <span className={styles.text}>당신의 명함을 정리해보세요</span>

        <div className={styles.egg}></div>
        {show === true ? (
          <button className={styles.showBtn} onClick={handlerLoginBox}>
            접어두기!
          </button>
        ) : (
          <button className={styles.showBtn} onClick={handlerLoginBox}>
            로그인하러 가기
          </button>
        )}
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
