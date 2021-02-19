import React, { memo, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../pages/main.module.css";

const Main = memo(() => {
  const history = useHistory();
  const [start, setStart] = useState(false);

  const goToLoginPage = () => {
    setStart(true);
    history.push("/board");
  };

  return (
    <section className={styles.background}>
      {start !== true ? (
        <button
          onClick={goToLoginPage}
          className={`${styles.btn} ${styles.after}`}
        >
          Card Maker Start!
        </button>
      ) : (
        <button
          onClick={goToLoginPage}
          className={`${styles.btn} ${styles.before}`}
        >
          Card Maker Start!
        </button>
      )}
    </section>
  );
});

export default Main;
