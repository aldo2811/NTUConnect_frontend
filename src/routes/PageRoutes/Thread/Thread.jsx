import React from "react";

import QuestionBox from "../../../components/QuestionBox";
import AnswerInput from "../../../components/AnswerInput";
import AnswerBox from "../../../components/AnswerBox";

import appStyles from "../../../stylesheets/app.scss";

const Thread = () => {
  const placeholderText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra lacus et varius tincidunt. Nam in aliquet felis, non consequat ex. Nunc tristique tincidunt consectetur. Aenean pulvinar condimentum dolor et vestibulum. Morbi rutrum purus commodo ligula accumsan, quis lacinia ligula auctor.";

  const mockQuestion = {
    id: 1,
    name: "Name 0",
    datePosted: "13/10 19:00",
    title: "Question Title",
    content: placeholderText,
    courseCode: "CZ3002",
    votes: 123,
    userVote: 0,
  };

  const mockAnswers = [
    {
      id: 1,
      name: "Name 1",
      datePosted: "13/10 19:10",
      content: placeholderText,
      votes: 100,
      verified: true,
      userVote: 1,
    },
    {
      id: 2,
      name: "Name 2",
      datePosted: "13/10 19:30",
      content: placeholderText,
      votes: 10,
      verified: false,
      userVote: -1,
    },
  ];

  return (
    <div className={appStyles.content_section}>
      <QuestionBox {...mockQuestion} />
      <AnswerInput />
      {mockAnswers.map((answer) => {
        return <AnswerBox key={answer.id} {...answer} />;
      })}
    </div>
  );
};

export default Thread;
