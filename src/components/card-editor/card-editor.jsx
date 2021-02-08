import React from "react";
import styles from "../card-editor/card-editor.module.css";

const CardEditor = (props) => {
  return (
    <section className={styles.editorBox}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul>
        <li>
          <table className={styles.writeTable}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <input type="text" placeholder="이름"></input>
              </td>
              <td className={styles.td}>
                <input type="text" placeholder="직장"></input>
              </td>
              <td className={styles.td}>
                <select>
                  <option>Dark</option>
                  <option>White</option>
                  <option>Colorful</option>
                </select>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <input type="text" placeholder="직업"></input>
              </td>
              <td className={styles.td} colspan="2">
                <input type="email" placeholder="이메일 주소"></input>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td} colspan="3">
                <textarea>메모</textarea>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <button>이름버튼</button>
              </td>
              <td className={styles.td}>
                <button>리셋버튼</button>
              </td>
            </tr>
          </table>
        </li>
      </ul>
    </section>
  );
};

export default CardEditor;
