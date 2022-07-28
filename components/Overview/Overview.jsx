import styles from "./Overview.module.css";
import mockup from "../../public/assets/images/about.png";
import Image from "next/image";

const Overview = ({ page }) => {
  return (
    <div className={styles.container} id="a-propos">
      <div className={styles.mockup}>
        <Image src={mockup} alt="" layout="fill" objectFit="contain" placeholder="blur" />
      </div>
      <div className={styles.text}>
        <h1>{page && page.title}</h1>
        {page && <div dangerouslySetInnerHTML={{ __html: page.text }}></div>}
      </div>
    </div>
  );
};

export default Overview;
