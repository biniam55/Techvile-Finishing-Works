import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className={styles.buttonParent}>
      <div className={styles.button}>
        <div className={styles.loginNow}>Create account</div>
      </div>
      <div className={styles.button1}>
        <img
          className={styles.icongoogleOriginal}
          alt=""
          src="/icongoogle--original.svg"
        />
        <div className={styles.loginNow1}>Continue with Google</div>
      </div>
      <div className={styles.alreadyHaveAnAccountParent}>
        <div className={styles.alreadyHaveAn}>Already have an account ?</div>
        <div className={styles.logIn}>Log in</div>
      </div>
    </div>
  );
};

export default FrameComponent4;
