import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../pages/main.module.css";

const Main = (props) => {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/board");
  };

  return (
    <section className={styles.background}>
      <div>
        <button onClick={goToLoginPage} className={styles.btn}>
          Card Maker Start!
        </button>
      </div>
    </section>
  );
};

export default Main;
