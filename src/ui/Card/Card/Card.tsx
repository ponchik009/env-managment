import React from "react";
import classNames from "classnames";

import styles from "./Card.module.css";

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<ICardProps> = ({ ...props }) => {
  return (
    <div {...props} className={classNames(styles.Card, props.className)}>
      {props.children}
    </div>
  );
};
