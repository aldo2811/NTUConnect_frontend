import React, { useState } from "react";
import TextBox from "../TextBox";
import Button from "../Button";

import appStyles from "../../stylesheets/app.scss";
import styles from "../AnswerInput/styles.scss";

const QuestionInput = () => {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onCourseChange = (e) => {
    setCourse(e.target.value);
  };
  const onBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <div className={appStyles.box_container}>
      <b>Title</b>
      <TextBox value={title} onChange={onTitleChange} fullwidth />
      <b>Course</b>
      <TextBox value={course} onChange={onCourseChange} fullwidth />
      <b>Body</b>
      <TextBox value={body} onChange={onBodyChange} fullwidth multiline />
      <Button className={styles.submit_button} size="large">
        Submit
      </Button>
    </div>
  );
};

export default QuestionInput;
