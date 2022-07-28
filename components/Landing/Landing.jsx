import ScrollIcon from "../ScrollIcon/ScrollIcon";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("../Slider/Slider"), { ssr: false });
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
