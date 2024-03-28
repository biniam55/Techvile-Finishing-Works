import { FunctionComponent } from "react";
import styles from "./PhioneNumber.module.css";

const PhioneNumber: FunctionComponent = () => {
  return (
    <div className={styles.phioneNumber}>
      <div className={styles.phoneNumber}>Phone Number</div>
    </div>
  );
};

export default PhioneNumber;
