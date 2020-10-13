import React from "react";

import ForumBox from "../../../components/ForumBox";

import appStyles from "../../../stylesheets/app.scss";

const CourseList = () => {
  const mockCourses = [
    {
      id: 1,
      courseName: "Advanced Computer Architecture",
      courseCode: "CZ3001",
      description: "Description",
      students: 100,
      threads: 100,
      joined: false,
    },
    {
      id: 2,
      courseName: "Advanced Software Engineering",
      courseCode: "CZ3002",
      description: "Description",
      students: 200,
      threads: 200,
      joined: true,
    },
    {
      id: 3,
      courseName: "Software System Analysis & Design",
      courseCode: "CZ3003",
      description: "Description",
      students: 300,
      threads: 300,
      joined: true,
    },
  ];

  return (
    <div className={appStyles.content_section}>
      <div>
        <h1 className={appStyles.heading}>All Discussions</h1>
        <p className={appStyles.subheading}>
          All discussions in courses which you joined
        </p>
      </div>
      {mockCourses.map((course) => {
        const {
          id,
          courseName,
          courseCode,
          description,
          students,
          threads,
          joined,
        } = course;
        return (
          <ForumBox
            id={id}
            courseName={courseName}
            courseCode={courseCode}
            description={description}
            students={students}
            threads={threads}
            joined={joined}
          />
        );
      })}
    </div>
  );
};

export default CourseList;
