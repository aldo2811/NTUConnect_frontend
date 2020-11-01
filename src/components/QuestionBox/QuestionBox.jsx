import React, { Fragment } from "react";

import UserBar from "../UserBar";
import InteractionBar from "../InteractionBar";
import CourseCodeIcon from "../InteractionBar/CourseCodeIcon/CourseCodeIcon";

import appStyles from "../../stylesheets/app.scss";

const QuestionBox = ({
  id,
  creator,
  datePosted,
  title,
  description,
  forum: { courseCode },
}) => {
  if (!id) return null;

  return (
    <div className={appStyles.box_container}>
      <UserBar datePosted={datePosted} {...creator} />
      <h1>{title}</h1>
      <p>
        {description &&
          description.split("\n").map((item, key) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={key}>
                {item}
                <br />
              </Fragment>
            );
          })}
      </p>
      <InteractionBar>
        <CourseCodeIcon courseCode={courseCode} />
      </InteractionBar>
    </div>
  );
};

export default QuestionBox;
