import React from "react";
import styles from "../login/login.module.css";

const Login = ({ onLogin, onMouseLeave, onMouseOver }) => {
  return (
    <section className={styles.loginBox}>
      <div className={styles.textBox}>
        <span className={styles.text}>당신의 카드를 만들어보세요!</span>
        <span className={styles.text2}>Welcome to user</span>
        <div className={styles.egg}></div>
      </div>
      <ul className={styles.btnBox}>
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
