import React from "react";

import styles from "./styles.scss";

const UserBar = ({ username, datePosted }) => {
  return (
    <div className={styles.user_bar}>
      <div>
        <b>{username}</b>
      </div>
      <div className={styles.date_posted}>posted on {datePosted}</div>
    </div>
  );
};

export default UserBar;
