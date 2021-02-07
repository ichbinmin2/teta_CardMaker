import React from "react";
import styles from "../nav/nav.module.css";

const Nav = ({ onLogout, id }) => {
  return (
    <header className={styles.header}>
      <span> Business Card Maker </span>
      {id !== null ? (
        <button onClick={onLogout} className={styles.loginBtn}>
          Logout
        </button>
      ) : null}
    </header>
  );
};

export default Nav;
