import React from "react";

import UserBar from "../UserBar";
import InteractionBar from "../InteractionBar";
import VoteBar from "../InteractionBar/VoteBar";

import appStyles from "../../stylesheets/app.scss";

const AnswerBar = ({ id, name, datePosted, content, votes }) => {
  if (!id) return null;

  return (
    <div className={appStyles.box_container}>
      <UserBar name={name} datePosted={datePosted} />
      <p>{content}</p>
      <InteractionBar>
        <VoteBar votes={votes} userVote={1} />
      </InteractionBar>
    </div>
  );
};

export default AnswerBar;
