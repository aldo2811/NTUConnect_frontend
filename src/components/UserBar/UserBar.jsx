import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.scss";

import { parseDate } from "../../utils/helper";

const UserBar = ({ id, username, score, datePosted }) => {
  return (
    <div className={styles.user_bar}>
      <b>
        <Link to={`/user/${id}`}>{username}</Link>{" "}
        <span className={styles.detail}> • {score} points</span>
      </b>
      <div className={styles.detail}>posted on {parseDate(datePosted)}</div>
    </div>
  );
};

export default UserBar;
