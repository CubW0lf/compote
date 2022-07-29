import ScrollIcon from "../ScrollIcon/ScrollIcon";
// import dynamic from "next/dynamic";
// const Slider = dynamic(() => import("../Slider/Slider"), { ssr: false });
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
