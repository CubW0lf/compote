import getAssetURL from "../../services/directus/getAssets";
import Link from "next/link";
import Image from "next/image";
import styles from "./Native.module.css";
import { shimmer, toBase64 } from "../../services/utils";
import { useCallback, useEffect, useRef, useState } from "react";

const Native = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(null);

  /* on stocke l'interval dans une ref pour y acceder dans les useEffect et a l'exterieur */
  const interval = useRef(null);

  /* fonction pour reprendre la lecture lorsque la souris sort du slider (arrété au préalable au hover) */
  const slideAgain = () => {
    if (currentSlide < slides.length) {
      interval.current = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, 3000);
    } else {
      setCurrentSlide(0);
      interval.current = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, 3000);
      return () => clearTimeout(interval.current);
    }
  };

  /* useEffect d'autoplay du slide */
  useEffect(() => {
    if (currentSlide < slides.length) {
      interval.current = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, 3000);
    } else {
      setCurrentSlide(0);
      interval.current = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, 3000);
      return () => clearTimeout(interval.current);
    }
  }, [currentSlide, slides.length]);

  const handleClick = useCallback((id) => {
    setCurrentSlide(id);
  }, []);

  /* style en fonction de la slide courante */
  useEffect(() => {
    switch (currentSlide) {
      case 0:
        setCurrentStyle({ transform: "translateX(0)" });
        break;
      case 1:
        setCurrentStyle({ transform: "translateX(-33.33333%)" });
        break;
      case 2:
        setCurrentStyle({ transform: "translateX(-66.66666%)" });
        break;
    }
  }, [currentSlide]);

  return (
    <div className={styles.container}>
      <div
        className={styles.slides}
        style={currentStyle}
        onMouseOver={() => clearTimeout(interval.current)}
        onMouseLeave={slideAgain}
      >
        {slides &&
          slides.map((s) => (
            <div className={styles.slide} key={s.id}>
              <Link href={s.url ? s.url : "/"}>
                <a>
                  <Image
                    src={getAssetURL(s.fimg.id)}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    priority="true"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                  />
                </a>
              </Link>
            </div>
          ))}
      </div>
      <div className={styles.pagination}>
        {slides &&
          slides.map((s, index) => (
            <div
              className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ""}`}
              key={s.id}
              onClick={() => handleClick(index)}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Native;
