import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.galleryInner}>
      <div className={styles.parent}>
        <div className={styles.div}>
          <div className={styles.pictures}>
            <div className={styles.mediaAssets} />
          </div>
          <div className={styles.inner}>
            <div className={styles.titleParent}>
              <div className={styles.title}>Title</div>
              <div className={styles.somethingShortAnd}>
                Something short and simple here
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.div1}>
            <div className={styles.pictures1}>
              <div className={styles.div2} />
            </div>
            <div className={styles.child}>
              <div className={styles.titleGroup}>
                <div className={styles.title1}>Title</div>
                <div className={styles.somethingShortAnd1}>
                  Something short and simple here
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div3}>
          <div className={styles.pictures2}>
            <div className={styles.div4} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.titleContainer}>
              <div className={styles.title2}>Title</div>
              <div className={styles.somethingShortAnd2}>
                Something short and simple here
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
