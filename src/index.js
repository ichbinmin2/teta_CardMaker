import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import "./common/reset.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageInput from "./components/image_input/image_input";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
