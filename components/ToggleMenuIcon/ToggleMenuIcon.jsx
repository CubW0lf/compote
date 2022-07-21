import styles from "./ToggleMenuIcon.module.css";
import { useUxContext } from "../../contexts/uxContext";

const ToggleMenuIcon = () => {
  const { menuVisible, toggleMenuVisibility } = useUxContext();

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleMenuVisibility(!menuVisible);
    }
  };

  const handleClick = () => {
    toggleMenuVisibility(!menuVisible);
  };

  return (
    <a
      className={`${menuVisible ? styles.cross : styles.burger}`}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      tabIndex="0"
    >
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.line3}></div>
    </a>
  );
};

export default ToggleMenuIcon;
