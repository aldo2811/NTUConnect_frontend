import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import ThreadBox from "../../../components/ThreadBox";

import appStyles from "../../../stylesheets/app.scss";

import {
  selectThreadsJS,
  selectThreadsLoadingJS,
} from "../../../selectors/threads.selector";

import * as threadActions from "../../../actions/threads.action";
import * as sidebarActions from "../../../actions/sidebar.action";

const SearchPage = ({
  allThreads,
  threadLoading,
  searchThreads,
  resetThread,
  setSidebar,
}) => {
  const searchQuery = useLocation().search;
  const parsedSearch = queryString.parse(searchQuery);
  const keyword = parsedSearch.q;
  const encodedKeyword = encodeURIComponent(keyword);

  useEffect(() => {
    searchThreads(encodedKeyword);
    setSidebar("home");

    return () => resetThread();
  }, [searchQuery]);

  if (threadLoading) return null;
  return (
    <div className={appStyles.content_section}>
      <h1 className={appStyles.heading}>Search Results</h1>
      <p className={appStyles.subheading}>
        Showing search results for {`"${keyword}"`}
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
  searchThreads: threadActions.searchThreads,
  resetThread: threadActions.reset,
  setSidebar: sidebarActions.setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
