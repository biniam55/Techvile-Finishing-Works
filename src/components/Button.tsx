import { FunctionComponent } from "react";
import styles from "./Button.module.css";

const Button: FunctionComponent = () => {
  return (
    <div className={styles.button}>
      <b className={styles.submit}>Submit</b>
    </div>
  );
};

export default Button;
