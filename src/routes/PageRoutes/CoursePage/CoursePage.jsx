import React from "react";
import cx from "classnames";
import { useLocation, Link } from "react-router-dom";

import ThreadBox from "../../../components/ThreadBox";
import Button from "../../../components/Button";

import styles from "./styles.scss";
import appStyles from "../../../stylesheets/app.scss";

const CoursePage = ({
  match: {
    params: { course },
  },
}) => {
  const currentUrl = useLocation().pathname;

  const mockDiscussions = [
    {
      id: 1,
      name: "A",
      datePosted: "12/10 22:10",
      title: "Discussion 1",
      courseCode: "CZ3002",
      answered: true,
      comments: 100,
      upvote: 200,
    },
    {
      id: 2,
      name: "B",
      datePosted: "12/10 22:15",
      title: "Discussion 2",
      courseCode: "CZ3002",
      answered: false,
      comments: 200,
      upvote: 300,
    },
    {
      id: 3,
      name: "C",
      datePosted: "12/10 22:20",
      title: "Discussion 3",
      courseCode: "CZ3002",
      answered: true,
      comments: 10,
      upvote: 50,
    },
  ];

  return (
    <div
      className={cx({
        [appStyles.content_section]: true,
        [styles.container]: true,
      })}
    >
      <Link to={`${currentUrl}/new`}>
        <Button className={styles.button_ask} size="large">
          Ask Question
        </Button>
      </Link>
      <h1 className={appStyles.heading}>{course} Discussions</h1>
      <p className={appStyles.subheading}>All {course} discussions</p>
      {mockDiscussions.map((discussion) => {
        return <ThreadBox key={discussion.id} {...discussion} />;
      })}
    </div>
  );
};

export default CoursePage;
