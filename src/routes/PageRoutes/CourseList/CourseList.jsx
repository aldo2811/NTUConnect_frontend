import React, { useEffect } from "react";
import { connect } from "react-redux";

import ForumBox from "../../../components/ForumBox";

import {
  selectAllForumsJS,
  selectForumsErrorJS,
} from "../../../selectors/forums.selector";

import * as actions from "../../../actions/forums.action";

import appStyles from "../../../stylesheets/app.scss";

const CourseList = ({ allForums, getAll }) => {
  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className={appStyles.content_section}>
      <div>
        <h1 className={appStyles.heading}>All Courses</h1>
        <p className={appStyles.subheading}>All courses available</p>
      </div>
      {allForums &&
        allForums.map((course) => {
          const {
            id,
            courseTitle,
            courseCode,
            description,
            students,
            threads,
            joined,
          } = course;
          return (
            <ForumBox
              key={id}
              id={id}
              courseTitle={courseTitle}
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

const mapStateToProps = (state) => {
  const allForums = selectAllForumsJS(state);
  const error = selectForumsErrorJS(state);
  return { allForums, error };
};

const mapDispatchToProps = {
  getAll: actions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
