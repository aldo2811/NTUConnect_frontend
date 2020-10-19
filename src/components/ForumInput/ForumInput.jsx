import React, { useState } from "react";
import TextBox from "../TextBox";
import Button from "../Button";

import appStyles from "../../stylesheets/app.scss";
import styles from "../AnswerInput/styles.scss";

const ForumInput = ({ onSubmitClick }) => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseCode, setCourseCode] = useState("");

  const onCourseTitleChange = (e) => {
    setCourseTitle(e.target.value);
  };
  const onCourseCodeChange = (e) => {
    setCourseCode(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    onSubmitClick(courseTitle, courseCode);
  };

  return (
    <div className={appStyles.box_container}>
      <b>Course Title</b>
      <TextBox value={courseTitle} onChange={onCourseTitleChange} fullwidth />
      <b>Course Code</b>
      <TextBox value={courseCode} onChange={onCourseCodeChange} fullwidth />
      <Button className={styles.submit_button} size="large" onClick={onClick}>
        Submit
      </Button>
    </div>
  );
};

export default ForumInput;
