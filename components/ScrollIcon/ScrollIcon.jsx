import Image from "next/image";
import styles from "./ScrollIcon.module.css";
import scroll from "../../public/assets/images/Scroll.png";

const ScrollIcon = () => {
  return (
    <div className={styles.container}>
      <a href="#a-propos">
        <Image src={scroll} alt="" layout="fill" objectFit="contain" />
      </a>
    </div>
  );
};

export default ScrollIcon;
