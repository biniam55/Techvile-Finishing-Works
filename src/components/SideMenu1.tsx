import { FunctionComponent } from "react";
import styles from "./SideMenu1.module.css";

const SideMenu1: FunctionComponent = () => {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.sideMenuChild} />
      <div className={styles.frameParent}>
        <div className={styles.setting1Wrapper}>
          <img className={styles.setting1Icon} alt="" src="/setting-1.svg" />
        </div>
        <h2 className={styles.dashboard}>Dashboard</h2>
        <div className={styles.v01Wrapper}>
          <div className={styles.v01}>v.01</div>
        </div>
      </div>
      <div className={styles.sideMenuInner}>
        <div className={styles.icon24OutlineKeySquaParent}>
          <img
            className={styles.icon24OutlineKeySqua}
            alt=""
            src="/icon--24--outline--keysquare.svg"
          />
          <div className={styles.dashboardWrapper}>
            <div className={styles.dashboard1}>Dashboard</div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
          <div className={styles.galleryWrapper}>
            <div className={styles.gallery}>Gallery</div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <img className={styles.frameIcon1} alt="" src="/frame.svg" />
            <div className={styles.galleryContainer}>
              <div className={styles.gallery1}>Gallery</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.ellipseParent}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/ellipse-8@2x.png"
          />
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.abebeWrapper}>
                <div className={styles.abebe}>Abebe</div>
              </div>
              <div className={styles.admin}>Admin</div>
            </div>
          </div>
        </div>
        <div className={styles.chevronDown2Wrapper}>
          <img
            className={styles.chevronDown2Icon}
            loading="lazy"
            alt=""
            src="/chevrondown-2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu1;
