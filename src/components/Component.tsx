import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component.module.css";

export type ComponentType = {
  image?: string;
  painting?: string;
  precisionPaintingServiceT?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
};

const Component: FunctionComponent<ComponentType> = ({
  image,
  painting,
  precisionPaintingServiceT,
  propHeight,
  propWidth,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const paintingStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.div} style={divStyle}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.iconLibrary}>
        <div className={styles.shapeMaker}>
          <h2 className={styles.painting} style={paintingStyle}>
            {painting}
          </h2>
          <h3 className={styles.precisionPaintingService}>
            {precisionPaintingServiceT}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Component;
