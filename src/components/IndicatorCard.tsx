import styles from "./IndicatorCard.module.scss";

const IndicatorCard = ({ children }) => {
  return <div className={styles["indicator-card-wrapper"]}>{children}</div>;
};

export default IndicatorCard;
