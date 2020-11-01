import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.scss";
import { parseDate } from "../../utils/helper";

const ReplyBox = ({ id, creator, datePosted, content }) => {
  if (!id) return null;

  return (
    <div className={styles.container}>
      <p>
        {content.split("\n").map((item, key) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={key}>
              {item}
              <br />
            </Fragment>
          );
        })}
      </p>
      <div>
        — by <Link to={`/user/${id}`}>{creator.username}</Link>{" "}
        <span className={styles.detail}>{parseDate(datePosted)}</span>
      </div>
    </div>
  );
};

export default ReplyBox;
