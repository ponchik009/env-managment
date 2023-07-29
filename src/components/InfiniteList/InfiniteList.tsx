import React from "react";
import classNames from "classnames";

import styles from "./InfiniteList.module.css";

import { CardList } from "ui";

interface IInfiniteListProps extends React.HTMLAttributes<HTMLDivElement> {
  callback: () => void;
  loading?: boolean;
}

export const InfiniteList: React.FC<IInfiniteListProps> = ({
  callback,
  loading = false,
  ...props
}) => {
  const onDownDivScroll = React.useCallback(
    function (entries: IntersectionObserverEntry[]) {
      if (entries[0].isIntersecting) {
        callback();
      }
    },
    [callback]
  );

  const observer = React.useRef(new IntersectionObserver(onDownDivScroll));
  const downElementRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    if (downElementRef.current) {
      observer.current.observe(downElementRef.current);
    }
  }, [downElementRef.current]);

  return (
    <div
      {...props}
      className={classNames(styles.InfiniteList, props.className)}
    >
      {props.children}
      {loading && <div>Loading...</div>}
      {!loading && <div className={styles.Down} ref={downElementRef}></div>}
    </div>
  );
};
