import styles from "./Circle.module.css";

const Circle = ({ deg }) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.quarter} style={{ transform: `rotate(${deg}deg)` }}></div>
      <div className={styles.percent}>
        <span className="font">25%</span>
      </div>
    </div>
  );
};

export default Circle;
