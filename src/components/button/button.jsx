import React, { memo } from "react";
import styles from "../button/button.module.css";

const Button = memo(({ name, onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {name}
    </button>
  );
});

export default Button;
