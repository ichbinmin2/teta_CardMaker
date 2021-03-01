import React, { memo } from "react";
import styles from "../button/button.module.css";

const Button = memo(({ name, onClick, onMouseLeave, onMouseOver }) => {
  return (
    <button
      onClick={onClick}
      className={styles.btn}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
    >
      {name}
    </button>
  );
});

export default Button;
