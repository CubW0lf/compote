import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { getAll } from "../../services/directus/utils";
import getAssetURL from "../../services/directus/getAssets";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./Swiper.module.css";
import Image from "next/image";

const Slider = () => {
  const [slides, setSlides] = useState(null);

  useEffect(() => {
    getAll("slide")
      .then((response) => setSlides(response))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        className={styles.slider}
      >
        {slides &&
          slides?.map((s) => (
            <SwiperSlide key={s.id} className={styles.slide}>
              <Link href={s.url}>
                <a>
                  <div className={styles.background}>
                    <h2 dangerouslySetInnerHTML={{ __html: s.title }}></h2>
                    <Image
                      src={getAssetURL(s.fimg.id)}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center center"
                    />
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Slider;
