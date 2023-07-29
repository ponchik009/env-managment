import React from "react";
import classNames from "classnames";

import styles from "./CardAdditional.module.css";

interface ICardAdditionalProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardAdditional: React.FC<ICardAdditionalProps> = ({
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames(styles.CardAdditional, props.className)}
    >
      {props.children}
    </div>
  );
};
