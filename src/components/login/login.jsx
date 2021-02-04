import React from "react";
import styles from "../login/login.module.css";
import { signInWithGoogle, signInGithub } from "../../service/firebase.util";

const Login = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.loginBox}>
        <div className={styles.board}>
          <div className={styles.textBox}>
            <span className={styles.text}>Welcome</span>
          </div>
          <ul className={styles.btnBox}>
            <li>
              <button className={styles.btn} onClick={signInWithGoogle}>
                구글 로그인
              </button>
            </li>
            <li>
              <button className={styles.btn} onClick={signInGithub}>
                깃허브 로그인
              </button>
            </li>
          </ul>
        </div>
        <footer></footer>
      </div>
    </section>
  );
};

export default Login;
