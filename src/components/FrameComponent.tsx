import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.inputProcessor}>
        <div className={styles.outputFormatter}>
          <img
            className={styles.sequenceControllerIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className={styles.iterativeLoop}>
            <div className={styles.mergeFunction}>0956342521</div>
          </div>
          <div className={styles.dataComparisonWrapper}>
            <img
              className={styles.dataComparisonIcon}
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <div className={styles.functionCall}>
            <div className={styles.repeater}>
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dataFilter}>
        <div className={styles.dataTransformer}>
          <h1 className={styles.bookYourFree}>BOOK YOUR FREE CONSULTATION</h1>
        </div>
        <img
          className={styles.customFunctionIcon}
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
