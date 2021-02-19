import React from "react";
import styles from "../login/login.module.css";

const Login = ({ onLogin }) => {
  return (
    <section className={styles.loginBox}>
      <div className={styles.textBox}>
        <span className={styles.text}>Welcome</span>
        <div className={styles.egg}></div>
      </div>
      <ul className={styles.btnBox}>
        <li className={styles.list}>
          <button className={styles.btn} onClick={onLogin}>
            Google
          </button>
          <button className={styles.btn} onClick={onLogin}>
            Github
          </button>
        </li>
        <div className={styles.triangle}></div>
      </ul>
    </section>
  );
};

export default Login;
