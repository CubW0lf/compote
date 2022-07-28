import ScrollIcon from "../ScrollIcon/ScrollIcon";
import Slider from "../Slider/Slider";
import styles from "./Landing.module.css";

const Landing = ({ slides }) => {
  return (
    <div className={styles.container}>
      <Slider slides={slides} />
      <ScrollIcon />
    </div>
  );
};

export default Landing;
