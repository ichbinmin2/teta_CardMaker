import React, { useEffect, useState } from "react";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import Login from "../components/login/login";
import styles from "../pages/mainBoard.module.css";
import CardMaker from "../components/card-maker/card-maker";

const MainBoard = ({ FileInput, authService, cardRepository }) => {
  const [id, setId] = useState(null);

  const handlerMaker = (user) => {
    setId(user);
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => handlerMaker(data.user.uid));
  };

  const onLogout = () => {
    authService //
      .logout();
  };

  useEffect(() => {
    authService //
      .userLogin((user) => {
        if (user) {
          handlerMaker(user.uid);
        } else {
          handlerMaker(null);
        }
      });
  });

  return (
    <section className={styles.background}>
      <div className={styles.mainBox}>
        <Nav authService={authService} id={id} onLogout={onLogout} />
        <div className={styles.container}>
          {id === null ? (
            <Login onLogin={onLogin} />
          ) : (
            <CardMaker
              FileInput={FileInput}
              id={id}
              cardRepository={cardRepository}
            />
          )}
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default MainBoard;
