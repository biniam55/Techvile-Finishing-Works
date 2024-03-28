import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  title?: string;
  context?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  title,
  context,
  propAlignSelf,
  propPosition,
  propTop,
  propLeft,
  propWidth,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
    };
  }, [propAlignSelf, propPosition, propTop, propLeft, propWidth]);

  return (
    <div className={styles.frameParent} style={frameDiv1Style}>
      <div className={styles.titleParent}>
        <div className={styles.title}>{title}</div>
        <div className={styles.forgot}>Forgot？</div>
      </div>
      <div className={styles.input}>
        <div className={styles.inputText}>
          <div className={styles.context}>{context}</div>
          <div className={styles.iconeyeWrapper}>
            <img className={styles.iconeye} alt="" src="/iconeye.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
