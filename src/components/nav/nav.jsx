import React from "react";
import styles from "../nav/nav.module.css";
import { auth } from "../../service/firebase.util";
import { Link } from "react-router-dom";

const Nav = ({ currentUser }) => (
  <header className={styles.header}>
    <span> Business Card Maker </span>
    <button className={styles.loginBtn}>
      {currentUser ? (
        <Link className={styles.btn} onClick={() => auth.signOut} to="/login">
          Login
        </Link>
      ) : (
        <Link className={styles.btn}>LoginOut</Link>
      )}
    </button>
  </header>
);

export default Nav;
