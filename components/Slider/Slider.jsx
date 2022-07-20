import Image from "next/image";
import styles from "./Slider.module.css";
import pote from "../../public/assets/images/pote.png";

const Slider = () => {
  return (
    <div className={styles.container}>
      <span>
        <b>Site en Construction</b>
      </span>
      <div className={styles.pote}>
        <div className={styles.relative}>
          <Image src={pote} alt="Le petit pote de ComPote" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
