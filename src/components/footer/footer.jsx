import React, { memo } from "react";
import styles from "../footer/footer.module.css";

const Footer = memo(() => (
  <footer className={styles.footer}>
    <div className={styles.box}>
      <a
        className={styles.a}
        href="https://github.com/ichbinmin2/teta_CardMaker"
      >
        github @ichbinmin2
      </a>
    </div>
  </footer>
));

export default Footer;
