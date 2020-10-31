import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import ProfileBox from "../../../components/ProfileBox";
import ThreadBox from "../../../components/ThreadBox";
import ProfileAnswerBox from "../../../components/ProfileAnswerBox";
import Tabs from "../../../components/Tabs";

import styles from "./styles.scss";
import appStyles from "../../../stylesheets/app.scss";

import {
  selectUserLoadingJS,
  selectUserProfileJS,
} from "../../../selectors/user.selector";

import * as userActions from "../../../actions/user.action";
import * as sidebarActions from "../../../actions/sidebar.action";

const ProfilePage = ({ profile, userLoading, getDetail, setSidebar }) => {
  const { id } = useParams();

  useEffect(() => {
    getDetail(id);
    setSidebar("profile");
  }, [id]);

  const [tab, setTab] = useState("Threads");

  const onTabChange = (tabId) => {
    setTab(tabId);
  };

  if (userLoading) return null;

  const { username, messages, threads, score, type } = profile;
  return (
    <div className={appStyles.content_section}>
      <ProfileBox username={username} score={score} type={type} />
      <div className={appStyles.box_container}>
        <Tabs selected={tab} onTabChange={onTabChange}>
          <div className={styles.content_container} id="Threads">
            {threads.map((thread) => {
              return <ThreadBox key={thread.id} {...thread} />;
            })}
          </div>
          <div className={styles.content_container} id="Messages">
            {messages.map((answer) => {
              return <ProfileAnswerBox key={answer.id} {...answer} />;
            })}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const profile = selectUserProfileJS(state);
  const userLoading = selectUserLoadingJS(state);
  return { profile, userLoading };
};

const mapDispatchToProps = {
  getDetail: userActions.getDetail,
  resetUser: userActions.reset,
  setSidebar: sidebarActions.setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
