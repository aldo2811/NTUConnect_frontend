import React from "react";

import UserBar from "../UserBar";
import InteractionBar from "../InteractionBar";
import VoteBar from "../InteractionBar/VoteBar";
import CourseCodeIcon from "../InteractionBar/CourseCodeIcon/CourseCodeIcon";

import appStyles from "../../stylesheets/app.scss";

const QuestionBox = ({
  id,
  name,
  datePosted,
  title,
  content,
  courseCode,
  votes,
  userVote,
}) => {
  if (!id) return null;

  return (
    <div className={appStyles.box_container}>
      <UserBar name={name} datePosted={datePosted} />
      <h1>{title}</h1>
      <p>{content}</p>
      <InteractionBar>
        <CourseCodeIcon courseCode={courseCode} />
        <VoteBar votes={votes} userVote={userVote} />
      </InteractionBar>
    </div>
  );
};

export default QuestionBox;
