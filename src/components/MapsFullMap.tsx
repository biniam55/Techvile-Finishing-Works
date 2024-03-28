import { FunctionComponent } from "react";
import styles from "./MapsFullMap.module.css";

const MapsFullMap: FunctionComponent = () => {
  return (
    <div className={styles.mapsFullMap}>
      <img
        className={styles.mapsZoomLevels2City}
        alt=""
        src="/maps--zoom-levels--2-city@2x.png"
      />
      <div className={styles.formFlow}>
        <img
          className={styles.controlsGoogleLogoColor}
          loading="lazy"
          alt=""
          src="/controls--google-logo--color.svg"
        />
        <div className={styles.controlsGoogleMapsByline}>
          <div className={styles.colorCanvas}>
            <div className={styles.colorCanvasChild} />
            <div className={styles.mapData2019}>Map data @2019 Google</div>
          </div>
          <div className={styles.colorCanvas1}>
            <div className={styles.colorCanvasItem} />
            <div className={styles.termsOfUse}>Terms of Use</div>
          </div>
          <div className={styles.colorCanvas2}>
            <div className={styles.colorCanvasInner} />
            <div className={styles.reportAMap}>Report a map error</div>
          </div>
        </div>
      </div>
      <div className={styles.alignAssistant}>
        <div className={styles.controlsMapType}>
          <div className={styles.eraser} />
          <div className={styles.blender}>
            <div className={styles.map}>Map</div>
          </div>
          <div className={styles.penPalette} />
          <div className={styles.blender1}>
            <div className={styles.satellite}>Satellite</div>
          </div>
        </div>
        <div className={styles.controls}>
          <img
            className={styles.controlsZoomControls}
            loading="lazy"
            alt=""
            src="/controls--zoom-controls@2x.png"
          />
          <div className={styles.controlsStreetView}>
            <div className={styles.distributionDispenser} />
            <img
              className={styles.pegmanOffscreen2xIcon}
              alt=""
              src="/pegmanoffscreen2x@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapsFullMap;
