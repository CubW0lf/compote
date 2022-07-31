import { useState, useEffect, useCallback, useRef } from "react";

/* TODO refacto, paramétrage, et feedback visuel du grab utilisateur */

const useSlider = () => {
  /* On déclare les constantes utiles au Slider */
  const slidesContainer = useRef(null);
  /* on stocke l'interval dans une ref pour y acceder dans les useEffect et a l'exterieur */
  const interval = useRef(null);

  /* State du Slider */
  const [slides, setSlides] = useState([]);
  const [slideDuration, setSlideDuration] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [autoPlay, toggleAutoPlay] = useState(false);

  /* State pour drag and drop */
  const [initialPos, setInitialPos] = useState(0);
  const [finalPos, setFinalPos] = useState(null);
  const [isGrabbing, toggleGrabbing] = useState(false);

  /* state pour touchevent */
  const [initialTouch, setInitialTouch] = useState(0);
  const [finalTouch, setFinalTouch] = useState(0);

  /**
   * [dragStart s'execute lorsque l'utilisateur clique sur le slider. ]
   *
   * @param   {[MouseEventInit]}  e  [l'évenement de click]
   *
   */
  const dragStart = (e) => {
    e.preventDefault();
    setInitialPos(e.clientX);
    toggleGrabbing(true);
  };

  /**
   * [touchStart s'execute lorsque l'utilisateur clique sur le slider sur mobile. ]
   *
   * @param   {[TouchEventInit]}  e  [l'évenement de Début de Toucher]
   *
   */
  const touchStart = (e) => {
    setInitialTouch(e.targetTouches[0].clientX);
  };

  /**
   * [touchMove s'execute tant que l'utilisateur bouge son doigt]
   *
   * @param   {[TouchEvent]}  e  [e l'évènement de toucher courant]
   *
   */
  const touchMove = (e) => {
    if (initialTouch !== null) {
      setFinalTouch(e.targetTouches[0].clientX);
    }
  };

  /**
   * [touchEnd s'execute quand l'utilisateur s'arrête de toucher l'écran]
   *
   * @param   {[touchEnd]}  e  [e Fin de l'évènement de toucher]
   *
   */
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

  /**
   * [handleMouseMove s'execute tant que l'utilisateur bouge sa souris sur le slider]
   *
   * @param   {[MouseEvent]}  e  [e évènement de déplacement de la souris]
   *
   */
  const handleMouseMove = (e) => {
    e.preventDefault();
    if (initialPos !== null) {
      setFinalPos(e.clientX);
    }
  };

  /**
   * [moveSlides Décide en fonction du mouvement l'utilisateur de définir la slide courrante a droite, a gauche ou actuelle]
   *
   * @param   {[Number]}  direction  [direction est un nombre 1 pour droite, -1 pour gauche, 0 pour aucun]
   *
   */
  const moveSlides = (direction) => {
    if (direction === -1 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (direction === 1 && currentSlide < slides.length) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(currentSlide);
    }
  };

  /**
   * [dragEnd définit la fonction moveSlides avec 1, -1, ou 0 selon les mouvement de l'utilisateur]
   *
   */
  const dragEnd = () => {
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

  /**
   * [slideAgain Reprend la lecture lorsque la souris sort du slider (arrété au préalable au hover)]
   *
   * @return  {[clearTimeout]}  [Clear le timeout en fonction de l'état du composant]
   */
  const slideAgain = () => {
    if (autoPlay) {
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
    }
  };

  /* useEffect d'autoplay du slide */
  useEffect(() => {
    if (autoPlay) {
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
    }
  }, [currentSlide, slides.length, autoPlay, slideDuration]);

  /**
   * [handleClick description]
   *
   * @param   {[Number]}  id  [id est la slide choisi par l'utilisateur sur la pagination]
   *
   */
  const handleClick = useCallback((id) => {
    setCurrentSlide(id);
  }, []);

  /* style en fonction de la slide courante */
  useEffect(() => {
    setCurrentStyle({ transform: `translateX(-${(100 / slides.length) * currentSlide}%)` });
  }, [currentSlide, slides.length]);

  return {
    dragStart,
    handleMouseMove,
    dragEnd,
    touchStart,
    touchMove,
    touchEnd,
    slideAgain,
    handleClick,
    currentStyle,
    isGrabbing,
    slidesContainer,
    currentSlide,
    interval,
    setSlides,
    setSlideDuration,
    toggleAutoPlay,
  };
};

export default useSlider;
