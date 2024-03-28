import { FunctionComponent } from "react";
import Component from "./Component";
import styles from "./ConnectionPoint.module.css";

const ConnectionPoint: FunctionComponent = () => {
  return (
    <section className={styles.connectionPoint}>
      <div className={styles.frameParent}>
        <div className={styles.fynParent}>
          <h1 className={styles.fyn}>FYN</h1>
          <div className={styles.dataSorter}>
            <div className={styles.logicOperator}>
              <header className={styles.signalReceiver}>
                <div className={styles.signalTransmitter}>
                  <h1 className={styles.home}>HOME</h1>
                </div>
                <div className={styles.signalTransmitter1}>
                  <h1 className={styles.gallery}>GALLERY</h1>
                </div>
                <h1 className={styles.service}>SERVICE</h1>
                <h1 className={styles.testimonials}>TESTIMONIALS</h1>
              </header>
            </div>
            <div className={styles.valueCalculator}>
              <div className={styles.flowController}>
                <div className={styles.dataVisualizer}>
                  <div className={styles.logicVisualizer} />
                  <div className={styles.customComponentParent}>
                    <div className={styles.customComponent} />
                    <div className={styles.gallery1}>Gallery</div>
                  </div>
                </div>
                <div className={styles.dataLinker}>
                  <img
                    className={styles.alignmentHelperIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
              </div>
            </div>
            <h1 className={styles.ourService}>Our Service</h1>
          </div>
        </div>
        <div className={styles.colorManagerParent}>
          <div className={styles.colorManager}>
            <Component
              image="/image-1@2x.png"
              painting="Painting "
              precisionPaintingServiceT="Precision painting service: transforming spaces with vibrant colors and expertise."
            />
            <div className={styles.rotationControl}>
              <div className={styles.alignmentTool}>
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
                <div className={styles.layerOrganizerWrapper}>
                  <div className={styles.layerOrganizer}>
                    <h2 className={styles.marbleAndGranite}>
                      marble and granite
                    </h2>
                    <h3 className={styles.exquisiteMarbleAnd}>
                      Exquisite marble and granite craftsmanship, elevating
                      spaces with timeless beauty.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <Component
              image="/image@2x.png"
              painting="ceramic installation"
              precisionPaintingServiceT="Expert ceramic installation, enhancing spaces with durability and style"
              propHeight="308px"
              propWidth="222px"
            />
          </div>
          <div className={styles.frameWrapper}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-316.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionPoint;
