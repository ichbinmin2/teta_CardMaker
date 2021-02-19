import React, { memo } from "react";
import styles from "../footer/footer.module.css";

const Footer = memo(() => (
  <footer className={styles.footer}>
    <div className={styles.box}>
      <a className={styles.a} href="www.naver.com">
        github @ichbinmin2
      </a>
    </div>
  </footer>
));

export default Footer;
