import { useEffect, useState } from "react";
import styles from "./Tag.module.scss";
import cx from "classnames";

const Tag = ({ active = false, onClick = () => {}, children }) => {
  const [isActive, setIsActive] = useState(active);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick?.();
  };

  useEffect(() => {
    console.log(isActive, active);
  }, [active, isActive]);

  return (
    <div
      className={cx(styles["tag-wrapper"], isActive ? styles["active"] : "")}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Tag;
