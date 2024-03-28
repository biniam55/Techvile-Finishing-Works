import { FunctionComponent } from "react";
import Name1 from "./Name1";
import Email from "./Email";
import PhioneNumber from "./PhioneNumber";
import Button from "./Button";
import MapsFullMap from "./MapsFullMap";
import styles from "./ShapeSet.module.css";

const ShapeSet: FunctionComponent = () => {
  return (
    <section className={styles.shapeSet}>
      <div className={styles.buttonBankParent}>
        <div className={styles.buttonBank}>
          <div className={styles.contactForm5}>
            <form className={styles.iconInventory}>
              <div className={styles.iconInventoryChild} />
              <div className={styles.containerClust}>
                <h1 className={styles.connectUs}>Connect US</h1>
              </div>
              <div className={styles.pathPlot}>
                <div className={styles.arcArchive}>
                  <h2 className={styles.fillTheForm}>
                    Fill the form so that our team can reach out to you
                  </h2>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.nameParent}>
                    <Name1 />
                    <Email />
                  </div>
                  <PhioneNumber />
                </div>
              </div>
              <div className={styles.videoViewport}>
                <Button />
              </div>
            </form>
          </div>
        </div>
        <MapsFullMap />
      </div>
    </section>
  );
};

export default ShapeSet;
