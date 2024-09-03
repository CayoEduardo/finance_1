import { CSSProperties } from "react";
import styles from "./List.module.scss";

interface IList {
  style?: CSSProperties;
  children?: React.ReactNode;
}

const List = ({ style, children }: IList) => {
  return (
    <ul className={styles["list-wrapper"]} style={style}>
      {children}
    </ul>
  );
};

export default List;
