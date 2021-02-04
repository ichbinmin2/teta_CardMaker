import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import "./common/reset.css";
import App from "./app";
import AuthService from "./service/auth.service";

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
