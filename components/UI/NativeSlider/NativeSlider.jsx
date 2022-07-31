import { useEffect } from "react";
import useSlider from "../../../hooks/useSlider";
import styles from "./NativeSlider.module.css";

const NativeSlider = ({ children, slides, duration = 3000 }) => {
  const {
    dragStart,
    handleMouseMove,
    dragEnd,
    touchStart,
    touchMove,
    touchEnd,
    slideAgain,
    handleClick,
    currentStyle,
    slidesContainer,
    currentSlide,
    interval,
    isGrabbing,
    setSlides,
    toggleAutoPlay,
    setSlideDuration,
  } = useSlider();

  useEffect(() => {
    setSlides(slides);
    toggleAutoPlay(true);
    setSlideDuration(duration);
  }, [setSlides, slides, toggleAutoPlay, setSlideDuration, duration]);

  return (
    <div className={styles.container} style={{ cursor: `${isGrabbing ? "grabbing" : "grab"}` }}>
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
        {children}
      </div>
      <div className={styles.pagination}>
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

export default NativeSlider;
