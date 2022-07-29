import ScrollIcon from "../ScrollIcon/ScrollIcon";
import styles from "./Landing.module.css";
import Native from "../Native/Native";

const Landing = ({ slides }) => {
  return (
    <div className={styles.container}>
      <Native slides={slides} />
      <ScrollIcon />
    </div>
  );
};

export default Landing;
