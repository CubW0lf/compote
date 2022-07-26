import Image from "next/image";
import styles from "./ScrollIcon.module.css";
import scroll from "../../public/assets/images/Scroll.png";

const ScrollIcon = () => {
  return (
    <div className={styles.container}>
      <a href="#a-propos" alt="icone de scroll jusqu'à la prochaine section">
        <Image src={scroll} alt="" layout="fill" objectFit="contain" placeholder="blur" />
      </a>
    </div>
  );
};

export default ScrollIcon;
