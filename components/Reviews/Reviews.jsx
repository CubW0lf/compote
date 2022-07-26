import Image from "next/image";
import styles from "./Reviews.module.css";
import pote from "../../public/assets/images/potes/pote_review.png";
import Circle from "../Circle/Circle";
import { useEffect, useState } from "react";
import { getAll } from "../../services/directus/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import quote from "../../public/assets/images/quote.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Reviews = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    getAll("review")
      .then((response) => setReviews(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.reviews}>
        <div className={styles.quote}>
          <Image src={quote} alt="" layout="fill" objectFit="contain" />
        </div>
        <h1>Les avis de nos clients</h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: "bullet",
            bulletActiveClass: "bullet-active",
            horizontalClass: "horizontal-pagination",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          className={styles.slider}
        >
          {reviews &&
            reviews?.map((s) => (
              <SwiperSlide key={s.id} className={styles.slide}>
                <div className={styles.background}>
                  <div dangerouslySetInnerHTML={{ __html: s.text && s.text }} className={styles.reviewText}></div>
                  {s.name && <span dangerouslySetInnerHTML={{ __html: s.name }} className={styles.name}></span>}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className={styles.absolute}>
          <div className={styles.pote}>
            <Image src={pote} alt="" layout="fill" objectFit="contain" objectPosition="left" placeholder="blur" />
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
          <span>100%</span>
          <span>Com&apos; Pote</span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
