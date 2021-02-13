import React, { useEffect, useState } from "react";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import Login from "../components/login/login";
import styles from "../pages/mainBoard.module.css";
import CardMaker from "../components/card-maker/card-maker";

const MainBoard = ({ FileInput, authService }) => {
  const [id, setId] = useState(null);

  const handlerMaker = (userId) => {
    setId(userId);
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      // login 안에
      // event가 발생한 currentTarget이 발생한 textContent를 읽어올 것이다.
      .then((data) => handlerMaker(data.user.uid));
    // data를 받으면 handlerMaker에 인자로 user.uid를 전달해준다.
  };

  const onLogout = () => {
    authService //
      .logout();
  };

  useEffect(() => {
    authService //
      .userLogin((user) => {
        if (user) {
          handlerMaker(user.id);
        } else {
          handlerMaker(null);
        }
      });
  }, [authService]);

  return (
    <section className={styles.background}>
      <div className={styles.mainBox}>
        <Nav authService={authService} id={id} onLogout={onLogout} />
        <div className={styles.container}>
          {id === null ? (
            <Login authService={authService} onLogin={onLogin} />
          ) : (
            <CardMaker FileInput={FileInput} />
          )}
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default MainBoard;
