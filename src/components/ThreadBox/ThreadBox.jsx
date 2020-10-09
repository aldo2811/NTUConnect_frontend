import React from "react";

import UserBar from "../UserBar";
import InteractionBar from "../InteractionBar";
import CourseCodeIcon from "../InteractionBar/CourseCodeIcon/CourseCodeIcon";
import AnsweredIcon from "../InteractionBar/AnsweredIcon";

import appStyles from "../../stylesheets/app.scss";

const ThreadBox = ({
  id,
  name,
  datePosted,
  title,
  courseCode,
  answered,
  votes,
  comments,
}) => {
  if (!id) return null;

  return (
    <div className={appStyles.box_container}>
      <UserBar name={name} datePosted={datePosted} />
      <h1>{title}</h1>
      <InteractionBar>
        <CourseCodeIcon courseCode={courseCode} />
        <AnsweredIcon answered={answered} />
        <div>{votes} votes</div>
        <div>{comments} comments</div>
      </InteractionBar>
    </div>
  );
};

export default ThreadBox;
