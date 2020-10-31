import React from "react";

import styles from "./styles.scss";

import { parseDate } from "../../utils/helper";

const UserBar = ({ username, score, datePosted }) => {
  return (
    <div className={styles.user_bar}>
      <b>
        {username} <span className={styles.detail}> • {score} points</span>
      </b>
      <div className={styles.detail}>posted on {parseDate(datePosted)}</div>
    </div>
  );
};

export default UserBar;
