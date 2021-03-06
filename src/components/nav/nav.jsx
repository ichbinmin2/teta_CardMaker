import React, { memo } from "react";
import styles from "../nav/nav.module.css";

const Nav = memo(({ onLogout, id, onMouseLeave, onMouseOver }) => {
  return (
    <header className={styles.header}>
      <span> Teta's Card Maker </span>
      {id && (
        <button
          className={styles.loginBtn}
          onClick={onLogout}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          Logout
        </button>
      )}
    </header>
  );
});

export default Nav;
