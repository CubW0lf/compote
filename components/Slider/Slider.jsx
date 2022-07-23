import { useEffect, useState } from "react";
import { getAll } from "../../services/directus/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import getAssetURL from "../../services/directus/getAssets";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";
import styles from "./Slider.module.css";

const Slider = () => {
  const [slides, setSlides] = useState(null);

  useEffect(() => {
    getAll("slide")
      .then((response) => setSlides(response))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={styles.container}>
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
              <Link href={s.url ? s.url : "/"}>
                <a>
                  <div className={styles.background}>
                    {s.title && <h2 dangerouslySetInnerHTML={{ __html: s.title }}></h2>}
                    {s.fimg && (
                      <Image
                        src={getAssetURL(s.fimg.id)}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center center"
                        priority="true"
                      />
                    )}
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slider;
