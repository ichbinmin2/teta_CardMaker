import React, { useEffect, useRef, useState } from "react";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import Login from "../components/login/login";
import styles from "../pages/mainBoard.module.css";
import CardMaker from "../components/card-maker/card-maker";

const MainBoard = ({ FileInput, authService, cardRepository }) => {
  const [id, setId] = useState(null);
  const [cursor, setCursor] = useState(false);
  const divRef = useRef();

  const HandlerCursorMove = (event) => {
    const left = event.pageX + "px";
    const top = event.pageY + "px";
    divRef.current.style.left = left;
    divRef.current.style.top = top;
  };

  const HandlerCursorOver = () => {
    setCursor(true);
  };

  const HandlerCursorLeave = () => {
    setCursor(false);
  };

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
  }, [authService]);

  return (
    <section className={styles.background} onMouseMove={HandlerCursorMove}>
      <div className={styles.mainBox}>
        <div
          ref={divRef}
          className={`${styles.cursor}
        ${cursor === true ? styles.cursorOver : styles.cursorLeave}`}
        ></div>
        <Nav
          id={id}
          onLogout={onLogout}
          onMouseLeave={HandlerCursorLeave}
          onMouseOver={HandlerCursorOver}
        />
        <div className={styles.container}>
          {id === null ? (
            <Login
              onLogin={onLogin}
              onMouseLeave={HandlerCursorLeave}
              onMouseOver={HandlerCursorOver}
            />
          ) : (
            <CardMaker
              FileInput={FileInput}
              id={id}
              cardRepository={cardRepository}
              onMouseLeave={HandlerCursorLeave}
              onMouseOver={HandlerCursorOver}
            />
          )}
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default MainBoard;
