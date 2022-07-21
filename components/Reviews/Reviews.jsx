import Image from "next/image";
import styles from "./Reviews.module.css";
import background from "../../public/assets/images/reviews.jpg";
import percent from "../../public/assets/images/percent.png";
import pote from "../../public/assets/images/pote_review.png";

const Reviews = () => {
  return (
    <div className={styles.container}>
      <div className={styles.reviews}>
        <h1>Des Avis</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, hic? Repellat asperiores debitis cupiditate,
          quam amet quisquam minus, sapiente provident saepe nobis at ad earum sunt eius, nesciunt facere qui?
        </p>
        <p>Machin truc</p>
        <div className={styles.bg}>
          <Image src={background} alt="" layout="fill" objectFit="contain" objectPosition="right" />
        </div>
        <div className={styles.absolute}>
          <div className={styles.pote}>
            <Image src={pote} alt="" layout="fill" objectFit="contain" objectPosition="left" />
          </div>
        </div>
      </div>
      <div className={styles.percent}>
        <ul>
          <li>
            <div className={styles.relative}>
              <Image src={percent} alt="" layout="fill" objectFit="contain" />
            </div>
            de conseils
          </li>
          <li>
            <div className={styles.relative}>
              <Image src={percent} alt="" layout="fill" objectFit="contain" />
            </div>
            d&apos;échanges
          </li>
          <li>
            <div className={styles.relative}>
              <Image src={percent} alt="" layout="fill" objectFit="contain" />
            </div>
            de communications
          </li>
          <li>
            <div className={styles.relative}>
              <Image src={percent} alt="" layout="fill" objectFit="contain" />
            </div>
            d&apos;humain
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
