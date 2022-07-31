import Circle from "../UI/Circle/Circle";
import styles from "./Percent.module.css";

const Percent = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.percent}>
        <li>
          <Circle deg={0} />
          <span>Conseils</span>
        </li>
        <li>
          <Circle deg={90} />
          <span>Technique</span>
        </li>
        <li>
          <Circle deg={180} />
          <span>Comm&apos;</span>
        </li>
        <li>
          <Circle deg={270} />
          <span>Humain</span>
        </li>
      </ul>
      <div className={styles.hundredContainer}>
        <div className={styles.hundredCircle}></div>
        <div className={styles.hundredText}>
          <span className="font">100%</span>
          <span className="font">Com&apos; Pote</span>
        </div>
      </div>
    </div>
  );
};

export default Percent;
