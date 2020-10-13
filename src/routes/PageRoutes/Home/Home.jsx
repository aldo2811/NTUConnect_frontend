import React from "react";

import ThreadBox from "../../../components/ThreadBox";

import appStyles from "../../../stylesheets/app.scss";

const Home = () => {
  const mockDiscussions = [
    {
      id: 1,
      name: "A",
      datePosted: "12/10 22:10",
      title: "Discussion 1",
      courseCode: "CZ3002",
      answered: true,
      comments: 100,
      votes: 200,
    },
    {
      id: 2,
      name: "B",
      datePosted: "12/10 22:15",
      title: "Discussion 2",
      courseCode: "CZ3002",
      answered: false,
      comments: 200,
      votes: 300,
    },
    {
      id: 3,
      name: "C",
      datePosted: "12/10 22:20",
      title: "Discussion 3",
      courseCode: "CZ3002",
      answered: true,
      comments: 10,
      votes: 50,
    },
  ];

  return (
    <div className={appStyles.content_section}>
      <h1 className={appStyles.heading}>All Discussions</h1>
      <p className={appStyles.subheading}>
        All discussions in courses which you joined
      </p>
      {mockDiscussions.map((discussion) => {
        return <ThreadBox key={discussion.id} {...discussion} />;
      })}
    </div>
  );
};

export default Home;
