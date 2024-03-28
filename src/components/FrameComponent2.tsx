import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.galleryInner}>
      <div className={styles.frameParent}>
        <div className={styles.backgroundParent}>
          <div className={styles.background}>
            <div className={styles.pictures}>
              <div className={styles.div} />
              <div className={styles.picturesChild} />
            </div>
            <div className={styles.backgroundInner}>
              <div className={styles.titleParent}>
                <div className={styles.title}>Title</div>
                <div className={styles.somethingShortAnd}>
                  Something short and simple here
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div1}>
            <div className={styles.picturesParent}>
              <img
                className={styles.picturesIcon}
                loading="lazy"
                alt=""
                src="/pictures1@2x.png"
              />
              <div className={styles.div2} />
            </div>
            <div className={styles.inner}>
              <div className={styles.titleGroup}>
                <div className={styles.title1}>Title</div>
                <div className={styles.somethingShortAnd1}>
                  Something short and simple here
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subtitle}>
          <div className={styles.pictures1}>
            <div className={styles.pictures2}>
              <div className={styles.title2} />
              <div className={styles.picturesItem} />
            </div>
            <div className={styles.picturesInner}>
              <div className={styles.titleContainer}>
                <div className={styles.title3}>Title</div>
                <div className={styles.somethingShortAnd2}>
                  Something short and simple here
                </div>
              </div>
            </div>
          </div>
          <div className={styles.homeGallery}>
            <div className={styles.pictures3}>
              <div className={styles.container} />
              <div className={styles.frameDiv} />
            </div>
            <div className={styles.homeGalleryInner}>
              <div className={styles.titleParent1}>
                <div className={styles.title4}>Title</div>
                <div className={styles.somethingShortAnd3}>
                  Something short and simple here
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subtitle1}>
          <div className={styles.div3}>
            <div className={styles.pictures4}>
              <div className={styles.div4} />
              <div className={styles.picturesChild1} />
            </div>
            <div className={styles.child}>
              <div className={styles.titleParent2}>
                <div className={styles.title5}>Title</div>
                <div className={styles.somethingShortAnd4}>
                  Something short and simple here
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div5}>
            <div className={styles.pictures5}>
              <div className={styles.div6} />
              <div className={styles.picturesChild2} />
            </div>
            <div className={styles.inner1}>
              <div className={styles.titleParent3}>
                <div className={styles.title6}>Title</div>
                <div className={styles.somethingShortAnd5}>
                  Something short and simple here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
