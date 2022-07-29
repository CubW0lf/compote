import ScrollIcon from "../ScrollIcon/ScrollIcon";
import styles from "./Landing.module.css";
import Slider from "../Slider/Slider";

const Landing = ({ slides }) => {
  return (
    <div className={styles.container}>
      <Slider slides={slides} />
      <ScrollIcon />
    </div>
  );
};

export default Landing;
