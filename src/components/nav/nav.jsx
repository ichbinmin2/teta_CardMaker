import React, { memo } from "react";
import styles from "../nav/nav.module.css";

const Nav = memo(({ onLogout, id, onMouseLeave, onMouseOver }) => {
  return (
    <header className={styles.header}>
      <span> Business Card Maker </span>
      {id !== null ? (
        <button
          className={styles.loginBtn}
          onClick={onLogout}
          // onMouseOver={onMouseOver}
          // onMouseLeave={onMouseLeave}
        >
          Logout
        </button>
      ) : null}
    </header>
  );
});

export default Nav;
