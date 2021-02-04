import React, { useEffect, useState } from "react";
import { auth } from "../service/firebase.util";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import Login from "../components/login/login";
import styles from "../pages/mainLogin.module.css";

const MainLogin = (props) => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((userLogin) => {
      setLogin(userLogin);
    });
  });

  return (
    <section className={styles.background}>
      <div className={styles.mainBox}>
        <Nav currentUser={login} />
        <Login />
        <Footer />
      </div>
    </section>
  );
};

export default MainLogin;
