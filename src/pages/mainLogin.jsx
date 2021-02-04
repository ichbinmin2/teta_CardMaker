import React from "react";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import Login from "../components/login/login";
import styles from "../pages/mainLogin.module.css";

const MainLogin = ({ authService }) => {
  return (
    <section className={styles.background}>
      <div className={styles.mainBox}>
        <Nav />
        <Login authService={authService} />
        <Footer />
      </div>
    </section>
  );
};

export default MainLogin;
