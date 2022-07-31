import Image from "next/image";
import styles from "./Reviews.module.css";
import pote from "../../public/assets/images/potes/pote_review.png";
import quote from "../../public/assets/images/quote.png";
import dynamic from "next/dynamic";
const NativeSlider = dynamic(() => import("../UI/NativeSlider/NativeSlider"));
import Percent from "../Percent/Percent";

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
      <Percent />
    </div>
  );
};

export default Reviews;
