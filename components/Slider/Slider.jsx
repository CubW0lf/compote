import Image from "next/image";
import styles from "./Slider.module.css";
import pote from "../../public/assets/images/pote_web.png";
import prev from "../../public/assets/images/prev.png";
import next from "../../public/assets/images/next.png";

const Slider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pote}>
        <div className={styles.relative}>
          <Image src={pote} alt="Le petit pote de ComPote" />
        </div>
      </div>
      <nav className={styles.nav}>
        <div className={styles.prev}>
          <div className={styles.relative}>
            <Image src={prev} alt="" layout="fill" objectFit="contain" />
          </div>
        </div>
        <h1>Site en Construction</h1>

        <div className={styles.next}>
          <div className={styles.relative}>
            <Image src={next} alt="" layout="fill" objectFit="contain" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Slider;
