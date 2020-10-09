import React from "react";

import styles from "./styles.scss";

const InteractionBar = ({ children }) => {
  return <div className={styles.interaction_bar}>{children}</div>;
};

export default InteractionBar;
