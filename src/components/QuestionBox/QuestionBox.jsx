import React from "react";

import UserBar from "../UserBar";
import InteractionBar from "../InteractionBar";
import CourseCodeIcon from "../InteractionBar/CourseCodeIcon/CourseCodeIcon";

import appStyles from "../../stylesheets/app.scss";

const QuestionBox = ({
  id,
  username,
  score,
  datePosted,
  title,
  description,
  courseCode,
}) => {
  if (!id) return null;

  return (
    <div className={appStyles.box_container}>
      <UserBar username={username} score={score} datePosted={datePosted} />
      <h1>{title}</h1>
      <p>{description}</p>
      <InteractionBar>
        <CourseCodeIcon courseCode={courseCode} />
      </InteractionBar>
    </div>
  );
};

export default QuestionBox;
