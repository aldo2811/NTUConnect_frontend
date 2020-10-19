import React from "react";

import styles from "./styles.scss";

const UserBar = ({ username, score, datePosted }) => {
  const monthMap = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const parseDate = (dateTime) => {
    const datePattern = /\d{4}-\d{2}-\d{2}/;
    const timePattern = /\d{2}:\d{2}:\d{2}/;
    const date = dateTime.match(datePattern)[0];
    const time = dateTime.match(timePattern)[0];

    const [year, month, day] = date.split("-");
    const [hour, minute] = time.split(":");

    return `${day} ${monthMap[month]} ${year} • ${hour}:${minute}`;
  };

  return (
    <div className={styles.user_bar}>
      <div>
        <b>
          {username} <span className={styles.detail}> • {score} points</span>
        </b>
      </div>
      <div className={styles.detail}>posted on {parseDate(datePosted)}</div>
    </div>
  );
};

export default UserBar;
