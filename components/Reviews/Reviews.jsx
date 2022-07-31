import Image from "next/image";
import styles from "./Reviews.module.css";
import pote from "../../public/assets/images/potes/pote_review.png";
import Circle from "../UI/Circle/Circle";
import quote from "../../public/assets/images/quote.png";
import NativeSlider from "../UI/NativeSlider/NativeSlider";

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.container}>
      <div className={styles.reviewsWrapper}>
        <div className={styles.quote}>
          <Image src={quote} alt="" layout="fill" objectFit="contain" />
        </div>
        <h1>Les avis de nos clients</h1>
        <div className={styles.reviews}>
          <NativeSlider slides={reviews} duration={5000}>
            {reviews &&
              reviews.map((r) => (
                <div className={styles.slide} key={r.id}>
                  <div className={styles.reviewText} dangerouslySetInnerHTML={{ __html: r.text }}></div>
                  <div className={styles.name}>{r.name}</div>
                </div>
              ))}
          </NativeSlider>
          <div className={styles.absolute}>
            <div className={styles.pote}>
              <Image src={pote} alt="" layout="fill" objectFit="contain" objectPosition="left" placeholder="blur" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.percent}>
        <ul>
          <li>
            <Circle deg={0} />
            <span>de conseils</span>
          </li>
          <li>
            <Circle deg={90} />
            <span>de connaissances</span>
          </li>
          <li>
            <Circle deg={180} />
            <span>de communications</span>
          </li>
          <li>
            <Circle deg={270} />
            <span>d&apos;humain</span>
          </li>
        </ul>
      </div>
      <div className={styles.hundredContainer}>
        <div className={styles.hundredCircle}></div>
        <div className={styles.percentCircle}>
          <span className="font">100%</span>
          <span className="font">Com&apos; Pote</span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
