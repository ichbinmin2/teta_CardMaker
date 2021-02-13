import React, { useRef } from "react";
import styles from "../image_input/image_input.module.css";

const ImageInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  // const onChange = (event) => {
  //   console.log(event.target.files[0]);
  //   imageUploader.imageUpload(event.target.files[0]).then(console.log);
  // };
  // 비동기적(asyn/await)로도 할수 있다.

  const onChange = async (event) => {
    console.log(event.target.files[0]);
    const uploaded = await imageUploader.imageUpload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        className={styles.input}
        onChange={onChange}
      />
      <button className={styles.btn} onClick={onButtonClick}>
        {name || "No file"}
      </button>
    </div>
  );
};
export default ImageInput;
