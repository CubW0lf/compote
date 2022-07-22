import Image from "next/image";
import styles from "./Reviews.module.css";
import pote from "../../public/assets/images/pote_review.png";
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
                  {s.name && <h2 dangerouslySetInnerHTML={{ __html: s.name }}></h2>}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
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