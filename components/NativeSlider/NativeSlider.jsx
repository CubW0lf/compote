import styles from "../styles/NativeSlider.module.css";

const NativeSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(null);

  /* On déclare les constantes utiles au Slider */
  const slideDuration = 3000;

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
      >
        {slides &&
          slides.map((s) => (
            <div className={styles.slide} key={s.id}>
              {slides}
            </div>
          ))}
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
