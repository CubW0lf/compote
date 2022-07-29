import getAssetURL from "../../services/directus/getAssets";
import Link from "next/link";
import Image from "next/image";
import styles from "./Slider.module.css";
import { shimmer, toBase64 } from "../../services/utils";
import { useCallback, useEffect, useRef, useState } from "react";

const Slider = ({ slides }) => {
  /* State du Slider */
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(null);

  /* State pour drag and drop */
  const [initialPos, setInitialPos] = useState(0);
  const [finalPos, setFinalPos] = useState(null);
  const [isGrabbing, toggleGrabbing] = useState(false);

  /* state pour touchevent */
  const [initialTouch, setInitialTouch] = useState(0);
  const [finalTouch, setFinalTouch] = useState(0);
  const slidesContainer = useRef(null);

  /* On déclare les constantes utiles au Slider */
  const slideDuration = 3000;
  const limit = 300;

  /* Fonction Drag and drop */
  const dragStart = (e) => {
    e.preventDefault();
    setInitialPos(e.clientX);
    toggleGrabbing(true);
  };

  const touchStart = (e) => {
    setInitialTouch(e.targetTouches[0].clientX);
  };

  const touchMove = (e) => {
    if (initialTouch !== null) {
      setFinalTouch(e.targetTouches[0].clientX);
    }
    console.log(finalTouch);
  };

  const touchEnd = (e) => {
    if (initialTouch - finalTouch > 0) {
      moveSlides(1);
    } else if (initialTouch - finalTouch < 0) {
      moveSlides(-1);
    } else {
      moveSlides(0);
    }

    setInitialTouch(0);
    setFinalTouch(0);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (initialPos !== null) {
      setFinalPos(e.clientX);
    }
  };

  const moveSlides = (direction) => {
    if (direction === -1 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (direction === 1 && currentSlide < slides.length) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(currentSlide);
    }
  };

  const dragEnd = () => {
    // setFinalPos(slidesContainer.current.offsetLeft);

    if (initialPos - finalPos > 0) {
      moveSlides(1);
    } else if (initialPos - finalPos < 0) {
      moveSlides(-1);
    } else {
      moveSlides(0);
    }

    setInitialPos(null);
    setFinalPos(null);
    toggleGrabbing(false);
  };

  /* on stocke l'interval dans une ref pour y acceder dans les useEffect et a l'exterieur */
  const interval = useRef(null);

  /* fonction pour reprendre la lecture lorsque la souris sort du slider (arrété au préalable au hover) */
  const slideAgain = () => {
    if (currentSlide < slides.length) {
      interval.current = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, slideDuration);
      return () => clearTimeout(interval.current);
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
    if (currentSlide < slides.length) {
      interval.current = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, slideDuration);
      return () => clearTimeout(interval.current);
    } else {
      setCurrentSlide(0);
      interval.current = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, slideDuration);
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
        onMouseDown={dragStart}
        onMouseMove={handleMouseMove}
        onMouseUp={dragEnd}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
        ref={slidesContainer}
      >
        {slides &&
          slides.map((s) => (
            <div className={styles.slide} key={s.id} style={{ cursor: `${isGrabbing ? "grabbing" : "grab"}` }}>
              <h2 dangerouslySetInnerHTML={{ __html: s.title }}></h2>
              <Image
                src={getAssetURL(s.fimg.id)}
                alt=""
                layout="fill"
                objectFit="cover"
                priority="true"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              />
              <div className={styles.pote}>
                <div className={styles.poteWrapper}>
                  <Image
                    src={getAssetURL(s.pote.id)}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    priority="true"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className={`${styles.pagination} not-mobile`}>
        {slides &&
          slides.map((s, index) => (
            <div
              className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ""}`}
              key={s.id}
              onClick={currentSlide === index ? null : () => handleClick(index)}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Slider;
