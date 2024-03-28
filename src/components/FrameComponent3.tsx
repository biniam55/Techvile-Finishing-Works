import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className={styles.galleryInner}>
      <div className={styles.frameParent}>
        <header className={styles.fynParent}>
          <h3 className={styles.fyn}>FYN</h3>
          <nav className={styles.frameGroup}>
            <div className={styles.homeWrapper}>
              <h3 className={styles.home}>HOME</h3>
            </div>
            <div className={styles.galleryWrapper}>
              <h3 className={styles.gallery}>GALLERY</h3>
            </div>
            <h3 className={styles.service}>SERVICE</h3>
            <h3 className={styles.testimonials}>TESTIMONIALS</h3>
          </nav>
        </header>
        <div className={styles.container}>
          <img
            className={styles.containerChild}
            loading="lazy"
            alt=""
            src="/rectangle-6@2x.png"
          />
          <h1 className={styles.galleryWeHaveContainer}>
            <p className={styles.gallery1}> Gallery</p>
            <p className={styles.weHaveSolutions}>
              We Have Solutions for All Your Space Related Issues!
            </p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
