import Image from "next/image";
import styles from "./Slider.module.css";
import pote from "../../public/assets/images/pote_web.png";
import Swiper from "../Swiper/Swiper";

const Slider = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.pote}>
        <div className={styles.relative}>
          <Image src={pote} alt="Le petit pote de ComPote" />
        </div>
      </div> */}
      <Swiper />
    </div>
  );
};

export default Slider;
