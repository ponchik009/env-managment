import React from "react";

import styles from "./CardList.module.css";
import classNames from "classnames";

interface ICardListProps extends React.HTMLAttributes<HTMLUListElement> {}

export const CardList: React.FC<ICardListProps> = ({ ...props }) => {
  return (
    <ul {...props} className={classNames(styles.CardList, props.className)}>
      {props.children}
    </ul>
  );
};
