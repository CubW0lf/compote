import ScrollIcon from "../ScrollIcon/ScrollIcon";
import Slider from "../Slider/Slider";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      <Slider />
      <ScrollIcon />
    </div>
  );
};

export default Landing;
