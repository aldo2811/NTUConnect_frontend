import React from "react";

import styles from "./styles.scss";
import TextBox from "../TextBox";

const TopBar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.content}>
        <h2>NTUConnect</h2>
        <TextBox className={styles.search_bar} placeholder="Search" fullwidth />
        <p>Profile</p>
      </div>
    </div>
  );
};

export default TopBar;
