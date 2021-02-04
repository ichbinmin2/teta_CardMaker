import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainLogin from "./pages/mainLogin";
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/login">
          <MainLogin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
