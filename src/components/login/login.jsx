import React from "react";
import styles from "../login/login.module.css";

const Login = ({ onLogin }) => {
  return (
    <section className={styles.section}>
      <div className={styles.loginBox}>
        <div className={styles.board}>
          <div className={styles.textBox}>
            <span className={styles.text}>Welcome</span>
          </div>
          <ul className={styles.btnBox}>
            <li>
              <button className={styles.btn} onClick={onLogin}>
                Google
              </button>
            </li>
            <li>
              <button className={styles.btn} onClick={onLogin}>
                Github
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Login;
