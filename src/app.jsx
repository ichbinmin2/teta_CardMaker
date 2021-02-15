import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainBoard from "./pages/mainBoard";
import Main from "./pages/main";

function App({ FileInput, authService, cardRepository }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/board">
          <MainBoard
            authService={authService}
            FileInput={FileInput}
            cardRepository={cardRepository}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
