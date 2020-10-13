import React from "react";
import cx from "classnames";

import UserBar from "../UserBar";
import InteractionBar from "../InteractionBar";
import VoteBar from "../InteractionBar/VoteBar";

import styles from "./styles.scss";
import appStyles from "../../stylesheets/app.scss";
import RoundedIcon from "../RoundedIcon";

const AnswerBox = ({
  id,
  name,
  datePosted,
  content,
  votes,
  verified,
  userVote,
}) => {
  if (!id) return null;

  return (
    <div
      className={cx({
        [styles.container]: true,
        [appStyles.box_container]: true,
      })}
    >
      {verified && (
        <div className={styles.verified_container}>
          <RoundedIcon
            className={styles.verified_icon}
            text="Verified Answer"
          />
        </div>
      )}

      <UserBar name={name} datePosted={datePosted} />
      <p>{content}</p>
      <InteractionBar>
        <VoteBar votes={votes} userVote={userVote} />
      </InteractionBar>
    </div>
  );
};

export default AnswerBox;
