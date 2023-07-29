import React from "react";
import classNames from "classnames";

import styles from "./CardTitle.module.css";

interface ICardTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardTitle: React.FC<ICardTitleProps> = ({ ...props }) => {
  return (
    <div {...props} className={classNames(styles.CardTitle, props.className)}>
      {props.children}
    </div>
  );
};
