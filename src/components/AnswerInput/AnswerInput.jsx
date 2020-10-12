import React, { useState } from "react";

import styles from "./styles.scss";
import appStyles from "../../stylesheets/app.scss";
import Button from "../Button";
import TextBox from "../TextBox";

const AnswerInput = () => {
  const [answer, setAnswer] = useState("");

  const onAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div className={appStyles.box_container}>
      <h2>Your Answer</h2>
      <TextBox value={answer} onChange={onAnswerChange} fullwidth multiline />
      <Button className={styles.submit_button} size="large">
        Submit
      </Button>
    </div>
  );
};

export default AnswerInput;
