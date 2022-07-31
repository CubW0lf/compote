import { FaCircle } from "react-icons/fa";
import styles from "./Checkbox.module.css";

const Checkbox = ({ label, id }) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>
        {label}{" "}
        <div className={styles.switch}>
          <FaCircle />
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
