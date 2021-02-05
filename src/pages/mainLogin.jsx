import React, { useEffect, useState } from "react";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import Login from "../components/login/login";
import styles from "../pages/mainLogin.module.css";
import { auth } from "../service/firebase";
import CardMaker from "../components/card-maker/card-maker";

const MainLogin = ({ authService }) => {
  const [userLogin, setUserLogin] = useState(null);

  const userLoginCheck = () => {
    authService //
      .user(userLogin)
      .then(console.log("userLoginCheck 결과를 받아오고 있습니다."));
  };

  const useEffect =
    (() => {
      auth.onAuthStateChanged((user) => {
        setUserLogin(user);
      });
    },
    [authService]);

  return (
    <section className={styles.background}>
      <div className={styles.mainBox}>
        <Nav />
        {userLoginCheck ? ( //
          <Login authService={authService} />
        ) : (
          <CardMaker />
        )}
        <Footer />
      </div>
    </section>
  );
};

export default MainLogin;
