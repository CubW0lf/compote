import Image from "next/image";
import styles from "./Reviews.module.css";
import background from "../../public/assets/images/reviews.jpg";
import percent from "../../public/assets/images/percent.png";
import pote from "../../public/assets/images/pote_review.png";
import Circle from "../Circle/Circle";

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
            <Circle deg={0} />
            de conseils
          </li>
          <li>
            <Circle deg={90} />
            de connaissances
          </li>
          <li>
            <Circle deg={180} />
            de communications
          </li>
          <li>
            <Circle deg={270} />
            d&apos;humain
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
