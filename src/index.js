import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import "./common/reset.css";
import App from "./app";
import AuthService from "./service/auth.service";
import ImageUploader from "./service/image_uploader";
import ImageInput from "./components/image_input/image_input";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
