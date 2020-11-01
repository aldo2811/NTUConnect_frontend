import React, { Fragment } from "react";
import cx from "classnames";

import styles from "./styles.scss";
import Button from "../Button";

const Modal = ({ title, onClose, children }) => {
  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.modal_container}>
        <div className={styles.modal}>
          {title && (
            <h1
              className={cx({ [styles.content]: true, [styles.title]: true })}
            >
              {title}
            </h1>
          )}
          <div className={cx({ [styles.content]: true, [styles.child]: true })}>
            {children &&
              children.split("\n").map((item, key) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <Fragment key={key}>
                    {item}
                    <br />
                  </Fragment>
                );
              })}
          </div>
          <Button className={styles.content} size="large" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </>
  );
};

export default Modal;
