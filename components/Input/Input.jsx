import { forwardRef } from "react";
import styles from "./Input.module.css";
import { GrCheckmark } from "react-icons/gr";

const Input = forwardRef(({ error, dirty, label, id, type = "text", ...rest }, ref) => {
  let component;

  Input.displayName = "Input";

  // if you won't use textarea, you can delete this part
  if (type === "textarea") {
    component = <textarea aria-invalid={!!error} className={styles.textarea} id={id} name={id} ref={ref} {...rest} />;
  }

  // if you won't use checkbox, you can delete this part and the classes checkbox, checkboxContainer and checkboxLabel
  if (type === "checkbox") {
    component = (
      <div className={styles.checkboxContainer}>
        <input aria-invalid={!!error} className="" id={id} name={id} type="checkbox" {...rest} />
        <span className={styles.checkboxLabel} />
      </div>
    );
  }

  // if you won't use input, you can delete this part
  if (type !== "checkbox" && type !== "textarea") {
    component = <input aria-invalid={!!error} className="" id={id} name={id} type={type} ref={ref} {...rest} />;
    return (
      <div className={styles.inputContainer}>
        {component}
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        {error && <p className="error">{error.message}</p>}
        {dirty && !error && <GrCheckmark className={styles.mark} />}
      </div>
    );
  }

  return (
    <>
      {component}
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {error && <p className="error">{error.message}</p>}
      {dirty && !error && <GrCheckmark className={styles.mark} />}
    </>
  );
});

export default Input;
