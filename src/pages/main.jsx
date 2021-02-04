import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../pages/main.module.css";

const Main = (props) => {
  const [onStart, setOnstart] = useState(false);
  const history = useHistory();

  const onStartClick = (event) => {
    setOnstart(!onStart);
    console.log(onStart);
  };

  const handlerLoginPage = ({ onStart }) => {
    onStartClick(onStart);
    history.push("/login");
  };

  return (
    <section className={styles.background}>
      <div>
        <button onClick={handlerLoginPage} className={styles.btn}>
          Card Maker Start!
        </button>
      </div>
    </section>
  );
};

export default Main;
