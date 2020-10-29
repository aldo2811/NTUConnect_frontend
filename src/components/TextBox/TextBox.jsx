import React from "react";
import cx from "classnames";

import styles from "./styles.scss";

const TextBox = ({
  type = "text",
  value,
  onChange,
  onKeyDown,
  className,
  fullwidth,
  multiline,
  ...rest
}) => {
  const classname = cx(
    {
      [styles.text_box]: true,
      [styles.multiline]: multiline,
      [styles.fullwidth]: fullwidth,
    },
    className
  );

  if (multiline) {
    return (
      <textarea
        className={classname}
        onChange={onChange}
        value={value}
        {...rest}
      />
    );
  }

  return (
    <input
      className={classname}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...rest}
    />
  );
};

export default TextBox;
