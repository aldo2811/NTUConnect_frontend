import React, { useEffect } from "react";
import { connect } from "react-redux";

import ThreadBox from "../../../components/ThreadBox";

import appStyles from "../../../stylesheets/app.scss";

import {
  selectThreadsJS,
  selectThreadsLoadingJS,
} from "../../../selectors/threads.selector";

import * as threadActions from "../../../actions/threads.action";
import * as sidebarActions from "../../../actions/sidebar.action";

const HomePage = ({
  allThreads,
  threadLoading,
  getAllThreads,
  resetThread,
  setSidebar,
}) => {
  useEffect(() => {
    setSidebar("home");
    getAllThreads();
    return () => resetThread();
  }, []);

  if (threadLoading) return null;
  return (
    <div className={appStyles.content_section}>
      <h1 className={appStyles.heading}>All Threads</h1>
      <p className={appStyles.subheading}>
        All threads in forums which you joined
      </p>
      {allThreads.map((thread) => {
        return <ThreadBox key={thread.id} {...thread} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const allThreads = selectThreadsJS(state);
  const threadLoading = selectThreadsLoadingJS(state);

  return {
    allThreads,
    threadLoading,
  };
};

const mapDispatchToProps = {
  getAllThreads: threadActions.getAll,
  resetThread: threadActions.reset,
  setSidebar: sidebarActions.setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
