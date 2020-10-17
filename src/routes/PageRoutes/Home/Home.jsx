import React, { useEffect } from "react";
import { connect } from "react-redux";

import ThreadBox from "../../../components/ThreadBox";

import appStyles from "../../../stylesheets/app.scss";
import {
  selectThreadsErrorJS,
  selectThreadsJS,
} from "../../../selectors/threads.selector";
import * as actions from "../../../actions/threads.action";

const Home = ({ allThreads, getAll }) => {
  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className={appStyles.content_section}>
      <h1 className={appStyles.heading}>All Discussions</h1>
      <p className={appStyles.subheading}>
        All discussions in courses which you joined
      </p>
      {allThreads.map((discussion) => {
        return <ThreadBox key={discussion.id} {...discussion} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const allThreads = selectThreadsJS(state);
  const error = selectThreadsErrorJS(state);

  return { allThreads, error };
};

const mapDispatchToProps = {
  getAll: actions.getAll,
  reset: actions.reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
