import React from "react";
import styles from "./styles.scss";

export default ({
  address = "https://patrick-lai.herokuapp.com/",
  children
}) => (
  <div className={styles["browser-wrapper"]}>
    <div className={styles["browser-navigation-bar"]}>
      <i />
      <i />
      <i />
      <input value={address} disabled />
    </div>

    <div className={styles["browser-container"]}>{children}</div>
  </div>
);
