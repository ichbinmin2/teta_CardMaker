import React, { memo, useRef, useState } from "react";
import styles from "../image_input/image_input.module.css";

const ImageInput = memo(
  ({ imageUploader, name, onFileChange, onMouseLeave, onMouseOver }) => {
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const onButtonClick = (event) => {
      event.preventDefault();
      inputRef.current.click();
    };

    const onChange = async (event) => {
      setLoading(true);
      const uploaded = await imageUploader.imageUpload(event.target.files[0]);
      setLoading(false);
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
        {!loading && (
          <button
            className={`${styles.btn} ${name ? styles.pink : styles.grey}`}
            onClick={onButtonClick}
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
          >
            {name || "No File"}
          </button>
        )}

        {loading && <div className={styles.loading}></div>}
      </div>
    );
  }
);

export default ImageInput;
