import React from "react";
import classNames from "classnames";

import styles from "./CardImage.module.css";

interface ICardImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

export const CardImage: React.FC<ICardImageProps> = ({ ...props }) => {
  return (
    <img {...props} className={classNames(styles.CardImage, props.className)} />
  );
};
