import Image from "next/image";
import styles from "./Reviews.module.css";
import pote from "../../public/assets/images/potes/pote_review.png";
import Circle from "../Circle/Circle";
import quote from "../../public/assets/images/quote.png";
import { useState, useRef, useEffect, useCallback } from "react";

const Reviews = ({ reviews }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(null);

  /* on stocke l'interval dans une ref pour y acceder dans les useEffect et a l'exterieur */
  const interval = useRef(null);

  const slideDuration = 5000;

  /* fonction pour reprendre la lecture lorsque la souris sort du slider (arrété au préalable au hover) */
  const slideAgain = () => {
    if (currentSlide < reviews.length) {
      interval.current = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, slideDuration);
    } else {
      setCurrentSlide(0);
      interval.current = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, slideDuration);
      return () => clearTimeout(interval.current);
    }
  };

  /* useEffect d'autoplay du slide */
  useEffect(() => {
    if (currentSlide < reviews.length) {
      interval.current = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, slideDuration);
    } else {
      setCurrentSlide(0);
      interval.current = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, slideDuration);
      return () => clearTimeout(interval.current);
    }
  }, [currentSlide, reviews.length]);

  const handleClick = useCallback((id) => {
    setCurrentSlide(id);
  }, []);

  /* style en fonction de la slide courante */
  useEffect(() => {
    switch (currentSlide) {
      case 0:
        setCurrentStyle({ transform: "translateX(33.33333%)" });
        break;
      case 1:
        setCurrentStyle({ transform: "translateX(0)" });
        break;
      case 2:
        setCurrentStyle({ transform: "translateX(-33.33333%)" });
        break;
    }
  }, [currentSlide]);

  return (
    <div className={styles.container}>
      <div className={styles.quote}>
        <Image src={quote} alt="" layout="fill" objectFit="contain" />
      </div>
      <h1>Les avis de nos clients</h1>
      <div className={styles.reviewsWrapper}>
        <div className={styles.reviews}>
          <div
            className={styles.slider}
            style={currentStyle}
            onMouseOver={() => clearTimeout(interval.current)}
            onMouseLeave={slideAgain}
          >
            {reviews &&
              reviews.map((r) => (
                <div className={styles.slide} key={r.id}>
                  <div className={styles.reviewText} dangerouslySetInnerHTML={{ __html: r.text }}></div>
                  <div className={styles.name}>{r.name}</div>
                </div>
              ))}
          </div>
          <div className={styles.pagination}>
            {reviews &&
              reviews.map((s, index) => (
                <div
                  className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ""}`}
                  key={s.id}
                  onClick={() => handleClick(index)}
                ></div>
              ))}
          </div>
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
